import { Box, Sheet, Table } from '@mui/joy'

import { TableRow } from './TableRow'

export const TaskTable = () => {
  return (
    <Box>
      <Sheet variant="plain">
        <Table
          stickyHeader
          hoverRow
          borderAxis="xBetween"
          sx={{
            '--TableCell-headBackground':
              'var(--joy-palette-background-level1)',
            '--TableRow-hoverBackground':
              'var(--joy-palette-background-level1)',
          }}
        >
          <thead>
            <tr>
              <th style={{ width: '40px' }}></th>
              <th>№ задания</th>
              <th>Видимость</th>
              <th>Задание</th>
              <th>Локация</th>
              <th>Картинка</th>
              <th
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'flex-end',
                }}
              >
                Действия
              </th>
            </tr>
          </thead>
          <tbody>
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
          </tbody>
        </Table>
      </Sheet>
    </Box>
  )
}
