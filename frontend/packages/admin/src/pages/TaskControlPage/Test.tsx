import { Box, Typography } from '@mui/joy'

import { CenterContainer } from '@/components/Containers/CenterContainer'
import { DateTimePicker } from '@/components/DateTimePicker/DateTimePicker'
import { MainLayout } from '@/components/Layouts/MainLayout'

import { useOpenModal } from '@/hooks/useModals'

export const TestPage = () => {
  const { openModal } = useOpenModal()

  return (
    <MainLayout>
      <Typography
        level="h1"
        sx={{ mb: '20px' }}
      >
        Управление заданиями
      </Typography>
      <CenterContainer>
        {/* <EmptyExcursion /> */}
        {/* <CreateExcursionForm /> */}
        {/* <CreateAdminForm login="123" /> */}
        {/* <Box sx={{ maxWidth: '200px' }}>
              <UploadImage />
            </Box> */}

        <Box sx={{ maxWidth: '200px' }}>
          <DateTimePicker />
        </Box>
      </CenterContainer>
    </MainLayout>
  )
}


// const VALUES = {
//   turnOnAll: { text: 'Включить все задания', icon: <TurnOnAllIcon /> },
//   turnOfAll: { text: 'Выключить все задания' },
//   save: { text: 'Скопировать экскурсию' },
// }

//               <Button
//                 onClick={() =>
//                   openModal(MODALS.Confirm, {
//                     title:
//                       'Это сообщение увидит пользователь. Проверьте корректность сообщения',
//                     description:
//                       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//                   })
//                 }
//               >
//                 Открыть модалку
//               </Button>
