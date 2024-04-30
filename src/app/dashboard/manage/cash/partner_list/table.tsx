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

export interface PartnerList {
  id:string;
  nickname:string;
  phone_number:string;
  bank_name:string;
  account_number:string;
  account_holder:string;
  Nickname:string;
  amount_before_application:number;
  processing_amount:number;
  amount_after_processing:number;
  points_before_deposit:number;
  points:number;
  points_after_deposit:number;
  number_of_applications_today:number;
  application_date:Date;
  processing_date:Date;
  explanation:String;
  shortcuts:any[];
  situation:string;
}

export interface SetTableHeader{
    id:Number;
    headerTitle:String;
}

interface CashPartnerList {
  count?: number;
  page?: number;
  rows?: PartnerList[];
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
              const formattedAmount = row.processing_amount.toLocaleString('en-US');
              return (
                <TableRow hover key={row.id}>
                  <TableCell className='whitespace-nowrap'>{index+1}</TableCell>
                  <TableCell className='whitespace-nowrap'>{''}</TableCell>
                  <TableCell className='whitespace-nowrap'>{''}</TableCell>
                  <TableCell className='whitespace-nowrap'>{row.id}</TableCell>
                  <TableCell className='whitespace-nowrap'>{row.nickname}</TableCell>
                  <TableCell className='whitespace-nowrap'>{row.phone_number}</TableCell>
                  <TableCell className='whitespace-nowrap'>{row.bank_name}</TableCell>
                  <TableCell className='whitespace-nowrap'>{row.account_number}</TableCell>
                  <TableCell className='whitespace-nowrap'>{row.account_holder}</TableCell>
                  <TableCell className='whitespace-nowrap'>{row.Nickname}</TableCell>
                  <TableCell className='whitespace-nowrap'>{row.amount_before_application}</TableCell>
                  <TableCell className='whitespace-nowrap'>
                    <StatusComponent 
                      Status_text={`${formattedAmount}`} 
                      tailwind_class_desing={['px-2', 'py-1', 'rounded-full text-white', `${row.processing_amount < 0? 'bg-red-400': 'bg-sky-500'}`]} />
                  </TableCell>
                  <TableCell className='whitespace-nowrap'>{row.amount_after_processing}</TableCell>
                  <TableCell className='whitespace-nowrap'>{row.points_before_deposit}</TableCell>
                  <TableCell className='whitespace-nowrap'>{row.points}</TableCell>
                  <TableCell className='whitespace-nowrap'>{row.points_after_deposit}</TableCell>
                  <TableCell className='whitespace-nowrap'>{row.number_of_applications_today}</TableCell>
                  <TableCell className='whitespace-nowrap'>{dayjs(row.application_date).format('MMM D, YYYY')}</TableCell>
                  <TableCell className='whitespace-nowrap'>{dayjs(row.processing_date).format('MMM D, YYYY')}</TableCell>
                  <TableCell className='whitespace-nowrap'>{row.explanation? row.explanation : '-'}</TableCell>
                  <TableCell className='whitespace-nowrap'>
                    {row.shortcuts.map((element, index)=> 
                        {return <StatusComponent key={index} 
                          Status_text={element} 
                          tailwind_class_desing={
                            [
                              'px-2',
                              'py-1',
                              'text_white',
                              'cursor-pointer',
                              'mx-1',
                              'rounded-full',
                              `${index > 0? 'bg-red-400':'bg-sky-500'}`,
                            ]
                          } />
                        })}
                  </TableCell>
                  <TableCell className='whitespace-nowrap'> 
                    <StatusComponent 
                      Status_text={row.situation} 
                      tailwind_class_desing={[
                          'px-2 py-1 text-white rounded-full', 
                          `${
                            (row.situation === 'Administrator payment')? 'bg-sky-500': 
                            (row.situation === 'Administrator recovery')? 'bg-red-400':
                            (row.situation === 'Withdrawal completed')? 'bg-green-400':
                            (row.situation === 'Deposit approved')? 'bg-green-500':'bg-red-500'
                          }`
                        ]}/>
                  </TableCell>
                  <TableCell className='whitespace-nowrap'> 
                  <StatusComponent Status_text={'delete'} tailwind_class_desing={['px-2 py-1 text-white', 'bg-red-500']}/>
                  </TableCell>
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
