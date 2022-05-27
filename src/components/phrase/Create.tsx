import { AddIcon, DeleteIcon } from '@chakra-ui/icons'
import { FormControl, FormErrorMessage, FormLabel, HStack, IconButton, Input, Text, Stack, Textarea, Divider, Grid, GridItem, RadioGroup, Radio, useBoolean, Button } from '@chakra-ui/react'
import { Field, FieldArray, Form, Formik } from 'formik'
import { FC, useState } from 'react'
import { Select } from 'chakra-react-select'
import { phraseTypeMap } from '~/enum/phrase'
import { pullReqeustTypeMap } from '~/enum/pullRequest'
import { IssuePullReqeustUserInput, IssueUserCreateInput, PhraseType, PullRequestType } from '~/generated/gql'

interface Props {

}

export const CreatePhrase: FC<Props> = () => {
  const pullRequestTpl: IssuePullReqeustUserInput = {
    pullRequestType: PullRequestType.Create,
    phraseType: PhraseType.Single,
    word: '',
    code: '',
    index: 0,
  }

  const formValue: IssueUserCreateInput  = {
    content: '',
    pullRequests: [ pullRequestTpl ],
  }

  const phraseTypeOptions = Object.entries(phraseTypeMap).map(([ k, v ]) => ({
    label: v,
    value: k,
  }))

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
                        <Text fontSize="xl">标题：{pr.word}</Text>
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
                        <GridItem colSpan={{ base: 2, md: 1 }}>
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
                                  }/>
                              </FormControl>
                            )}
                          </Field>
                        </GridItem>
                        <GridItem colSpan={{ base: 2, md: 1 }}>
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
                          isShowMoreOption && CreateIssueForm({ idx })
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

const CreateIssueForm = ({ idx }: { idx: number }) => {
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
      <GridItem colSpan={{ base: 2, md: 1 }}>
        <Field name={`pullRequests[${idx}].tags`}>
          {({ field, form }) => (
            <FormControl>
              <FormLabel htmlFor={`pullRequests[${idx}].tags`}>标签</FormLabel>
              <Select 
                isMulti
                name={field.name}
                defaultValue={field.value}
                options={[]}
                placeholder="请选择标签"
              />
            </FormControl>
          )}
        </Field>
      </GridItem>
    </>
  )
}
