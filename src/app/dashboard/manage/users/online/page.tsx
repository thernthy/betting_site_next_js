
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
    <Grid container spacing={3} lg={12}>
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
                  {id:2, headerTitle:'사이트'},
                  {id:3, headerTitle:'루트총판'},
                  {id:4, headerTitle:'상위총판'},
                  {id:5, headerTitle:'아이디'},
                  {id:6, headerTitle:'닉네임'},
                  {id:7, headerTitle:'예금주'},
                  {id:8, headerTitle:'별칭'},
                  {id:9, headerTitle:'별칭'},
                  {id:10, headerTitle:'보유금액'},
                  {id:11, headerTitle:'포인트'},
                  {id:12, headerTitle:'롤링금'},
                  {id:13, headerTitle:'루징금'},
                  {id:14, headerTitle:'입금'},
                  {id:15, headerTitle:'출금'},
                  {id:16, headerTitle:'입-출'},
                  {id:17, headerTitle:'입-베팅'},
                  {id:18, headerTitle:'당첨'},
                  {id:20, headerTitle:'베-당'},
                  {id:21, headerTitle:'접속기기'},
                  {id:22, headerTitle:'접속도메인'},
                  {id:23, headerTitle:'접속 IP'},
                  {id:24, headerTitle:'접속일자'},
                  {id:25, headerTitle:'가입일자'},
                  {id:26, headerTitle:'-'},
            ]}
        />
      </Card>
    </Grid>
  );
}

function applyPagination(rows: UsersListInterface[], page: number, rowsPerPage: number): UsersListInterface[] {
  return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}




