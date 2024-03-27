import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemContent,
  Typography,
} from '@mui/joy'
import {
  BellIcon,
  ChecklistIcon,
  GearIcon,
  PeopleIcon,
  PersonAddIcon,
  VerifiedIcon,
} from '@primer/octicons-react'
import { Link, useLocation } from 'react-router-dom'

import { ROUTES } from '@/config/routes'

const routes = [
  {
    path: ROUTES.Admins,
    text: 'Администраторы',
    icon: <PersonAddIcon size={16} />,
  },
  {
    path: ROUTES.TaskControl,
    text: 'Управление заданиями',
    icon: <ChecklistIcon size={16} />,
  },
  {
    path: ROUTES.BotNotifications,
    text: 'Уведомления в боте',
    icon: <BellIcon size={16} />,
  },
  {
    path: ROUTES.Users,
    text: 'Участники',
    icon: <PeopleIcon size={16} />,
  },
  {
    path: ROUTES.Achievements,
    text: 'Ачивки',
    icon: <VerifiedIcon size={16} />,
  },
  {
    path: ROUTES.Settings,
    text: 'Настройки',
    icon: <GearIcon size={16} />,
  },
]

export const RouteList = () => {
  const { pathname } = useLocation()

  return (
    <Box
      sx={{
        minHeight: 0,
        overflow: 'hidden auto',

        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <List
        size="sm"
        sx={{
          gap: { xs: '15px' },
          '--ListItem-radius': '5px',
        }}
      >
        {routes.map((route, idx) => (
          <Link
            key={idx}
            to={route.path}
          >
            <ListItem
              sx={
                pathname.startsWith(route.path)
                  ? { background: 'var(--active-tab)' }
                  : {}
              }
            >
              <ListItemButton>
                {route.icon}
                <ListItemContent>
                  <Typography fontSize={'16px'}>{route.text}</Typography>
                </ListItemContent>
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  )
}
