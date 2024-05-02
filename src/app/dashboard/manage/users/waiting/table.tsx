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
import SwitchComponent from './switch_button';

function noop(): void {
  return alert('notings')
}
function onRowsPerPageChange():void{
  return alert('notings')
}
export interface UsersListInterface {
  site:string;
  id:string;
  nickname:string;
  phone_number:string;
  account_number:string;
  bank_name:string;
  account_holder:string;
  color_nickname:string;
  singup_path:string;
  singup_ip:string;
  join_domain:string;
  top_distributor:string;
  date_of_subcription:string;//chage to date 
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
  const noop = () => {}; // A function that does nothing

  const handleChangePage = () => {
     return alert('notting!')
  };

  // const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  // };

  return (
    <div>
      <TablePagination
        component="div"
        count={1212}
        onPageChange={handleChangePage}
        onRowsPerPageChange={onRowsPerPageChange}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 50, 100, 150, 200, 500, 1000, 10000]}
      />
      <Divider />
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
                {rows.map((row, index)=> {
                  return (
                    <TableRow key={index}>
                        <TableCell className='whitespace-nowrap'>
                          { index }
                        </TableCell>
                        <TableCell className='whitespace-nowrap'>
                          { row.site }
                        </TableCell>
                        <TableCell className='whitespace-nowrap'>
                          { row.top_distributor }
                        </TableCell>
                        <TableCell className='whitespace-nowrap'>
                          { row.id }
                        </TableCell>
                        <TableCell className='whitespace-nowrap'>
                          { row.nickname }
                        </TableCell>
                        <TableCell className='whitespace-nowrap'>
                          { row.phone_number }
                        </TableCell>
                        <TableCell className='whitespace-nowrap'>
                          { row.bank_name }
                        </TableCell>
                        <TableCell className='whitespace-nowrap'>
                          { row.account_number }
                        </TableCell>
                        <TableCell className='whitespace-nowrap'>
                          { row.account_holder }
                        </TableCell>
                        <TableCell className='whitespace-nowrap'>
                          <StatusComponent bgColorName={row.color_nickname} tailwind_class_desing={['px-5 mx-2 rounded-md']}/>
                        </TableCell>
                        <TableCell className='whitespace-nowrap'>
                          {row.singup_path}
                        </TableCell>
                        <TableCell className='whitespace-nowrap'>
                          {row.singup_ip}
                        </TableCell>
                        <TableCell className='whitespace-nowrap'>
                          {row.join_domain}
                        </TableCell>
                        <TableCell className='whitespace-nowrap'>
                          {row.date_of_subcription}
                        </TableCell>
                    </TableRow>
                  )
                })

                }
          </TableBody>
        </Table>
      </Box>

    </div>
  );
}

//render rolling in this formate 0/0/0/0/0
const renderRollingRate = (rollingRates:number[]) => {
  const rollingRate = rollingRates.map((rolling) => {
    return `${rolling}`
  })
  return rollingRate.join('/')
}

//render site on summery row if there many site 
const  renderSiteNumber = (rows:any) => {
  const uniqueSites = new Set(rows.map((site: any) => site.site));
  const uniqueSiteArray = Array.from(uniqueSites);
  return uniqueSiteArray.join(',');
}
// sum rolling gold 
const sumRollingGold = (rows:any[]) => {
  const totalGold = rows.reduce((prev, current)=>{return prev.roolling_gold + + current.roolling_gold});
  return totalGold;
}