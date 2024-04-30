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
import { DynamicSelection } from '@/components/materinals_components/selection/dynamic_selection';

function noop(): void {
  // do nothing
}

export interface UsersListInterface {
  site:string;
  root_distributor:string;
  top_distributor:string;
  id:number;
  nickname:string;
  NinameColor:string;
  level:string[];
  account_holder:string;
  membership_type:string;
  situtuation:string;
  entry_exit:string;
  amount_held:number;
  point:number;
  rolling_rate:number[];
  roolling_gold:number;
  fine:number;
  deposit:number;
  withdraw:number;
  entry_Exit:number;
  bet:number;
  winning:number;
  be_dang:number;
  access_date:string;//chage to date 
  connection_ip:string;
  latest_deposit_date:string;//chage to date; 
  date_of_subcription:string;//chage to date;
  withdrawl_date:string;//chage to date;
  function:string[];
  use_gold:boolean;
  Completely_delete:boolean;
}

export interface SetTableHeader{
    id:Number;
    headerTitle:String;
}

interface CashPartnerList {
  count?: number;
  page?: number;
  rows?: UsersListInterface[];
  rowsPerPage?: number;
  tableHeader?: SetTableHeader[];
}
export function UserList({
  count = 0,
  rows = [],
  page = 0,
  rowsPerPage = 0,
  tableHeader = []
}: CashPartnerList): React.JSX.Element {
  
  const  renderSiteNumber = (rows:any) => {
      return rows.map((site:any, index:number) => {
       return `${site.site}/`
      })
  }
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
            <TableRow hover>
              <TableCell className='whitespace-nowrap'>
                  Sum
              </TableCell>
              <TableCell className='whitespace-nowrap'>
                  { renderSiteNumber(rows) }
              </TableCell>
              <TableCell className='whitespace-nowrap'>
                  Sum
              </TableCell>
              <TableCell className='whitespace-nowrap'>
                  Sum
              </TableCell>
              <TableCell className='whitespace-nowrap'>
                  Sum
              </TableCell>
              <TableCell className='whitespace-nowrap'>
                  Sum
              </TableCell>
            </TableRow>
            {rows.map((row, index) => {
              return (
                <TableRow hover key={row.id}>
                  <TableCell>{''}</TableCell>
                  <TableCell className='whitespace-nowrap'>{index+1}</TableCell>
                  <TableCell className='whitespace-nowrap'>{row.site}</TableCell>
                  <TableCell className='whitespace-nowrap'>{row.root_distributor}</TableCell>
                  <TableCell className='whitespace-nowrap'>{row.top_distributor}</TableCell>
                  <TableCell className='whitespace-nowrap'>{row.id}</TableCell>
                  <TableCell className='whitespace-nowrap'>{row.nickname}</TableCell>
                  <TableCell className='whitespace-nowrap'>
                      <StatusComponent Status_text={row.NinameColor} 
                        bgColorName={`${row.NinameColor}`}
                        tailwind_class_desing={[
                          'px-2 py-1 rounded-full text-white'
                          
                          ]}/>
                  </TableCell>
                  <TableCell className='whitespace-nowrap'>
                    <DynamicSelection seleted_data={`${row.level[0]}`} slectionData={[{selection_id:1, selection_title:'level_1'}, {selection_id:2, selection_title:'level_2'}]} />
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
