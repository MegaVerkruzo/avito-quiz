import axios from 'axios'

import { getAccessToken } from '@/utils/login'

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
  const headers: Record<string, string> = {
    Authorization: getAccessToken() || '',
  }

  const apiUrl = `${API_URL}${url}`
  const response = await axios({
    method,
    url: apiUrl,
    headers,
    data,
  })

  return response.data
}
