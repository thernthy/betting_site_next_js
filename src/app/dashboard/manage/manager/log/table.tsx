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
import '@/styles/theme/scroll_bar_style/scroll_bar.css';
import dayjs from 'dayjs';
import BlockIcon from '@mui/icons-material/Block';

function noop(): void {
  return alert('notings')
}
function onRowsPerPageChange():void{
  return alert('notings')
}


export interface MannagerInterface {
  index:number;
  id:string;
  connection_ip:string;
  login_time:Date;
}

export interface SetTableHeader{
    id:Number;
    headerTitle:String;
}

interface CashPartnerList {
  count?: number;
  page?: number;
  rows?: MannagerInterface[];
  rowsPerPage?: number;
  handleBlock: (user_id:string) => void;
}
export function UserList({
  count = 0,
  rows = [],
  page = 0,
  rowsPerPage = 0,
  handleBlock
}: CashPartnerList): React.JSX.Element {

  const noop = () => {}; // A function that does nothing

  const handleChangePage = () => {
     return alert('notting!')
  };

  interface SwitchStates {
    [key: string]: boolean;
  }
  const [switchState, setSwitchState] = React.useState<SwitchStates>({});
  const handleClick = (index: number, status_requt: string, type_request: string) => {
    // Define an object to map type_request to switch state
    const switchStateByType: Record<string, boolean> = {
        'member_affairs': true,
        'deposit_withdrawal_service': true,
        'q&a_work': true,
        'settlement_work': true,
        'distributor_work': true,
        'distributor_excel_download': true,
        'ip_management': true,
        'delete_deposit_withdrawal': true,
        'enable_disable': true
        // Add more mappings as needed
    };

    if (switchStateByType[type_request] !== undefined) {
        setSwitchState(prevState => ({
          ...prevState,
          [`${index}_${type_request}`] : !prevState[`${index}_${type_request}`]
      }));

        const requ_type = switchStateByType[type_request] ? 'set_' : 'unset_'; // Determine request type based on type_request
        alert(requ_type + ' ' + status_requt + ' ' + type_request);
    }
};



  return (
    <div>
      <TablePagination
        component="div"
        count={count}
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
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center'}}>
                번호
              </TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center'}}>
                관리자ID
              </TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center'}}>
                타입
              </TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center'}}>
                결과
              </TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center'}}>
                내용
              </TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center'}}>
                접속URL
              </TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center'}}>
                접속IP
              </TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center'}}>
                등록시간
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
                {rows.map((row, index)=> {
                  return (
                    <TableRow key={index} hover>
                       <TableCell className='whitespace-nowrap' sx={{textAlign:'center'}}>
                         { row.index }
                       </TableCell>
                       <TableCell className='whitespace-nowrap' sx={{textAlign:'center'}}>
                         { row.id }
                         <button className='text-red-400' onClick={()=>handleBlock(row.id)}>
                           <BlockIcon />
                         </button>
                       </TableCell>
                       <TableCell className='whitespace-nowrap' sx={{textAlign:'center'}}>
                         { row.connection_ip }
                       </TableCell>
                       <TableCell className='whitespace-nowrap' sx={{textAlign:'center'}}>
                         { dayjs(row.login_time).format('MMM DD, YYYY') }
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

