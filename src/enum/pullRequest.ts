import { PullRequestType } from '~/generated/gql'

export const pullReqeustTypeMap: Partial<Record<PullRequestType, string>> = {
  Create: '创建',
  Change: '修改',
  Delete: '删除',
  Move: '移动',
}
