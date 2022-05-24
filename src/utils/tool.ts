import { store } from './../store/index'
import { APP_NAME } from '~/config/global'
import { setToken, userSlice } from '~/store/user'
import { findUserMe } from '~/store/user/thunks'

export async function sleep(ms: number) {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve(null)
    }, ms)
  )
}

export function getLocalStorageItem<T>(key: string): T | null {
  let item = localStorage.getItem(key)

  if (item) {
    return JSON.parse(item)
  }
}

export function setLocalStorageItem(key: string, value: any) {
  localStorage.setItem(key, JSON.stringify(value))
}

const AUTH_KEY_NAME = `${APP_NAME}_authKey`

function getAuthKeyValue() {
  return getLocalStorageItem<string>(AUTH_KEY_NAME)

}
export function getAuthKey() {
  return `Bearer ${getAuthKeyValue()}`
}

export function checkStateAuthKey() {
  let token = getAuthKeyValue()
  
  if (!token) return

  store.dispatch(setToken(token))

  // trigger findUserMe
  store.dispatch(findUserMe())
}

export function setAuthKey(key: string) {
  return setLocalStorageItem(AUTH_KEY_NAME, key)
}
