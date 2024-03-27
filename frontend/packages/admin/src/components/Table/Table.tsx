import { Box, Table as MUITable, Sheet } from '@mui/joy'
import clsx from 'clsx'
import { type ReactNode, memo } from 'react'

export const Table = memo(
  ({
    headers,
    rows,
    firstEmptyHeader,
    endAlignRight,
  }: {
    headers: string[]
    rows: ReactNode[]
    firstEmptyHeader?: boolean
    endAlignRight?: boolean
  }) => {
    return (
      <Box>
        <Sheet variant="plain">
          <MUITable
            stickyHeader
            hoverRow
            borderAxis="xBetween"
            sx={{
              '--Table-headerUnderlineThickness': '0',
              '--TableCell-headBackground':
                'var(--joy-palette-background-level1)',
              '--TableRow-hoverBackground':
                'var(--joy-palette-background-level1)',
            }}
            className={clsx({ end_align_right_table: endAlignRight })}
          >
            <thead>
              <tr>
                {firstEmptyHeader && <th style={{ width: '40px' }}></th>}
                {headers.map((item, idx) => {
                  return <th key={idx}>{item}</th>
                })}
              </tr>
            </thead>
            <tbody>{...rows}</tbody>
          </MUITable>
        </Sheet>
      </Box>
    )
  },
)
