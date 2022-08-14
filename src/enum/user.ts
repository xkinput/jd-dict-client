import { SignUpType, UserStatus } from '~/generated/gql'

export const SignUpTypeMap: Partial<Record<SignUpType, string>> = {
  USERNAME: '用户名注册',
  WECHAT: '微信注册',
}
export const UserStatusMap: Partial<Record<UserStatus, string>> = {
  ENABLE: '可用',
  DISABLE: '禁用',
}
