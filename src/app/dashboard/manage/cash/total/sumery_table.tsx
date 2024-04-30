
import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import '@/styles/theme/scroll_bar_style/scroll_bar.css';
function noop(): void {
    // do nothing
}

export interface PartnerListSum {
    totole_deposit_aday:number;
    withdraw_today:number;
    perlod:string;
    deposit:number;
    withdraw:number;
    deposit_withdraw:number;
}

export function SummeryTable (
    {
        totole_deposit_aday = 0,
        withdraw_today = 0,
        perlod,
        deposit,
        withdraw,
        deposit_withdraw,
    }:PartnerListSum
) {
    return(
        <>
        <Box sx={{ overflowX: 'auto' }}  className='overview_table'>
            <Table sx={{ minWidth: '100%' }}>
                <TableHead>
                    <TableRow>
                        <TableCell className='whitespace-nowrap' sx={{textAlign:'center'}}>오늘입금</TableCell>
                        <TableCell className='whitespace-nowrap' sx={{textAlign:'center'}}>오늘출금</TableCell>
                        <TableCell className='whitespace-nowrap' sx={{textAlign:'center'}}>기간</TableCell>
                        <TableCell className='whitespace-nowrap' sx={{textAlign:'center'}}>입금</TableCell>
                        <TableCell className='whitespace-nowrap' sx={{textAlign:'center'}}>출금</TableCell>
                        <TableCell className='whitespace-nowrap' sx={{textAlign:'center'}}>입금-출금</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                   <TableRow>
                        <TableCell className='whitespace-nowrap' sx={{textAlign:'center'}}>{totole_deposit_aday}(0건)</TableCell>
                        <TableCell className='whitespace-nowrap' sx={{textAlign:'center'}}>{withdraw_today}(0건)</TableCell>
                        <TableCell className='whitespace-nowrap' sx={{textAlign:'center'}}>{perlod}</TableCell>
                        <TableCell className='whitespace-nowrap' sx={{textAlign:'center'}}>{deposit.toLocaleString('en-US')}(16건)</TableCell>
                        <TableCell className='whitespace-nowrap' sx={{textAlign:'center'}}>{withdraw.toLocaleString('en-US')}(5건)</TableCell>
                        <TableCell className='whitespace-nowrap' sx={{textAlign:'center'}}>{deposit_withdraw.toLocaleString('en-US')}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Box>
    </>
    )
}