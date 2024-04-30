'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import dayjs from 'dayjs';
import '@/styles/theme/scroll_bar_style/scroll_bar.css';
import { StatusComponent } from '@/components/materinals_components/status_components/status_component';

function noop(): void {
  // do nothing
}

export interface ParnerCashList {
  id:string;
  root_distributor:string;
  top_distributor:string;
  nickname:string;
  money:number;
  prevlous_money:number;
  after_money:number;
  type:string;
  explanation:number;
  application_date:string;
}

export interface SetTableHeader{
    id:Number;
    headerTitle:String;
}

interface CashPartnerList {
  count?: number;
  page?: number;
  rows?: ParnerCashList[];
  rowsPerPage?: number;
  tableHeader?: SetTableHeader[];
}

export function CashPartnerList({
  count = 0,
  rows = [],
  page = 0,
  rowsPerPage = 0,
  tableHeader = []
}: CashPartnerList): React.JSX.Element {

  return (
    <div>
      <Box sx={{ overflowX: 'auto' }}  className='overview_table'>
        <Table sx={{ minWidth: '100%' }}>
          <TableHead>
            <TableRow>
              {
                tableHeader.map((header, index)=>{
                    return (
                      <TableCell className='whitespace-nowrap' key={index} sx={{textAlign:'center'}}>{header.headerTitle}</TableCell>
                    )
                  })
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => {
              //  const  moneyConverdTor = row.prevlous_money.toLocaleString('en-US');
              //  const prevLous = row.prevlous_money.toLocaleString('en-US');
              //  const afterMoneyConverdtor = row.after_money.toLocaleString('en-US');
              return (
                <TableRow hover key={row.id}>
                  <TableCell className='whitespace-nowrap'>{index+1}</TableCell>
                  <TableCell className='whitespace-nowrap'>{row.root_distributor}</TableCell>
                  <TableCell className='whitespace-nowrap'>{row.top_distributor}</TableCell>
                  <TableCell className='whitespace-nowrap'>{row.id}</TableCell>
                  <TableCell className='whitespace-nowrap'>{row.nickname}</TableCell>
                  <TableCell className='whitespace-nowrap'>{ row.money.toLocaleString('en-US') }</TableCell>
                  <TableCell className='whitespace-nowrap'>{ row.prevlous_money.toLocaleString('en-US') }</TableCell>
                  <TableCell className='whitespace-nowrap'>{ row.after_money.toLocaleString('en-US') }</TableCell>
                  <TableCell className='whitespace-nowrap'>
                    <StatusComponent Status_text={row.type} tailwind_class_desing={[
                      'px-2 py-1 text-white rounded-full shadow-md', 
                      `${
                        row.type === 'total fines'? 'bg-red-300':
                        row.type === 'Member deposit'? 'bg-green-400':
                        row.type === 'point conversion'? 'bg-sky-400':
                        row.type === 'game currency exchange'? 'bg-green-300':
                        row.type === 'game charging'? 'bg-green-500':
                        row.type === 'Member deposit'? 'bg-green-400':'bg-blue-400'
                      }`
                    ]} />
                  </TableCell>
                  <TableCell className='whitespace-nowrap'>{row.explanation}</TableCell>
                  <TableCell className='whitespace-nowrap'>{row.application_date}</TableCell>
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
