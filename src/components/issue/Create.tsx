import { AddIcon, DeleteIcon, InfoIcon, InfoOutlineIcon } from '@chakra-ui/icons'
import { FormControl, FormErrorMessage, FormLabel, HStack, IconButton, Input, Text, Textarea, Divider, Grid, GridItem, RadioGroup, Radio, useBoolean, Button, Stack, Tooltip } from '@chakra-ui/react'
import { Field, FieldArray, Form, Formik } from 'formik'
import { FC, useEffect, useState } from 'react'
import { Select } from 'chakra-react-select'
import { useQuery } from '@apollo/client'
import { BsInboxFill } from 'react-icons/bs'
import { debounce, set } from 'lodash'
import { useSetState } from 'ahooks'
import { phraseTypeMap } from '~/enum/phrase'
import { pullReqeustTypeMap } from '~/enum/pullRequest'
import { FindManyPhraseDocument, FindManyPhraseQueryVariables, FindManyTagDocument, FindManyTagQueryVariables, IssuePullReqeustUserInput, IssueUserCreateInput, PhraseStatus, PhraseType, PullRequestType } from '~/generated/gql'
import { mutateLog } from '~/utils/log'

interface Props {

}

export const FormIssue: FC<Props> = () => {
  const pullRequestTpl: IssuePullReqeustUserInput = {
    pullRequestType: PullRequestType.Create,
    phraseType: PhraseType.Single,
    word: '',
    code: '',
    index: 0,
    phraseId: null,
    tags: [],
  }

  const formValue: IssueUserCreateInput  = {
    content: '',
    pullRequests: [ pullRequestTpl ],
  }

  const [ isShowMoreOption, setIsShowMoreOption ] = useBoolean()

  return (
    <>
      <Formik
        initialValues={formValue}
        onSubmit={async () => {

        }}
      >
        {({ values }) => (
          <Form>
            <Field name="content">
              {({ field, form }) => (
                <FormControl>
                  <FormLabel htmlFor="content">内容</FormLabel>
                  <Textarea {...field} placeholder="请输入内容" resize="vertical" />
                  <FormErrorMessage>{form.errors.content}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <FieldArray name="pullRequests">
              {({ form, unshift, remove }) => (
                <div>
                  <HStack justifyContent="flex-end" alignItems="center" py={2}>
                    <span>新增一条</span>
                    <IconButton w={15} icon={<AddIcon />} aria-label="Add" onClick={() => unshift(pullRequestTpl)} />
                  </HStack>
                  {values.pullRequests.map((pr, idx) => (
                    <div key={idx}>
                      <Divider m={2} />
                      <HStack justifyContent="space-between">
                        <Text fontSize="xl">词条：{pr.word}</Text>
                        <IconButton w={15} icon={<DeleteIcon />} aria-label="Delete" onClick={() => remove(idx)} />
                      </HStack>
                      <Grid templateColumns="50% 1fr" gap={2}>
                        <GridItem colSpan={{ base: 2, md: 1 }}>
                          <Field name={`pullRequests[${idx}].pullRequestType`}>
                            {({ field, form }) => (
                              <FormControl>
                                <FormLabel htmlFor={`pullRequests[${idx}].pullRequestType`}>操作类型</FormLabel>
                                <RadioGroup
                                  {...field}
                                  onChange={it => {
                                    form.setFieldValue(`pullRequests[${idx}].pullRequestType`, it)
                                  }}
                                >
                                  <Grid templateColumns="50% 1fr">
                                    {Object.entries(pullReqeustTypeMap).map(([ k, v ]) => (
                                      <Radio value={k} key={k}>{v}</Radio>
                                    ))}
                                  </Grid>
                                </RadioGroup>
                              </FormControl>
                            )}
                          </Field>
                        </GridItem>
                        {
                          form.values.pullRequests[idx].pullRequestType === PullRequestType.Create
                            ? <FormItemSelectPullRequestType idx={idx}/>
                            : <FormItemSelectPhrase idx={idx}/>
                        }
                        <FormItemInputWord idx={idx}/>
                        <GridItem colSpan={{ base: 2, md: 1 }}>
                          <Field name={`pullRequests[${idx}].code`}>
                            {({ field, form }) => (
                              <FormControl>
                                <FormLabel htmlFor={`pullRequests[${idx}].code`}>编码</FormLabel>
                                <Input {...field} placeholder="请输入编码" />
                              </FormControl>
                            )}
                          </Field>
                        </GridItem>
                        {
                          isShowMoreOption && <FormMore idx={idx}/>
                        }
                        <GridItem colSpan={2}>
                          <Button w="full" onClick={setIsShowMoreOption.toggle}>{isShowMoreOption ? '隐藏' : '显示'}高级选项</Button>
                        </GridItem>
                      </Grid>
                    </div>
                  ))}
                </div>
              )}
            </FieldArray>
          </Form>
        )}
      </Formik>
    </>
  )
}

interface PropsIdx {
  idx: number
}

function FormMore({ idx }: PropsIdx) {
  return (
    <>
      <GridItem colSpan={{ base: 2, md: 1 }}>
        <Field name={`pullRequests[${idx}].index`}>
          {({ field, form }) => (
            <FormControl>
              <FormLabel htmlFor={`pullRequests[${idx}].index`}>优先级</FormLabel>
              <Input {...field} placeholder="值越大，排名越前" />
            </FormControl>
          )}
        </Field>
      </GridItem>
      <FormItemSelectTag idx={idx} />
    </>
  )
}

function FormItemSelectTag({ idx }: PropsIdx) {
  const [ variables, setVariables ] = useState<FindManyTagQueryVariables>({})
  const { data, loading, error } = useQuery(FindManyTagDocument, {
    variables
  })

  if (error) {
    mutateLog(error, {
      prefixTitle: '标签列表加载失败：'
    })
    return <Text>`加载错误: ${error.message}`</Text>
  }

  const tagOptions = data?.findManyTag.map(it => ({
    label: it.name,
    value: it.id,
  }))

  return <GridItem colSpan={{ base: 2, md: 1 }}>
    <Field name={`pullRequests[${idx}].tags`}>
      {({ field, form }) => (
        <FormControl>
          <FormLabel htmlFor={`pullRequests[${idx}].tags`}>标签</FormLabel>
          <Select
            isMulti
            name={field.name}
            defaultValue={field.value}
            isLoading={loading}
            options={tagOptions}
            placeholder="请选择标签"
            className="md:w-48"
            noOptionsMessage={() => (
              <HStack gap={1}>
                <BsInboxFill display="inline-block" fontSize="50"/>
                <span>没有更多选项了</span>
              </HStack>
            )}
          />
        </FormControl>
      )}
    </Field>
  </GridItem>
}

function FormItemInputWord({ idx }: PropsIdx) {
  return <GridItem colSpan={{ base: 2, md: 1 }}>
    <Field name={`pullRequests[${idx}].word`}>
      {({ field, form }) => (
        <FormControl>
          <FormLabel htmlFor={`pullRequests[${idx}].word`}>词条</FormLabel>
          {
            form.values.pullRequests[idx].phraseType === PhraseType.Single
              ? <Input {...field} placeholder="请输入词条" />
              : <Textarea {...field} placeholder="请输入词条" />
          }
        </FormControl>
      )}
    </Field>
  </GridItem>
}

function FormItemSelectPullRequestType({ idx }: PropsIdx) {
  const phraseTypeOptions = Object.entries(phraseTypeMap).map(([ k, v ]) => ({
    label: v,
    value: k,
  }))

  return <GridItem colSpan={{ base: 2, md: 1 }}>
    <Field name={`pullRequests[${idx}].phraseType`}>
      {({ field, form }) => (
        <FormControl>
          <FormLabel htmlFor={`pullRequests[${idx}].phraseType`}>词条类型</FormLabel>
          <Select
            name={field.name}
            defaultValue={phraseTypeOptions.find(it => it.value === field.value)}
            options={phraseTypeOptions}
            onChange={
              (option: typeof phraseTypeOptions[number]) => form.setFieldValue(field.name, option.value)
            }
            className="md:w-48"
          />
        </FormControl>
      )}
    </Field>
  </GridItem>
}

function FormItemSelectPhrase({ idx }: PropsIdx) {
  const [ variables, setVariables ] = useSetState<FindManyPhraseQueryVariables>({
    where: {
      status: {
        equals: PhraseStatus.Finish
      },
    }
  })
  const { data, loading, error } = useQuery(FindManyPhraseDocument, {
    variables
  })

  if (error) {
    mutateLog(error, {
      prefixTitle: '词条列表获取失败：'
    })
    return <Text>`词条获取错误: ${error.message}`</Text>
  }
  const tagOptions = data?.findManyPhrase.map(it => ({
    label: it.word,
    value: it.id,
    code: it.code,
    index: it.index,
  }))

  function onInputSearch(value: string) {
    setVariables(v => {
      set(v, 'where.word.contains', value)
      return v
    })
  }

  const formatOptionLabel = ({ value, label, code, index }, meta) => (
    <HStack>
      <Tooltip isDisabled={label.length < 15} label={label}>
        <Text
          maxWidth={{ value: '16', menu: '28' }[meta.context]}
          noOfLines={{ value: 0, menu: 4 }[meta.context]}
        >{label}</Text>
      </Tooltip>
      <Text>{code}</Text>
    </HStack>
  )

  return <GridItem colSpan={{ base: 2, md: 1 }}>
    <Field name={`pullRequests[${idx}].phraseId`}>
      {({ field, form }) => (
        <FormControl>
          <FormLabel htmlFor={`pullRequests[${idx}].phraseId`}>
            <HStack alignItems="center">
              <span>原词条</span>
              {
                form.values.pullRequests[idx]?.phraseId
                  && (
                    <Tooltip label="查看已选择词条信息">
                      <IconButton size="xs" aria-label='查看词条信息' icon={<InfoIcon/>}/>
                    </Tooltip>
                  )
              }
            </HStack>
          </FormLabel>
          <Select
            name={field.name}
            isLoading={loading}
            options={tagOptions}
            onChange={
              (option: typeof tagOptions[number]) => form.setFieldValue(field.name, option.value)
            }
            onInputChange={debounce(onInputSearch, 500)}
            noOptionsMessage={() => ('没有词条可选')}
            className="md:w-48"
            formatOptionLabel={formatOptionLabel}
          />
        </FormControl>
      )}
    </Field>
  </GridItem>
}
