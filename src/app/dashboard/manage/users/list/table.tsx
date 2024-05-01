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
              <TableCell className='whitespace-nowrap'>
                  Sum
              </TableCell>
              <TableCell className='whitespace-nowrap'>
                  Sum
              </TableCell>
              <TableCell className='whitespace-nowrap'>
                 {sumRollingGold(rows)}
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
                          'px-2 py-1.5 rounded-full text-white'
                          
                          ]}/>
                  </TableCell>
                  <TableCell className='whitespace-nowrap'>
                    <DynamicSelection seleted_data={`${row.level[0]}`} slectionData={[{selection_id:1, selection_title:'level_1'}, {selection_id:2, selection_title:'level_2'}]} />
                  </TableCell>
                  <TableCell className='whitespace-nowrap'>
                    {row.account_holder}
                  </TableCell>
                  <TableCell className='whitespace-nowrap'>
                    <DynamicSelection 
                      seleted_data={`${row.membership_type}`}
                      slectionData={[
                          {selection_id:1, selection_title:'common'}, 
                          {selection_id:2, selection_title:'test'},
                          {selection_id:3, selection_title:'interest'},
                          {selection_id:4, selection_title:'work'},
                        ]} />
                  </TableCell>
                  <TableCell className='whitespace-nowrap'>
                    <StatusComponent 
                      Status_text={row.situtuation} 
                      tailwind_class_desing={[
                        'px-3 py-1.5 text-white',
                        `${row.situtuation === 'nomal'?'bg-sky-400':'bg-sky-500'}`
                      ]} />
                  </TableCell>
                  <TableCell className='whitespace-nowrap'>
                    <StatusComponent 
                      Status_text={row.entry_exit}
                      tailwind_class_desing={[
                        'px-3 py-1.5 text-white', 
                        'bg-blue-600',

                        ]} />
                  </TableCell>
                  <TableCell className='whitespace-nowrap'>
                    {row.amount_held.toLocaleString('en-Us')}
                  </TableCell>
                  <TableCell className='whitespace-nowrap'>
                    {row.point.toLocaleString('en-Us')}
                  </TableCell>
                  <TableCell className='whitespace-nowrap'>
                    {renderRollingRate(row.rolling_rate)}
                  </TableCell>
                  <TableCell className='whitespace-nowrap'>
                    {row.roolling_gold}
                  </TableCell>
                  <TableCell className='whitespace-nowrap'>
                    {row.fine}
                  </TableCell>
                  <TableCell className='whitespace-nowrap'>
                    {row.deposit.toLocaleString('en-Us')}
                  </TableCell>
                  <TableCell className='whitespace-nowrap'>
                    {row.withdraw.toLocaleString('en-Us')}
                  </TableCell>
                  <TableCell className='whitespace-nowrap'>
                    {row.entry_Exit.toLocaleString('en-Us')}
                  </TableCell>
                  <TableCell className='whitespace-nowrap'>
                    {row.bet.toLocaleString('en-Us')}
                  </TableCell>
                  <TableCell className='whitespace-nowrap'>
                    {row.winning.toLocaleString('en-Us')}
                  </TableCell>
                  <TableCell className='whitespace-nowrap'>
                    {row.be_dang.toLocaleString('en-Us')}
                  </TableCell>
                  <TableCell className='whitespace-nowrap'>
                    {row.access_date}
                  </TableCell>
                  <TableCell className='whitespace-nowrap'>
                    {row.connection_ip}
                  </TableCell>
                  <TableCell className='whitespace-nowrap'>
                    {row.latest_deposit_date}
                  </TableCell>
                  <TableCell className='whitespace-nowrap'>
                    {row.date_of_subcription}
                  </TableCell>
                  <TableCell className='whitespace-nowrap'>
                    {row.withdrawl_date}
                  </TableCell>
                  <TableCell className='whitespace-nowrap'>
                    {row.function.map((element, index:number)=>{
                      return <StatusComponent key={index} Status_text={element} tailwind_class_desing={['px-2 py-1.5 text-white mx-1 rounded-md', 'bg-red-400']} />
                    })}
                  </TableCell>
                  <TableCell className='whitespace-nowrap'>
                    <SwitchComponent />
                  </TableCell>
                  <TableCell className='whitespace-nowrap text-center'>
                     {row.Completely_delete? <StatusComponent Status_text={'complatedly deleted'} tailwind_class_desing={['text-red-400']} />:'-'}
                  </TableCell>
                </TableRow>
              );
            })}
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