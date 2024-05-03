import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box, TablePagination } from '@mui/material';
import { useSelection } from '@/hooks/use-selection';
import dayjs from 'dayjs';
import { StatusComponent } from '@/components/materinals_components/status_components/status_component';
import '@/styles/theme/scroll_bar_style/scroll_bar_sm.css'
import { DynamicSelection } from '@/components/materinals_components/selection/dynamic_selection';
export interface RowsUser {
  site:string;
  root_distributor:string;
  top_distributor:string;
  id: string;
  nickname:string;
  color_nickname:string;
  level:string;
  account_holder:string;
  amount_held:number;
  poin:number;
  start_date_and_time:Date;
  due_date:Date;
  payment_date_and_time:Date;
  payback_appied:string[];
  payment_formula:string;
  bet_amount:number;
  winnings:number;
  deposit:number;
  withdraw:number;
  point_conversion_fee:number;
  money_held:number;
  payback_person:number;
  payback_point:number;
  payment_method:string;
  sittuation:string;
  registation_itme:Date;
  processing_time:Date;

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
    { field:'index', headerName:'전체', },
    { field:'site', headerName:'사이트', },
    { field:'root_distributor', headerName:'루트총판', },
    { field:'top_distributor', headerName:'상위총판', },
    { field:'id', headerName:'아이디', },
    { field:'nickname', headerName:'닉네임', },
    { field:'color_nickname', headerName:'별칭', 
      renderCell:(prop) => {
        const nicName = prop.row.color_nickname;
        return (
          <div className='h-1.5 w-5 mt-5' style={{backgroundColor:nicName}}> 
          </div>
        )
      }
    },
    { field:'level', headerName:'레벨', },
    { field:'account_holder', headerName:'예금주', },
    { field:'amount_held', headerName:'보유금액', },
    { field:'poin', headerName:'포인트', },
    { field:'start_date_and_time', headerName:'시작일시', },
    { field:'due_date', headerName:'마감일시', },
    { field:'payment_date_and_time', headerName:'지급일시', },
    { field:'payback_appied', headerName:'페이백적용', 
      renderCell:(rowsProp)=>{
         const row = rowsProp.row
         return row.payback_appied.map((data:any, index:number)=>{
          return (<span key={index} className='px-1.5 py-1.5 bg-red-400 mx-0.5 rounded-md'>{data}</span>)
         })
      }
    },
    { field:'payment_formula', headerName:'지급공식', },
    { field:'bet_amount', headerName:'베팅금', },
    { field:'winnings', headerName:'베팅금', },
    { field:'deposit', headerName:'당첨금', },
    { field:'withdraw', headerName:'입금', },
    { field:'point_conversion_fee', headerName:'출금', },
    { field:'money_held', headerName:'(당시)보유머니', },
    { field:'payback_person', headerName:'페이백%', },
    { field:'payback_point', headerName:'페이백P', },
    { field:'payment_method', headerName:'지급방식', 
      renderCell:(rowsDataprop) => {
        const data = rowsDataprop.row
        return(
          <span className='px-2 py-1.5 rounded-md bg-yellow-300'>
            {data.payment_method}
          </span>
        )
      }
    },
    { 
      field:'sittuation', headerName:'상태', 
      renderCell:(rowDataProp) => {
        const data = rowDataProp.row.sittuation;
        return (
          <span className='px-2 py-1.5 rounded-full text-white' style={{
            backgroundColor:`
              ${data && data === 'Active'? 'rgb(132 204 22)' : 
                data === 'Inactive'? 'rgb(248 113 113)' : 
                data === 'watting'? 'rgb(250 204 21)' : 
                'rgb(56 189 248)'}`
              }}>

            {data && data === 'watting'? data + ' ...' : data}
          </span>
        )
      }
    },
    { field:'registation_itme', headerName:'등록시간', },
    { field:'processing_time', headerName:'처리시간', },
  ];
  
  const rowsData = rows.map((row, index) => ({
    index:index,
    site: row.site,
    root_distributor: row.root_distributor,
    top_distributor: row.top_distributor,
    id: row.id,
    nickname: row.nickname,
    color_nickname: row.color_nickname,
    level: (row.level && row.level === 'level_1'? 'one' : row.level),
    account_holder: row.account_holder,
    amount_held: row.amount_held.toLocaleString('en-Us'),
    poin: row.poin,
    start_date_and_time: dayjs(row.start_date_and_time).format('MMM DD, YYYY'),
    due_date: dayjs(row.due_date).format('MMM DD, YYYY'),
    payment_date_and_time: dayjs(row.payment_date_and_time).format('MMM DD, YYYY'),
    payback_appied: row.payback_appied,
    payment_formula: row.payment_formula,
    bet_amount: row.bet_amount.toLocaleString('en-Us'),
    winnings: row.winnings.toLocaleString('en-Us'),
    deposit: row.deposit.toLocaleString('en-Us'),
    withdraw: row.withdraw.toLocaleString('en-Us'),
    point_conversion_fee: row.point_conversion_fee,
    money_held: row.money_held,
    payback_person: row.payback_person,
    payback_point: row.payback_point.toLocaleString('en-Us'),
    payment_method: row.payment_method,
    sittuation: row.sittuation,
    registation_itme: dayjs(row.registation_itme).format('MMM DD, YYYY'),
    processing_time: dayjs(row.processing_time).format('MMM DD, YYYY'),
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
