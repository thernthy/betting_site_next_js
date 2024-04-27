'use client';

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import dayjs from 'dayjs';
import '@/styles/theme/scroll_bar_style/scroll_bar.css';
import { useSelection } from '@/hooks/use-selection';

function noop(): void {
  // do nothing
}

export interface Customer {
  id: string;
  avatar: string;
  name: string;
  email: string;
  address: { city: string; state: string; country: string; street: string };
  phone: string;
  createdAt: Date;
}

interface CustomersTableProps {
  count?: number;
  page?: number;
  rows?: Customer[];
  rowsPerPage?: number;
}

export function CustomTable({
  count = 0,
  rows = [],
  page = 0,
  rowsPerPage = 0,
}: CustomersTableProps): React.JSX.Element {
  const rowIds = React.useMemo(() => {
    return rows.map((customer) => customer.id);
  }, [rows]);

  const { selectAll, deselectAll, selectOne, deselectOne, selected } = useSelection(rowIds);

  const selectedSome = (selected?.size ?? 0) > 0 && (selected?.size ?? 0) < rows.length;
  const selectedAll = rows.length > 0 && selected?.size === rows.length;

  return (
    <div>
      <Box sx={{ overflowX: 'auto' }}  className='overview_table'>
        <Table sx={{ minWidth: '100%' }}>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  checked={selectedAll}
                  indeterminate={selectedSome}
                  onChange={(event) => {
                    if (event.target.checked) {
                      selectAll();
                    } else {
                      deselectAll();
                    }
                  }}
                />
              </TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center'}}>번호</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center'}}>사이트</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center'}}>총판아이디</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center'}}>닉네임</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center'}}>예금주</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center'}}>별칭</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center'}} colSpan={3}>롤링</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center'}} colSpan={2}>보유머니</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center'}}>신청일자</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center'}}>처리일자</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center'}}>상태</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              const isSelected = selected?.has(row.id);

              return (
                <TableRow hover key={row.id} selected={isSelected}>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={isSelected}
                      onChange={(event) => {
                        if (event.target.checked) {
                          selectOne(row.id);
                        } else {
                          deselectOne(row.id);
                        }
                      }}
                    />
                  </TableCell>
                  <TableCell className='whitespace-nowrap'>
                    <Stack sx={{ alignItems: 'center' }} direction="row" spacing={2}>
                      <Avatar src={row.avatar} />
                      <Typography variant="subtitle2">{row.name}</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell className='whitespace-nowrap'>{row.email}</TableCell>
                  <TableCell className='whitespace-nowrap'>{row.email}</TableCell>
                  <TableCell className='whitespace-nowrap'>{row.email}</TableCell>
                  <TableCell className='whitespace-nowrap'>{row.email}</TableCell>
                  <TableCell className='whitespace-nowrap'>{row.email}</TableCell>
                  <TableCell className='whitespace-nowrap'>{row.email}</TableCell>
                  <TableCell className='whitespace-nowrap'>{row.email}</TableCell>
                  <TableCell className='whitespace-nowrap'>{row.email}</TableCell>
                  <TableCell className='whitespace-nowrap'>{row.email}</TableCell>
                  <TableCell className='whitespace-nowrap'>{row.email}</TableCell>
                  <TableCell className='whitespace-nowrap'>
                    {row.address.city}, {row.address.state}, {row.address.country}
                  </TableCell>
                  <TableCell className='whitespace-nowrap'>{row.phone}</TableCell>
                  <TableCell className='whitespace-nowrap'>{dayjs(row.createdAt).format('MMM D, YYYY')}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Box>
      <Divider />
      <TablePagination
        component="div"
        count={count}
        onPageChange={noop}
        onRowsPerPageChange={noop}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </div>
  );
}
