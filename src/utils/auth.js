const TokenKey = '87330f8714214b548758ed1b1a44a18b'

export function getToken () {
  return localStorage.getItem(TokenKey)
}
