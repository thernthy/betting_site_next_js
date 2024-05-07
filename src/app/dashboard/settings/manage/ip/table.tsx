import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import dayjs from 'dayjs';

interface  Data{
    id: string,
    ip: string,
    memo: string,
    type: number,
    created_at: Date,
}

function createData(
    id: string,
    ip: string,
    memo: string,
    type: number,
    created_at: Date
  ): Data {
    return { id, ip, memo, type, created_at };
  }
const rows: Data[] = [
    createData('1', '192.168.1.1', 'Sample memo 1', 1, new Date()),
    createData('2', '10.0.0.1', 'Sample memo 2', 2, new Date()),
    createData('3', '172.16.0.1', 'Sample memo 3', 3, new Date()),
];

export default function AccessibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell align="right">IP</TableCell>
            <TableCell align="right">메모</TableCell>
            <TableCell align="right">종류</TableCell>
            <TableCell align="right">등록시간</TableCell>
            <TableCell align="right">삭제</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.ip}</TableCell>
              <TableCell align="right">{row.memo}</TableCell>
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right">{ dayjs(row.created_at).format('MMM DD,YYYY')}</TableCell>
              <TableCell align='right'>
                <button className='py-2 rounded-md px-2 text-white bg-red-800'>Deleted</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
