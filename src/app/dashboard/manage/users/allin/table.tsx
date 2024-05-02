import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box, TablePagination } from '@mui/material';
import { useSelection } from '@/hooks/use-selection';
import dayjs from 'dayjs';
import Divider from '@mui/material/Divider';
import { StatusComponent } from '@/components/materinals_components/status_components/status_component';
import '@/styles/theme/scroll_bar_style/scroll_bar_sm.css'
import { FitScreen } from '@mui/icons-material';
import { DynamicSelection } from '@/components/materinals_components/selection/dynamic_selection';
export interface RowsUser {
  id: string;
  site:string;
  root_distributor:string;
  top_distributor:string;
  nickname:string;
  color_nickname:string;
  level:string;
  account_holder:string;
  situation:string;
  entry_exit:string;
  amount_held:number;
  poin:number;
  deposit:number;
  withdraw:number;
  entry_Exit:number;
  losing_coupon:number
  betting_status:string;
  latest_deposit_date:Date;
  date_of_subscription:Date;
  withdrawal_date:Date;
}

interface CustomersTableProps {
  count?: number;
  page?: number;
  rows?: RowsUser[];
  rowsPerPage?: number;
}

export function AllinTable({
  count = 0,
  rows = [],
  page = 0,
  rowsPerPage = 0,
}: CustomersTableProps): React.ReactElement {
  const rowIds = React.useMemo(() => {
    return rows.map((customer) => customer.id);
  }, [rows]);

  const { selected } = useSelection(rowIds);

  const columns: GridColDef[] = [
    {
      field: 'index',
      headerName: 'number',
      minWidth: 50,
      renderCell: (params) => {
        const rowData = params.row;
        return <span>{rowData.index}</span>; // Just rendering the index directly
      },
    },
    {
      field: 'site',
      headerName: 'site',
      renderCell: (params) => {
        const rowData = params.row;
        return (
          <StatusComponent tailwind_class_desing={['bg-red-400']}
          Status_text={rowData.site} // Assuming name represents the status text
          />
        );
      },
    },
    { field:'root_distributor', headerName:'루트총판', },
    { field:'top_distributor', headerName:'상위총판', },
    { field:'id', headerName:'아이디', },
    { field:'nickname', headerName:'닉네임', },
    { field:'color_nickname', headerName:'별칭', 
      renderCell: (params) => {
        const rowData = params.row;
        return (
          <div style={{backgroundColor:rowData.color_nickname, marginTop:'20px',  height:'10px', width:'30px'}}>
          </div>
        );
      },
    },
    { field:'level', headerName:'레벨', minWidth:150,
      renderCell:(rows) => {
        const row = rows.row
        return(
          <DynamicSelection slectionData={[
              {selection_id:1, selection_title:'level_1'},
              {selection_id:2, selection_title:'level_2'},
              {selection_id:3, selection_title:'level_3'},
              {selection_id:4, selection_title:'level_4'},
            ]} seleted_data={row.level} />
        )
      }
    },
    { field:'account_holder', headerName:'레벨', },
    { field:'situation', headerName:'레벨', },
    { field:'entry_exit', headerName:'레벨', },
    { field:'amount_held', headerName:'레벨', },
    { field:'poin', headerName:'레벨', },
    { field:'deposit', headerName:'레벨', },
    { field:'withdraw', headerName:'레벨', },
    { field:'entry_Exit', headerName:'레벨', },
    { field:'losing_coupon', headerName:'레벨', },
    { field:'betting_status', headerName:'레벨', },
    { field:'latest_deposit_date', headerName:'레벨', },
    { field:'date_of_subscription', headerName:'레벨', },
    { field:'withdrawal_date', headerName:'레벨', },
  ];
  
  const rowsData = rows.map((row, index) => ({
    index: index + 1,
    site: <StatusComponent Status_text={row.site} />,
    root_distributor:row.root_distributor,
    top_distributor:row.top_distributor,
    id: row.id,
    nickname:row.nickname,
    color_nickname: row.color_nickname,
    level:row.level,
    account_holder:row.account_holder,
    situation:row.situation,
    entry_exit:row.entry_exit,
    amount_held:row.amount_held.toLocaleString('en-Us'),
    poin:row.poin.toLocaleString('en-Us'),
    deposit:row.deposit.toLocaleString('en-Us'),
    withdraw:row.withdraw.toLocaleString('en-Us'),
    entry_Exit:row.entry_Exit.toLocaleString('en-Us'),
    losing_coupon:row.losing_coupon.toLocaleString('en-Us'),
    betting_status:row.betting_status,
    latest_deposit_date: dayjs(row.latest_deposit_date).format('MMM D, YYYY'),
    date_of_subscription: dayjs(row.date_of_subscription).format('MMM D, YYYY'),
    withdrawal_date: dayjs(row.withdrawal_date).format('MMM D, YYYY'),
  }));

  const handleChangePage = (event: unknown, newPage: number) => {
    // Handle page change
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Handle rows per page change
  };

  return (
    <div>
      <TablePagination
        component="div"
        count={count}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
      <Box sx={{ overflowX: 'auto' }} className='scrollBar_sm'>
        <DataGrid
          rows={rowsData}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 5, pageSize:8,},
            },
          }}
          pageSizeOptions={[5,25]}
          className="scrollBar_sm"
        />
      </Box>
    </div>
  );
}
