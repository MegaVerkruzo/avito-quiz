import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { AchievementsPage } from '@/pages/Achievements/Achievements'
import { AdminsPage } from '@/pages/Admins/Admins'
import { BotNotificationsPage } from '@/pages/BotNotificationsPage/BotNotificationsPage'
import { LoginPage } from '@/pages/LoginPage/LoginPage'
import { ParticipantsPage } from '@/pages/ParticipantsPage/ParticipantsPage'
import { SettingsPage } from '@/pages/SettingsPage/SettingsPage'
import { TaskControlPage } from '@/pages/TaskControlPage/TaskControlPage'

import { ROUTES } from '@/config/routes'

import App from '../App/App'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: ROUTES.Admins, element: <AdminsPage /> },
      { path: ROUTES.TaskControl, element: <TaskControlPage /> },
      { path: ROUTES.BotNotifications, element: <BotNotificationsPage /> },
      { path: ROUTES.Participants, element: <ParticipantsPage /> },
      { path: ROUTES.Achievements, element: <AchievementsPage /> },
      { path: ROUTES.Settings, element: <SettingsPage /> },
      { path: ROUTES.Login, element: <LoginPage /> },
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
