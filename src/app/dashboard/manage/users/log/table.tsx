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

function noop(): void {
  return alert('notings')
}
function onRowsPerPageChange():void{
  return alert('notings')
}

interface ConntionGames {
    g_category_id:number;
    g_category_title:string;
    game_name:string; 
    game_id:number;
}

export interface UsersListInterface {
  index:number;
  site:string;
  id:string;
  nickname:string;
  type:string;
  connection_ip:string;
  access_url:string;
  explanation:string
  registaion_date:Date;
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
                    <TableRow key={index} hover>
                       <TableCell className='whitespace-nowrap'>
                         { row.index }
                       </TableCell>
                       <TableCell className='whitespace-nowrap'>
                         { row.site }
                       </TableCell>
                       <TableCell className='whitespace-nowrap'>
                         { row.id }
                       </TableCell>
                       <TableCell className='whitespace-nowrap'>
                         { row.nickname }
                       </TableCell>
                       <TableCell className='whitespace-nowrap'>
                         { row.type }
                       </TableCell>
                       <TableCell className='whitespace-nowrap'>
                         { row.connection_ip }
                       </TableCell>
                       <TableCell className='whitespace-nowrap'>
                         { row.access_url }
                       </TableCell>
                       <TableCell className='whitespace-nowrap'>
                         { row.explanation }
                       </TableCell>
                       <TableCell className='whitespace-nowrap'>
                         { dayjs(row.registaion_date).format('MMM DD, YYYY') }
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


const renderGame = (gameData:ConntionGames[]) => {
    // Group games by category
    const groupedGames: { [key: string]: ConntionGames[] } = {};
    gameData.forEach(game => {
        const categoryName = `${game.g_category_title} > ${game.game_name}`;
        if (!groupedGames[categoryName]) {
            groupedGames[categoryName] = [];
        }
        groupedGames[categoryName].push(game);
    });
    // Render grouped games
    return (
        <div>
            {Object.entries(groupedGames).map(([categoryName, games], index) => (
                <div key={index} className='flex flex-row items-center justify-start gap-1'>
                    <h3>{categoryName}</h3>
                    <ul className='flex flex-row items-center justify-start flex-nowrap'>
                        {games.map((game, i) => (
                            <li key={i}>,{game.game_name}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
