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
import { StatusComponent } from '@/components/materinals_components/status_components/status_component';
import { DeviceIcons } from '@/db/divice_icons';

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
  site:string;
  top_distributor:string;
  root_distributor:string;
  id:string;
  nickname:string;
  account_holder:string;
  color_nickname:string;
  account_held:number;
  point:number;
  rolling_gold:number;
  fine:number;
  deposit:number;
  winthdraw:number;
  entry_exit:number;
  bet:number;
  winning:number;
  beg_dang:number;
  conntion_game:ConntionGames[];
  connection_device:string;
  access_domain:string;
  connection_ip:string;
  access_date:string;
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
                         { row.root_distributor }
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
                         { row.account_holder }
                       </TableCell>
                       <TableCell className='whitespace-nowrap'>
                         <StatusComponent bgColorName={row.color_nickname} tailwind_class_desing={['px-5 mx-2 rounded-md']}/>
                       </TableCell>
                       <TableCell className='whitespace-nowrap'>
                         { row.account_held.toLocaleString('en-Us') }
                       </TableCell>
                       <TableCell className='whitespace-nowrap'>
                         { row.point.toLocaleString('en-Us') }
                       </TableCell>
                       <TableCell className='whitespace-nowrap'>
                         { row.rolling_gold.toLocaleString('en-Us') }
                       </TableCell>
                       <TableCell className='whitespace-nowrap'>
                         { row.fine.toLocaleString('en-Us') }
                       </TableCell>
                       <TableCell className='whitespace-nowrap'>
                         { row.deposit.toLocaleString('en-Us') }
                       </TableCell>
                       <TableCell className='whitespace-nowrap'>
                         { row.winthdraw.toLocaleString('en-Us') }
                       </TableCell>
                       <TableCell className='whitespace-nowrap'>
                         { row.entry_exit.toLocaleString('en-Us') }
                       </TableCell>
                       <TableCell className='whitespace-nowrap'>
                         { row.bet.toLocaleString('en-Us') }
                       </TableCell>
                       <TableCell className='whitespace-nowrap'>
                         { row.winning.toLocaleString('en-Us') }
                       </TableCell>
                       <TableCell className='whitespace-nowrap'>
                         { row.beg_dang.toLocaleString('en-Us') }
                       </TableCell>
                       <TableCell className='whitespace-nowrap'>
                         { renderGame(row.conntion_game) }
                       </TableCell>
                       <TableCell className='whitespace-nowrap'>
                         {
                          row.connection_device === 'window'? 
                          DeviceIcons.dest : row.connection_device === 'moble'? 
                          DeviceIcons.phone : row.connection_device === 'tablet'?
                          DeviceIcons.tablet : DeviceIcons.nodevice
                          }
                         {row.connection_device}
                       </TableCell>
                       <TableCell className='whitespace-nowrap'>
                         {row.access_domain}
                       </TableCell>
                       <TableCell className='whitespace-nowrap'>
                         {row.connection_ip}
                       </TableCell>
                       <TableCell className='whitespace-nowrap'>
                         {row.access_date}
                       </TableCell>
                       <TableCell className='whitespace-nowrap'>
                         {row.date_of_subcription}
                       </TableCell>
                       <TableCell className='whitespace-nowrap'>
                        
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
