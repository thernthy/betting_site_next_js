
'use client';
import * as React from 'react';
import { usePathname } from 'next/navigation';
import { Button, Card, CardHeader } from '@mui/material';
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
    const [wattingFilterBy, setWatttingFilterBy] = React.useState<string>('')

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
        <UserList          
            count={paginatedCustomers.length}
            page={page}
            rows={UsersListData}
            handleBlock={handleBlock}
            rowsPerPage={rowsPerPage}
        />
      </Card>
  );
}

function applyPagination(rows: MannagerInterface[], page: number, rowsPerPage: number): MannagerInterface[] {
  return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}




