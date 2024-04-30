
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
import GameSelection from '@/components/dashboard/partner_detail/game_selection';
import { GameCategory } from '@/db/game_category';
import { DetailPartner } from '@/db/partner_detail';
import { UserList } from './table';
import type { UsersListInterface } from './table';
import { UsersListData } from './users_data';
export default function Page(): React.JSX.Element {
    const page = 0;
    const rowsPerPage = 5;
    const currentPaht = usePathname()
    const [siteTarget, setSiteTartget] = React.useState<Number>(1)
    const [selected_categories, setSelected_categories] = React.useState<{ category_id: Number, category_title: String }[]>([]);
    const handleSiteChage = (sit_id:number) => {
        setSiteTartget(sit_id)
    }
  const pagtTitle = filterPathName(currentPaht)
  React.useEffect(() => {
    document.title = `${pagtTitle}`;
  }, [pagtTitle]); 

  const handleSelection = (selected_category: { category_id: Number, category_title: String }) => {
        // Check if the selected category already exists in the selected_categories array
    const exists = selected_categories.some(category => category.category_id === selected_category.category_id);
    if (exists) {
        // If the category already exists, remove it from the selected_categories array
        setSelected_categories(prevSelectedCategories => prevSelectedCategories.filter(category => category.category_id !== selected_category.category_id));
    } else {
        // If the category doesn't exist, add it to the selected_categories array
        setSelected_categories(prevSelectedCategories => [...prevSelectedCategories, selected_category]);
    }
}
  const paginatedCustomers = applyPagination(UsersListData, page, rowsPerPage);
  return (
    <Grid container spacing={3} lg={12}>
      <Card>
        <div className='p-2 py-3 border border-1 border-t-0 border-x-0 border-sky-400'>
            <h2>{pagtTitle}</h2>
        </div>
        <div className='mt-3'>
            <SiteRender siteDatas={siteData} shadow={false} acitve={siteTarget} handleSiteChange={handleSiteChage} />
        </div>
        <div className='p-2 flex flex-row items-center justify-center flex-wrap lg:flex-nowrap lg:justify-start gap-3 mt-2 lg:ml-2'>
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
              <GameSelection games_category={GameCategory} selected_category={selected_categories} handleSelection={handleSelection} />
            </div>
        </div>
        <UserList          
            count={paginatedCustomers.length}
            page={page}
            rows={UsersListData}
            rowsPerPage={rowsPerPage}
            tableHeader={[
                  {id:1, headerTitle:'전체'}, 
                  {id:2, headerTitle:'사이트'},
                  {id:2, headerTitle:'루트총판'},
                  {id:3, headerTitle:'상위총판'},
                  {id:4, headerTitle:'닉네임'},
                  {id:5, headerTitle:'아이디'},
                  {id:6, headerTitle:'닉네임'},
                  {id:7, headerTitle:'별칭'},
                  {id:8, headerTitle:'레벨'},
                  {id:9, headerTitle:'별칭'},
                  {id:10, headerTitle:'회원유형'},
                  {id:11, headerTitle:'상태'},
                  {id:12, headerTitle:'입/출'},
                  {id:13, headerTitle:'보유금액'},
                  {id:14, headerTitle:'롤링요률(%)'},
                  {id:15, headerTitle:'롤링금'},
                  {id:16, headerTitle:'루징금'},
                  {id:17, headerTitle:'입금'},
                  {id:18, headerTitle:'출금'},
                  {id:19, headerTitle:'입-출'},
                  {id:20, headerTitle:'베팅'},
                  {id:21, headerTitle:'상태'},
                  {id:22, headerTitle:'당첨'},
                  {id:23, headerTitle:'베-당'},
                  {id:24, headerTitle:'접속일자'},
                  {id:25, headerTitle:'접속 IP'},
                  {id:26, headerTitle:'최근입금일'},
                  {id:27, headerTitle:'가입일자'},
                  {id:28, headerTitle:'탈퇴일자'},
                  {id:29, headerTitle:'기능'},
                  {id:30, headerTitle:'Gold사용'},
                  {id:31, headerTitle:'완전삭제'},
            ]}
        />
      </Card>
    </Grid>
  );
}

function applyPagination(rows: UsersListInterface[], page: number, rowsPerPage: number): UsersListInterface[] {
  return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}




