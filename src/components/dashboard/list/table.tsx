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
import { StatusComponent } from '@/components/materinals_components/status_components/status_component';

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

export function CalcListTable({
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
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center'}}>루트총판</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center'}}>총판아이디</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center'}}>아이디</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center'}}>닉네임</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center'}}>이전쿠폰개수</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center'}}>지급쿠폰개수</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center'}}>종류</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center'}}>등록시간</TableCell>
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
                      <Typography variant="subtitle2">{row.name}<StatusComponent 
                        Status_text={'Success'}
                        tailwind_class_desing={['bg-green-400', 'text-white', 'rounded-full', 'px-2 py-1', 'ml-2']}
                        text_size={10}
                        /></Typography>
                    </Stack>
                  </TableCell>
                  <TableCell className='whitespace-nowrap'>{row.email}
                       <StatusComponent 
                        Status_text={'warnning'}
                        tailwind_class_desing={['bg-yellow-400', 'px-2', 'py-1', 'rounded-full', 'ml-2']}
                        text_size={10} />
                   </TableCell>
                  <TableCell className='whitespace-nowrap'>
                    {row.email}
                    <StatusComponent 
                        Status_text={'warnning'}
                        tailwind_class_desing={['bg-sky-400', 'px-2', 'py-1', 'rounded-full', 'ml-2']}
                        text_size={10} />
                  </TableCell>
                  <TableCell className='whitespace-nowrap'>
                    {row.email}
                    <StatusComponent 
                        Status_text={'sky'}
                        tailwind_class_desing={['bg-blue-400', 'px-2', 'py-1', 'ml-2', 'rounded-full', 'text-white']}
                        text_size={10} />
                  </TableCell>
                  <TableCell className='whitespace-nowrap'>
                    {row.email}
                    <StatusComponent 
                        Status_text={'warnning'}
                        tailwind_class_desing={['bg-blue-500', 'px-2', 'py-1', 'ml-2', 'rounded-full', 'text-white']}
                        text_size={10} />
                  </TableCell>
                  <TableCell className='whitespace-nowrap'>
                    {row.email}
                    <StatusComponent 
                        Status_text={'warnning'}
                        tailwind_class_desing={['bg-sky-500', 'px-2', 'py-1', 'ml-2', 'rounded-full', 'text-white']}
                        text_size={10} />
                  </TableCell>
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
