
'use client';
import * as React from 'react';
import { usePathname } from 'next/navigation';
import { Button, Card, CardContent, CardHeader } from '@mui/material';
import { filterPathName } from '@/app/meta/metadata';
import { UserList } from './table';
import type { MannagerInterface } from './table';
import { UsersListData } from './users_data';
import { ArrowClockwise as ArrowClockwiseIcon } from '@phosphor-icons/react/dist/ssr/ArrowClockwise';
export default function Page(): React.JSX.Element {
    const page = 0;
    const rowsPerPage = 5;
    const currentPaht = usePathname()
    const [siteTarget, setSiteTartget] = React.useState<Number>(1)
    const [selected_categories, setSelected_categories] = React.useState<{ category_id: Number, category_title: String }[]>([]);
    const [categoryfilter, setCategoryfilter] = React.useState<string>('전체')

    const handleSiteChage = (sit_id:number) => {
        setSiteTartget(sit_id)
    }
  const pagtTitle = filterPathName(currentPaht)
  React.useEffect(() => {
    document.title = `${pagtTitle}`;
  }, [pagtTitle]); 

  const paginatedCustomers = applyPagination(UsersListData, page, rowsPerPage);
  const handleBlock = (user_id:string) => {
    alert(user_id)
  }
  const handleCategoryFilter = (id:number, name:string) => {
     setCategoryfilter(name)
     alert('set_Api: ' + id + '_'+name)
  }

  return (
      <Card className='h-full'>
        <div className='border border-1 border-t-0 border-x-0 border-sky-400'>
          <CardHeader
            action={
              <Button color="inherit" size="small" 
               startIcon={<ArrowClockwiseIcon fontSize="var(--icon-fontSize-md)" />}>
                Sync
              </Button>
            }
            title={pagtTitle}
          />
        </div> 
        <CardContent>
          <ul className='flex flex-row items-center justify-start px-3 gap-2'>
            <li className={`px-1.5 py-0.5 border rounded-md border-1 border-sky-400 cursor-pointer ${categoryfilter && categoryfilter === '전체'? '' : 'bg-sky-500'}`} onClick={()=> handleCategoryFilter(3, '전체')}>전체</li>
            <li className={`px-1.5 py-0.5 border rounded-md border-1 border-sky-400 cursor-pointer ${categoryfilter && categoryfilter === '로그인'? '' : 'bg-sky-500'}`} onClick={()=> handleCategoryFilter(4, '로그인')}>로그인</li>
            <li className={`px-1.5 py-0.5 border rounded-md border-1 border-sky-400 cursor-pointer ${categoryfilter && categoryfilter === '금액'? '' : 'bg-sky-500'}`} onClick={()=> handleCategoryFilter(6, '금액')}>금액</li>
            <li className={`px-1.5 py-0.5 border rounded-md border-1 border-sky-400 cursor-pointer ${categoryfilter && categoryfilter === '정산'? '' : 'bg-sky-500'}`} onClick={()=> handleCategoryFilter(7, '정산')}>정산</li>
            <li className={`px-1.5 py-0.5 border rounded-md border-1 border-sky-400 cursor-pointer ${categoryfilter && categoryfilter === '쪽지'? '' : 'bg-sky-500'}`} onClick={()=> handleCategoryFilter(9, '쪽지')}>쪽지</li>
            <li className={`px-1.5 py-0.5 border rounded-md border-1 border-sky-400 cursor-pointer ${categoryfilter && categoryfilter === '공지'? '' : 'bg-sky-500'}`} onClick={()=> handleCategoryFilter(10, '공지')}>공지</li>
            <li className={`px-1.5 py-0.5 border rounded-md border-1 border-sky-400 cursor-pointer ${categoryfilter && categoryfilter === '이벤트'? '' : 'bg-sky-500'}`} onClick={()=> handleCategoryFilter(11, '이벤트')}>이벤트</li>
            <li className={`px-1.5 py-0.5 border rounded-md border-1 border-sky-400 cursor-pointer ${categoryfilter && categoryfilter === '문의'? '' : 'bg-sky-500'}`} onClick={()=> handleCategoryFilter(12, '문의')}>문의</li>
            <li className={`px-1.5 py-0.5 border rounded-md border-1 border-sky-400 cursor-pointer ${categoryfilter && categoryfilter === '설정'? '' : 'bg-sky-500'}`} onClick={()=> handleCategoryFilter(16, '설정')}>설정</li>
            <li className={`px-1.5 py-0.5 border rounded-md border-1 border-sky-400 cursor-pointer ${categoryfilter && categoryfilter === '회원관리'? '' : 'bg-sky-500'}`} onClick={()=> handleCategoryFilter(8, '회원관리')}>회원관리</li>
            <li className={`px-1.5 py-0.5 border rounded-md border-1 border-sky-400 cursor-pointer ${categoryfilter && categoryfilter === '회원계정정보'? '' : 'bg-sky-500'}`} onClick={()=> handleCategoryFilter(17, '회원계정정보')}>회원계정정보</li>
            <li className={`px-1.5 py-0.5 border rounded-md border-1 border-sky-400 cursor-pointer ${categoryfilter && categoryfilter === '총판관리'? '' : 'bg-sky-500'}`} onClick={()=> handleCategoryFilter(31, '총판관리')}>총판관리</li>
            <li className={`px-1.5 py-0.5 border rounded-md border-1 border-sky-400 cursor-pointer ${categoryfilter && categoryfilter === '관리자관리'? '' : 'bg-sky-500'}`} onClick={()=> handleCategoryFilter(30, '관리자관리')}>관리자관리</li>
          </ul>
          <UserList          
              count={paginatedCustomers.length}
              page={page}
              rows={UsersListData}
              handleBlock={handleBlock}
              rowsPerPage={rowsPerPage}
          />
        </CardContent>
      </Card>
  );
}

function applyPagination(rows: MannagerInterface[], page: number, rowsPerPage: number): MannagerInterface[] {
  return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}




