import { useSearchParams } from 'react-router-dom'

import { MODALS } from '@/config/routes'

import { CheckNotificationModal } from './CheckNotificationModal'
import { ConfirmModal } from './ConfirmModal'

export const Modals = () => {
  const [searchParams] = useSearchParams()
  const modal = searchParams.get('modal')

  return (
    <>
      <CheckNotificationModal isOpen={modal === MODALS.CheckNotification} />
      <ConfirmModal isOpen={modal === MODALS.Confirm} />
    </>
  )
}
