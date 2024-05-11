'use client';

import * as React from 'react';
import type { Metadata } from 'next';
import Stack from '@mui/material/Stack';
import { Card, CardContent, CardHeader } from '@mui/material';
import { usePathname } from 'next/navigation';
import { filterPathName } from '@/app/meta/metadata';
import { Jodit } from 'jodit';
import Grid from '@mui/system/Unstable_Grid/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { BankList } from './bankList';
import { SwitchButton } from './switchButton';

export default function Page(): React.JSX.Element {
 const currentPaht = usePathname()
 const pagtTitle = filterPathName(currentPaht)
  React.useEffect(() => {
    document.title = `${pagtTitle}`;
  }, [pagtTitle]); 
  
// Define the SwitchStates interface
interface SwitchStates {
  [key: string]: boolean;
}

// Initialize switchState with initial values based on BankList
const initialSwitchState: SwitchStates = BankList.reduce((acc:any, row) => {
  acc[row.id.toString()] = row.status === 1;
  return acc;
}, {});

// Use React.useState to initialize the switchState state
const [switchState, setSwitchState] = React.useState<SwitchStates>(initialSwitchState);

// handleClick function remains the same
const handleClick = (index: string, status: number) => {
  setSwitchState(prevState => ({
    ...prevState,
    [index]: !prevState[index]
  }));
};

  return (
    <Stack spacing={3}>
      <Card>
        <CardHeader title={pagtTitle} sx={{borderBottom:'1px solid gray'}}>
        </CardHeader>
          <CardContent>
            <div className='flex flex-row justify-end items-center mb-3 border border-spacing-2 border-t-0 border-x-0 pb-3'>
              <button className='px-2 py-2 bg-sky-600 text-white rounded-md'>
                은행 추가
              </button>
            </div>
            <div>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>번호</TableCell>
                    <TableCell align="center">은행명</TableCell>
                    <TableCell align="center">사용여부</TableCell>
                    <TableCell align="right">&nbsp;(-)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {BankList.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="left">{ row.id === 1? 'one' : row.id }</TableCell>
                      <TableCell component="th" scope="row" align='center'>
                        <input type='text' 
                          className='
                              px-2 py-2 border border-spacing-2 border-gray-200 text-sm text-sky-400
                              rounded-md
                            ' 
                            value={row.bank_name} 
                        />
                        <button className='px-2 py-1 text-white rounded-sm bg-sky-600 mx-1'>변경</button>
                      </TableCell>
                      <TableCell align="right">
                        <SwitchButton onClick={() => handleClick(String(row.id), row.status)} switchState={switchState[row.id.toString()]} />
                      </TableCell>
                      <TableCell align="right">
                        <button className='px-2 py-1 bg-red-500 text-white rounded-md'>Delete</button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>         
            </div>
          </CardContent>
      </Card>
    </Stack>
  );
}
