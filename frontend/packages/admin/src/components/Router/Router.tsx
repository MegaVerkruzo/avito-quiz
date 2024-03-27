import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { AchievementsCreatePage } from '@/pages/AchievementsCreatePage/AchievementsCreatePage'
import { AchievementsPage } from '@/pages/AchievementsPage/AchievementsPage'
import { AdminsCreatePage } from '@/pages/AdminsCreate/AdminsCreatePage'
import { AdminsPage } from '@/pages/AdminsPage/AdminsPage'
import { BotNotificationsPage } from '@/pages/BotNotificationsPage/BotNotificationsPage'
import { ExcursionCreatePage } from '@/pages/ExcursionCreatePage/ExcursionCreatePage'
import { LoginPage } from '@/pages/LoginPage/LoginPage'
import { SettingsPage } from '@/pages/SettingsPage/SettingsPage'
import { TaskControlPage } from '@/pages/TaskControlPage/TaskControlPage'
import { TaskCreate } from '@/pages/TaskCreatePage/TaskCreatePage'
import { UserHistoryPage } from '@/pages/UserHistoryPage/UserHistoryPage'
import { UsersPage } from '@/pages/UsersPage/UsersPage'

import { ROUTES } from '@/config/routes'

import App from '../App/App'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: ROUTES.Admins, element: <AdminsPage /> },
      { path: ROUTES.AdminsCreate, element: <AdminsCreatePage /> },
      {
        path: `${ROUTES.AdminsUpdate}/:id`,
        element: <AdminsCreatePage />,
      },

      { path: ROUTES.TaskControl, element: <TaskControlPage /> },
      { path: ROUTES.TaskCreate, element: <TaskCreate /> },
      { path: `${ROUTES.TaskUpdate}/:id`, element: <TaskCreate /> },

      { path: ROUTES.BotNotifications, element: <BotNotificationsPage /> },

      { path: ROUTES.Users, element: <UsersPage /> },
      { path: `${ROUTES.UserHistory}/:id`, element: <UserHistoryPage /> },

      { path: ROUTES.Achievements, element: <AchievementsPage /> },
      { path: ROUTES.AchievementsCreate, element: <AchievementsCreatePage /> },
      {
        path: `${ROUTES.AchievementsUpdate}/:id`,
        element: <AchievementsCreatePage />,
      },

      { path: ROUTES.ExcursionCreate, element: <ExcursionCreatePage /> },
      {
        path: `${ROUTES.ExcursionUpdate}/:id`,
        element: <ExcursionCreatePage />,
      },

      { path: ROUTES.Settings, element: <SettingsPage /> },
      { path: ROUTES.Login, element: <LoginPage /> },

      { path: '/', element: <Navigate to={ROUTES.TaskControl} /> },
    ],
  },
  {
    path: '*',
    element: <Navigate to={ROUTES.TaskControl} />,
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
