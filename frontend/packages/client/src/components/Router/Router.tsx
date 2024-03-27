import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { ButtonsTaskPage } from '@/pages/ButtonsTaskPage/ButtonsTaskPage'
import { EntryPage } from '@/pages/EntryPage/EntryPage'
import { FinishPage } from '@/pages/FinishPage/FinishPage'
import { NoQuizPage } from '@/pages/NoQuizPage/NoQuizPage'
import { TestPage } from '@/pages/TestPage/TestPage'
import { TextfieldTaskPage } from '@/pages/TextfieldTaskPage/TextfieldTaskPage'

import { ROUTES } from '@/config/routes'

import App from '../App/App'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: ROUTES.Main, element: <TestPage /> },
      { path: ROUTES.PinCodePage, element: <TestPage /> },
      { path: ROUTES.EntryPage, element: <EntryPage /> },
      { path: ROUTES.BeforeTaskPage, element: <TestPage /> },
      { path: ROUTES.TextFieldTaskPage, element: <TextfieldTaskPage /> },
      { path: ROUTES.ButtonsTaskPage, element: <ButtonsTaskPage /> },
      { path: ROUTES.FinishPage, element: <FinishPage /> },
      { path: ROUTES.NoQuizPage, element: <NoQuizPage /> },
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
