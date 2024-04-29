'use client';

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
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
import { ArrowElbowDownRight } from '@phosphor-icons/react/dist/ssr/ArrowElbowDownRight';
import '@/styles/theme/scroll_bar_style/scroll_bar.css';
import { useSelection } from '@/hooks/use-selection';
import { StatusComponent } from '@/components/materinals_components/status_components/status_component';
import { Plus } from '@phosphor-icons/react/dist/ssr';

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
  chirldUser:any;
}


interface CustomersTableProps {
  count?: number;
  page?: number;
  rows?: Customer[];
  rowsPerPage?: number;
}

export function PartnerDetailTable({
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
  const renderNestedTable = (users:any, parentRowId: string) => {
    if (!visibleRows[parentRowId]) {
        return null; // If nested table is not visible, return null to hide it
    }
    return (
          users.map((user:any, index:number) => (
            <React.Fragment key={user.id}>
              <TableRow>
                <TableCell className={`whitespace-nowrap `} sx={{paddingLeft:`${index === 0? 25 : index * 28}px`}}>
                    <Stack sx={{ alignItems: 'center' }} direction="row" spacing={2} className=' flex flex-row items-center justify-start'>
                        {user.chirldUser && user.chirldUser.length > 0? 
                        <div className='px-2 py-2 rounded-full bg-green-500 text-white' onClick={()=>handleNestedTableToggle(user.id)}>
                            <Plus />
                        </div>:
                        <div className='px-2 py-2 rounded-full bg-green-500 text-white'>
                          <ArrowElbowDownRight />
                        </div>
                        }
                        <Avatar src={user.avatar} />
                        <Typography variant="subtitle2">{user.name}{index}<StatusComponent 
                            Status_text={'Success'}
                            tailwind_class_desing={['bg-green-400', 'text-white', 'rounded-full', 'px-2 py-1', 'ml-2']}
                            text_size={10}
                            /></Typography>
                    </Stack>
                </TableCell>
                <TableCell className='whitespace-nowrap'>
                        <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {user.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                </TableCell>
                <TableCell className='whitespace-nowrap'>
                        <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {user.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                </TableCell>
                <TableCell className='whitespace-nowrap'>
                        <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {user.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                </TableCell>
                <TableCell className='whitespace-nowrap'>
                        <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {user.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                </TableCell>
                <TableCell className='whitespace-nowrap'>
                        <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {user.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                </TableCell>
                <TableCell className='whitespace-nowrap'>
                        <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {user.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                </TableCell>
                <TableCell className='whitespace-nowrap'>
                        <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {user.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                </TableCell>
                <TableCell className='whitespace-nowrap'>
                        <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {user.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                </TableCell>
                <TableCell className='whitespace-nowrap'>
                        <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {user.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                </TableCell>
                <TableCell className='whitespace-nowrap'>
                        <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {user.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                </TableCell>
                <TableCell className='whitespace-nowrap'>
                        <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {user.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                </TableCell>
                <TableCell className='whitespace-nowrap'>
                        <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {user.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                </TableCell>
                <TableCell className='whitespace-nowrap'>
                        <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {user.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                </TableCell>
                <TableCell className='whitespace-nowrap'>
                        <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {user.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                </TableCell>
                <TableCell className='whitespace-nowrap'>
                        <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {user.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                </TableCell>
                <TableCell className='whitespace-nowrap'>
                        <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {user.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                </TableCell>
                <TableCell className='whitespace-nowrap'>
                        <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {user.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                </TableCell>
                <TableCell className='whitespace-nowrap'>
                        <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {user.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                </TableCell>
                <TableCell className='whitespace-nowrap'>
                        <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {user.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                </TableCell>
                <TableCell className='whitespace-nowrap'>
                        <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {user.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                </TableCell>
                <TableCell className='whitespace-nowrap'>
                        <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {user.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                </TableCell>
                <TableCell className='whitespace-nowrap'>
                        <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {user.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                </TableCell>
                <TableCell className='whitespace-nowrap'>
                        <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {user.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                </TableCell>
                <TableCell className='whitespace-nowrap'>
                        <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {user.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                </TableCell>
                <TableCell className='whitespace-nowrap'>
                        <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {user.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                </TableCell>
                <TableCell className='whitespace-nowrap'>
                        <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {user.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                </TableCell>
                <TableCell className='whitespace-nowrap'>
                        <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {user.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                </TableCell>
                <TableCell className='whitespace-nowrap'>
                        <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {user.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                </TableCell>
                <TableCell className='whitespace-nowrap'>
                        <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {user.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                </TableCell>
                <TableCell className='whitespace-nowrap'>
                        <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {user.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                </TableCell>
                <TableCell className='whitespace-nowrap'>
                        <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {user.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                </TableCell>
                <TableCell className='whitespace-nowrap'>
                        <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {user.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                </TableCell>
                <TableCell className='whitespace-nowrap'>
                        <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {user.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                </TableCell>
                <TableCell className='whitespace-nowrap'>
                        <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {user.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                </TableCell>
                <TableCell className='whitespace-nowrap'>
                        <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {user.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                </TableCell>
                <TableCell className='whitespace-nowrap'>
                        <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {user.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                </TableCell>
                <TableCell className='whitespace-nowrap'>
                        <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {user.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                </TableCell>
              </TableRow>
              {user.chirldUser && user.chirldUser.length > 0 && (
                    renderNestedTable(user.chirldUser, user.id)
              )}
            </React.Fragment>
          ))
    );
  };
  const [visibleRows, setVisibleRows] = React.useState<{ [key: string]: boolean }>({});

  const handleNestedTableToggle = (rowId: string) => {
      setVisibleRows(prevVisibleRows => ({
          ...prevVisibleRows,
          [rowId]: !prevVisibleRows[rowId]
      }));
  };

  return (
    <>
      <Box sx={{ overflowX: 'auto',height:'60vh' }}  className='overview_table scroll-smooth snap-x'>
        <Table sx={{ minWidth: '100%', maxHeight:'60vh'}}>
          <TableHead sx={{position:'sticky', top:'0', zIndex:'10'}}>
            <TableRow sx={{paddingBottom:'0'}}>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}} rowSpan={3}>총판</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}} colSpan={2}>입금/출금</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}} colSpan={8}>소속회원</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}} colSpan={11}>베팅/당첨</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}} colSpan={8}>롤링</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}} colSpan={7}>루징</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>파트너보유</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>회원입금</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>총판입금</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}} rowSpan={2}>회원수</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>보유머니</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>라이브롤링</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>미니단폴롤링</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>스포츠단폴롤링</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>스포츠3폴롤링</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>스포츠5폴롤링</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}} rowSpan={2}>가상게임롤링</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>라이브베팅</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>슬롯베팅</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>미니단폴베팅</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>미니조합베팅</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>스포츠단폴베팅</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>스포츠두폴베팅</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>스포츠3폴베팅</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>스포츠4폴베팅</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>스포츠5폴베팅</TableCell>     
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>스포츠다폴베팅</TableCell>     
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>가상게임베팅</TableCell>     
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>요율(%)</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>라이브</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>미니단폴</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>스포츠단폴</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>스포츠3폴</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>스포츠5폴</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}} rowSpan={2}>가상게임</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}} rowSpan={2}>사/타삭감</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>요율(%)</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>라이브	</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>미니단폴</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>스포츠단폴</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>스포츠3폴</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>스포츠5폴</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}} rowSpan={2}>가상게임</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>롤링</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>회원출금</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>총판출금</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>보유롤링</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>슬롯롤링</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>미니조합롤링</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>스포츠두폴롤링</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>스포츠4폴롤링</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>스포츠다폴롤링</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>라이브당첨</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>슬롯당첨</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>미니단폴당첨</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>미니단폴당첨</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>스포츠단폴당첨</TableCell>{/*31*/}
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>스포츠두폴당첨</TableCell>{/*31*/}
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>스포츠3폴당첨</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>스포츠4폴당첨</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>스포츠5폴당첨</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>스포츠다폴당첨</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>가상게임당첨</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>롤링전환</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>슬롯</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>미니조합</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>스포츠두폴</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>스포츠4폴</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>스포츠다폴</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>루징정산</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>슬롯</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>미니조합</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>스포츠두폴</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>스포츠4폴</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>스포츠다폴</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>보유머니</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}} rowSpan={2}>sum</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
            </TableRow>
            <TableRow>

              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
              <TableCell className='whitespace-nowrap' sx={{textAlign:'center', paddingBottom:'2px', paddingTop:'2px',}}>00</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              const isSelected = selected?.has(row.id);
              return (
                <>
                    <TableRow hover key={row.id} selected={isSelected} >
                    <TableCell className='whitespace-nowrap'>
                        <Stack sx={{ alignItems: 'center' }} direction="row" spacing={2}>
                            <div className={`px-2 py-2 rounded-full bg-gray-200`} onClick={() => handleNestedTableToggle(row.id)}>
                               <Plus />
                            </div>
                            <Avatar src={row.avatar} />
                            <Typography variant="subtitle2">{row.name}<StatusComponent 
                                Status_text={'Success'}
                                tailwind_class_desing={['bg-green-400', 'text-white', 'rounded-full', 'px-2 py-1', 'ml-2']}
                                text_size={10}
                            />
                            </Typography>
                        </Stack>
                    </TableCell>
                    <TableCell className='whitespace-nowrap' sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                        <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {row.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                    </TableCell>
                    <TableCell className='whitespace-nowrap'>
                        <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {row.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                    </TableCell>
                    <TableCell className='whitespace-nowrap'>
                      <div className='w-full text-center whitespace-nowrap'>{row.email}</div> 
                    </TableCell>
                    <TableCell className='whitespace-nowrap'>
                        <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {row.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                    </TableCell>
                    <TableCell className='whitespace-nowrap'>
                        <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {row.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                    </TableCell>
                    <TableCell className='whitespace-nowrap'>
                        <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {row.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                    </TableCell>
                    <TableCell className='whitespace-nowrap'>
                        <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {row.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                    </TableCell>
                    <TableCell className='whitespace-nowrap'>
                        <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {row.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                    </TableCell>
                    <TableCell className='whitespace-nowrap'>
                       <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {row.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                    </TableCell>
                    <TableCell className='whitespace-nowrap'>
                       <div className='w-full text-center whitespace-nowrap'>{row.email}</div> 
                    </TableCell>
                    <TableCell className='whitespace-nowrap'>
                       <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {row.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                    </TableCell>
                    <TableCell className='whitespace-nowrap'>
                       <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {row.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                    </TableCell>
                    <TableCell className='whitespace-nowrap'>
                       <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {row.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                    </TableCell>
                    <TableCell className='whitespace-nowrap'>
                       <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {row.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                    </TableCell>
                    <TableCell className='whitespace-nowrap'>
                       <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {row.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                    </TableCell>
                    <TableCell className='whitespace-nowrap'>
                       <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {row.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                    </TableCell>
                    <TableCell className='whitespace-nowrap'>
                       <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {row.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                    </TableCell>
                    <TableCell className='whitespace-nowrap'>
                       <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {row.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                    </TableCell>
                    <TableCell className='whitespace-nowrap'>
                       <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {row.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                    </TableCell>
                    <TableCell className='whitespace-nowrap'>
                       <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {row.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                    </TableCell>
                    <TableCell className='whitespace-nowrap'>
                       <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {row.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                    </TableCell>
                    <TableCell className='whitespace-nowrap'>
                       <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {row.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                    </TableCell>
                    <TableCell className='whitespace-nowrap'>
                       <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {row.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                    </TableCell>
                    <TableCell className='whitespace-nowrap'>
                       <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {row.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                    </TableCell>
                    <TableCell className='whitespace-nowrap'>
                       <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {row.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                    </TableCell>
                    <TableCell className='whitespace-nowrap'>
                       <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {row.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                    </TableCell>
                    <TableCell className='whitespace-nowrap'>
                       <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {row.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                    </TableCell>
                    <TableCell className='whitespace-nowrap'>
                      <div className='w-full text-center whitespace-nowrap'>{row.email}</div> 
                    </TableCell>
                    <TableCell className='whitespace-nowrap'>
                      <div className='w-full text-center whitespace-nowrap'>{row.email}</div> 
                    </TableCell>
                    <TableCell className='whitespace-nowrap'>
                       <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {row.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                    </TableCell>
                    <TableCell className='whitespace-nowrap'>
                       <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {row.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                    </TableCell>
                    <TableCell className='whitespace-nowrap'>
                       <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {row.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                    </TableCell>
                    <TableCell className='whitespace-nowrap'>
                       <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {row.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                    </TableCell>
                    <TableCell className='whitespace-nowrap'>
                       <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {row.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                    </TableCell>
                    <TableCell className='whitespace-nowrap'>
                       <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {row.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                    </TableCell>
                    <TableCell className='whitespace-nowrap'>
                    <div className='w-full text-center whitespace-nowrap'>{row.email}</div> 
                    </TableCell>
                    <TableCell className='whitespace-nowrap'>
                       <div className='border-2 border-sky-400 border-t-0 border-x-0 w-full text-center whitespace-nowrap'>
                          {row.email}
                        </div>
                        <div className='w-full text-center whitespace-nowrap'>                        
                          00
                        </div>
                    </TableCell>
                    </TableRow>
                    { renderNestedTable(row.chirldUser, row.id) }
                </>
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
    </>
  
  );
}
