import axios from 'axios'
import { API_URL } from '../config/constants'

interface BaseApiRequestOptions {
  url: string
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  data?: object
}

export const baseApiRequest = async <T>({
  url,
  method,
  data,
}: BaseApiRequestOptions): Promise<T> => {
  // TODO: get tg params
  const signature = ''

  const headers: Record<string, string> = {
    Authorization: signature,
  }

  const apiUrl = `${API_URL}${url}`
  const response = await axios({
    method,
    url: apiUrl,
    data,
    headers,
  })

  return response.data
}
