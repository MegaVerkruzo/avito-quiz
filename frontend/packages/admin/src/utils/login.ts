export const getAccessToken = (): string | null => {
  return localStorage.getItem('token')
}

export const saveAccessToken = (token: string) => {
  localStorage.setItem('token', token)
}

export const clearAccessToken = () => {
  localStorage.removeItem('token')
}
