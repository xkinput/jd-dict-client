import { PhraseType } from '~/generated/gql'

export const phraseTypeMap: Partial<Record<PhraseType, string>> = {
  Single: '单字',
  Phrase: '词组',
  Sentence: '短句',
  Link: '链接',
  Poem: '诗句',
  Symbol: '符号',
  Other: '其他'
}
