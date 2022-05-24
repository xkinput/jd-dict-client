import { entries } from 'lodash'
import { ErrorCode } from '~/generated/gql'

export const ErrorCodeMap = new Map<keyof typeof ErrorCode, string>()

export enum GraphQLErrorCode {
  BAD_USER_INPUT = 'BAD_USER_INPUT'
}

export const errorCodeData: Partial<Record<ErrorCode | GraphQLErrorCode, string>> = {
  'BAD_USER_INPUT': '',
  'U1000': '登录名已被使用',
  'U1001': '邮箱已被使用',
}

export function installErrorCodeMap() {
  for (let [ k, v ] of entries(errorCodeData)) {
    ErrorCodeMap.set(k as ErrorCode, v)
  }
}
