
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

  const onSelectUser = (id:string) => {
    
  }
  const paginatedCustomers = applyPagination(UsersListData, page, rowsPerPage);

  const handleWattingFilterby = (filterName:string) => {
    setWatttingFilterBy(filterName)
    alert(filterName)
  }

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
           <SelectionLayer data={MuiltipleUsersLayer} onSelect={onSelectUser} />
            <div className='flex flex-row items-center justify-around gap-2'>
                <div >
                 <PartnerRollingDatePicker />
                </div>
                ~
                <div>
                 <PartnerRollingDatePicker />
                </div>
            </div>
            <SearchComponent />
            <div>
              <button className={`px-1.5 py-1.5 border-1 border mx-0.5 rounded-full border-sky-400 whitespace-nowrap 
                ${wattingFilterBy && wattingFilterBy === 'watting_aproval'? ' bg-sky-500 text-white' : ''}`}
                onClick={() => handleWattingFilterby('watting_aproval') }
                >
                가입승인대기
              </button >
              <button className={`px-1.5 py-1.5 border-1 border mx-0.5 rounded-full border-sky-400 whitespace-nowrap 
                ${wattingFilterBy && wattingFilterBy === 'registered_today'? ' bg-sky-500 text-white' : ''}`}
                onClick={() => handleWattingFilterby('registered_today') }
                >
                금일가입회원
              </button>
            </div>
        </div>
        <UserList          
            count={paginatedCustomers.length}
            page={page}
            rows={UsersListData}
            rowsPerPage={rowsPerPage}
            tableHeader={[
                  {id:1, headerTitle:'번호'}, 
                  {id:2, headerTitle:'사이트'},
                  {id:3, headerTitle:'상위총판'},
                  {id:4, headerTitle:'아이디'},
                  {id:5, headerTitle:'닉네임'},
                  {id:6, headerTitle:'핸드폰'},
                  {id:7, headerTitle:'은행명'},
                  {id:8, headerTitle:'계좌번호'},
                  {id:9, headerTitle:'예금주'},
                  {id:10, headerTitle:'별칭'},
                  {id:11, headerTitle:'가입경로'},
                  {id:12, headerTitle:'가입IP'},
                  {id:13, headerTitle:'가입도메인'},
                  {id:14, headerTitle:'가입일자'},
            ]}
        />
      </Card>
    </Grid>
  );
}

function applyPagination(rows: UsersListInterface[], page: number, rowsPerPage: number): UsersListInterface[] {
  return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}




