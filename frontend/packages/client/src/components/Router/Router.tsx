import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { ButtonsTaskPage } from '@/pages/ButtonsTaskPage/ButtonsTaskPage'
import { EntryPage } from '@/pages/EntryPage/EntryPage'
import { FinishPage } from '@/pages/FinishPage/FinishPage'
import { NoQuizPage } from '@/pages/NoQuizPage/NoQuizPage'
import { TestPage } from '@/pages/TestPage/TestPage'
import { TextfieldTaskPage } from '@/pages/TextfieldTaskPage/TextfieldTaskPage'

import App from '../App/App'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <TestPage /> },
      { path: '/pinCodePage', element: <TestPage /> },
      { path: '/entryPage', element: <EntryPage /> },
      { path: '/beforeTaskPage', element: <TestPage /> },
      { path: '/textFieldTaskPage', element: <TextfieldTaskPage /> },
      { path: '/buttonsTaskPage', element: <ButtonsTaskPage /> },
      { path: '/finishPage', element: <FinishPage /> },
      { path: '/noQuizPage', element: <NoQuizPage /> },
    ],
  },
  {
    path: '*',
    element: <Navigate to={'/'} />,
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
