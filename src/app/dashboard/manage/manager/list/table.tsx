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
import { SwitchButton } from './switchButton';

function noop(): void {
  return alert('notings')
}
function onRowsPerPageChange():void{
  return alert('notings')
}


export interface MannagerInterface {
  index:number;
  id:string;
  level:string;
  modification_time:Date;
  creation_time:Date;
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
}
export function UserList({
  count = 0,
  rows = [],
  page = 0,
  rowsPerPage = 0,
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
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center'}} rowSpan={2}>
                아이디
              </TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center'}} rowSpan={2}>
                레벨
              </TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center'}} colSpan={10}>
               설정/업무구분
              </TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center'}} rowSpan={2}>
                수정시간
              </TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center'}} rowSpan={2}>
                생성시간
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center'}}>
                회원업무
              </TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center'}}>
                입출금업무
              </TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center'}}>
                Q&A업무
              </TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center'}}>
               게임업무
              </TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center'}}>
               정산업무
              </TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center'}}>
               총판업무
              </TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center'}}>
               총판Excel다운로드
              </TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center'}}>
               IP관리
              </TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center'}}>
               입출금삭제	
              </TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center'}}>
               사용/정지
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
                {rows.map((row, index)=> {
                  return (
                    <TableRow key={index} hover>
                       <TableCell className='whitespace-nowrap'>
                         { row.index }
                       </TableCell>
                       <TableCell className='whitespace-nowrap'>
                         { row.level }
                       </TableCell>
                       <TableCell className='whitespace-nowrap'>
                        <SwitchButton onClick={()=>handleClick(row.index, `${row.id}`, 'member_affairs')} switchState={switchState[`${row.index}_member_affairs`]} />
                       </TableCell>
                       <TableCell className='whitespace-nowrap'>
                        <SwitchButton onClick={()=>handleClick(row.index, `${row.id}`, 'deposit_withdrawal_service')} switchState={switchState[`${row.index}_deposit_withdrawal_service`]} />
                       </TableCell>
                       <TableCell className='whitespace-nowrap'>
                        <SwitchButton onClick={()=>handleClick(row.index, `${row.id}`, 'q&a_work')} switchState={switchState[`${row.index}_q&a_work`]} />
                       </TableCell>
                       <TableCell className='whitespace-nowrap'>
                        <SwitchButton onClick={()=>handleClick(row.index, `${row.id}`, 'game_work')} switchState={switchState[`${row.index}_game_work`]} />
                       </TableCell>
                       <TableCell className='whitespace-nowrap'>
                        <SwitchButton onClick={()=>handleClick(row.index, `${row.id}`, 'settlement_work')} switchState={switchState[`${row.index}_settlement_work`]} />
                       </TableCell>
                       <TableCell className='whitespace-nowrap'>
                        <SwitchButton onClick={()=>handleClick(row.index, `${row.id}`, 'distributor_work')} switchState={switchState[`${row.index}_distributor_work`]} />
                       </TableCell>
                       <TableCell className='whitespace-nowrap'>
                        <SwitchButton onClick={()=>handleClick(row.index, `${row.id}`, 'distributor_excel_download')} switchState={switchState[`${row.index}_distributor_excel_download`]} />
                       </TableCell>
                       <TableCell className='whitespace-nowrap'>
                        <SwitchButton onClick={()=>handleClick(row.index, `${row.id}`, 'ip_management')} switchState={switchState[`${row.index}_ip_management`]} />
                       </TableCell>
                       <TableCell className='whitespace-nowrap'>
                        <SwitchButton onClick={()=>handleClick(row.index, `${row.id}`, 'delete_deposit_withdrawal')} switchState={switchState[`${row.index}_delete_deposit_withdrawal`]} />
                       </TableCell>
                       <TableCell className='whitespace-nowrap'>
                        <SwitchButton onClick={()=>handleClick(row.index, `${row.id}`, 'enable_disable')} switchState={switchState[`${row.index}_enable_disable`]} />
                       </TableCell>
                       <TableCell className='whitespace-nowrap'>
                         { dayjs(row.modification_time).format('MMM DD, YYYY') }
                       </TableCell>
                       <TableCell className='whitespace-nowrap'>
                         { dayjs(row.creation_time).format('MMM DD, YYYY') }
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

