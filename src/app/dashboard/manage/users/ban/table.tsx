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
import { StatusComponent } from '@/components/materinals_components/status_components/status_component';
function noop(): void {
  // do nothing
}

export interface RowData {
  index:number;
  site:string;
  root_distributor:string;
  top_distributor:string;
  id: string;
  nickname:string;
  account_holder:string;
  color_nickname:string;
  date_of_subscription:Date;
  number_of_failures:string;
  block_date_and_time:Date;
  explanation:string;
}

export interface HeaderProInterFace {
  id:number;
  header_title:string;
}

interface CustomersTableProps {
  count?: number;
  page?: number;
  rows?: RowData[];
  rowsPerPage?: number;
  headers?: HeaderProInterFace[];
}

export function DataTable({
  count = 0,
  rows = [],
  page = 0,
  rowsPerPage = 0,
  headers = []
}: CustomersTableProps): React.JSX.Element {
  return (
    <div>
      <Box sx={{ overflowX: 'auto' }}  className='overview_table'>
        <Table sx={{ minWidth: '100%' }}>
          <TableHead>
            <TableRow>
            <TableCell className='whitespace-nowrap'sx={{textAlign:'center'}}>
              number          
            </TableCell>
              {
                headers?.map((row, index) => {
                  return (
                      <TableCell className='whitespace-nowrap' key={row.id} sx={{textAlign:'center'}}>
                        {row.header_title}
                      </TableCell>
                  )
                })
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {
              rows.map((row) => {
                return (
                  <TableRow hover key={row.index}>
                    <TableCell className='whitespace-nowrap'>
                      {row.index}
                    </TableCell>
                    <TableCell className='whitespace-nowrap'>
                      {row.site}
                    </TableCell>
                    <TableCell className='whitespace-nowrap'>
                      {row.root_distributor}
                    </TableCell>
                    <TableCell className='whitespace-nowrap'>
                      {row.top_distributor}
                    </TableCell>
                    <TableCell className='whitespace-nowrap'>
                      {row.id}
                    </TableCell>
                    <TableCell className='whitespace-nowrap'>
                      {row.nickname}
                    </TableCell>
                    <TableCell className='whitespace-nowrap'>
                      {row.account_holder}
                    </TableCell>
                    <TableCell className='whitespace-nowrap'>
                      <StatusComponent bgColorName={row.color_nickname} tailwind_class_desing={['px-7  text-white']} />
                    </TableCell>
                    <TableCell className='whitespace-nowrap'>
                      {dayjs(row.date_of_subscription).format('MMM, DD, YYYY')}
                    </TableCell>
                    <TableCell className='whitespace-nowrap'>
                      {row.number_of_failures}
                    </TableCell>
                    <TableCell className='whitespace-nowrap'>
                      {dayjs(row.block_date_and_time).format('MMM, DD, YYYY')}
                    </TableCell>
                    <TableCell className='whitespace-nowrap'>
                      {row.explanation}
                    </TableCell>
                  </TableRow>
                )
              })
              
            }
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
