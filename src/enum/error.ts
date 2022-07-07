import { entries } from 'lodash'
import { ErrorCode } from '~/generated/gql'

export const ErrorCodeMap = new Map<keyof typeof ErrorCode, string>()

export enum GraphQLErrorCode {
  BAD_USER_INPUT = 'BAD_USER_INPUT',
  P2002 = 'P2002'
}

export const errorCodeData: Partial<Record<ErrorCode | GraphQLErrorCode, string>> = {
  'BAD_USER_INPUT': '',
  'U1000': '登录名已被使用',
  'P2002': '提交数据有重复项',
  'U1001': '邮箱已被使用',
  'PH1001': '词条编码已存在',
  'MU1000': '多行内容错误',
  'PR1001': '词条、编码必须填写',
  'PR1002': '词条或编码必须填写一项',
  'PR1004': 'PR已存在',
}

export function installErrorCodeMap() {
  for (let [ k, v ] of entries(errorCodeData)) {
    ErrorCodeMap.set(k as keyof typeof ErrorCode, v)
  }
}
