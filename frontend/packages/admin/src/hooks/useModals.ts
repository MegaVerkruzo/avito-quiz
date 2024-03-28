import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export type AnyDict = {
  [key: string]: unknown
}

export const useOpenModal = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const openModal = useCallback(
    (modal: string, meta?: AnyDict, shouldReplace?: boolean) => {
      const params = new URLSearchParams(location.search)
      params.set('modal', modal)
      return navigate(`${location.pathname}?${params.toString()}`, {
        state: meta,
        replace: shouldReplace,
      })
    },
    [location.pathname, location.search, navigate],
  )
  return { openModal }
}
