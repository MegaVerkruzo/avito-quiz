import { Box, Sheet, Table } from '@mui/joy'

import { TableRow } from './TableRow'

export const AdminTable = () => {
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
              <th>Логин администратора</th>
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
