
'use client';
import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { usePathname } from 'next/navigation';
import { Card } from '@mui/material';
import { filterPathName } from '@/app/meta/metadata';
import { PartnerRollingDatePicker } from '@/components/dashboard/manage_cp/rolling_partner_req/SelectDate';
import { SiteRender } from '@/components/materinals_components/site_render_gination';
import { siteData } from '../../../../../db/siteData'
import { SearchComponent } from '@/components/materinals_components/search';
import { UserList } from './table';
import type { UsersListInterface } from './table';
import { UsersListData } from './users_data';
import { MuiltipleUsersLayer } from '@/db/multiple_layer_users';
import SelectionLayer from '@/components/materinals_components/selection/muiltiple_selection_layer';

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

  return (
      <Card className='h-full'>
        <div className='p-2 py-3 border border-1 border-t-0 border-x-0 border-sky-400'>
            <h2>{pagtTitle}</h2>
        </div>
        <div className='mt-3'>
            <SiteRender siteDatas={siteData} shadow={false} acitve={siteTarget} handleSiteChange={handleSiteChage} />
        </div>
        <div className='p-2 flex flex-row items-center justify-center flex-wrap lg:flex-nowrap lg:justify-start gap-3 mt-2 lg:ml-2'>
            <SearchComponent />
        </div>
        <UserList          
            count={paginatedCustomers.length}
            page={page}
            rows={UsersListData}
            rowsPerPage={rowsPerPage}
      
            tableHeader={[
                  {id:1, headerTitle:'번호'}, 
                  {id:2, headerTitle:'지점'},
                  {id:3, headerTitle:'아이디'},
                  {id:4, headerTitle:'닉네임'},
                  {id:5, headerTitle:'종류'},
                  {id:6, headerTitle:'접속IP'},
                  {id:7, headerTitle:'접속URL'},
                  {id:8, headerTitle:'설명'},
                  {id:9, headerTitle:'등록시간'},
            ]}
        />
      </Card>
  );
}

function applyPagination(rows: UsersListInterface[], page: number, rowsPerPage: number): UsersListInterface[] {
  return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}




