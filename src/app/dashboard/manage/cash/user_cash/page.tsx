
'use client';
import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { usePathname } from 'next/navigation';
import { Card } from '@mui/material';
import { PartnerList } from '@/app/dashboard/manage/cash/partner_list/table';
import { filterPathName } from '@/app/meta/metadata';
import { PartnerRollingDatePicker } from '@/components/dashboard/manage_cp/rolling_partner_req/SelectDate';
import { SiteRender } from '@/components/materinals_components/site_render_gination';
import { siteData } from '../../../../../db/siteData'
import { SearchComponent } from '@/components/materinals_components/search';
import MultipleSelect from '@/components/materinals_components/selection_component';
import { UserName } from '@/db/selectionData' 
import RenderCategory from '@/components/materinals_components/category_render';
import { CashPartnerList } from './table';
import { ListCashPartner } from '@/db/cash_partner_list';
import { SummeryTable } from './sumery_table';
import { CashPartnerListData } from './data';

export default function Page(): React.JSX.Element {
    const page = 0;
    const rowsPerPage = 5;
    const currentPaht = usePathname()
    const [siteTarget, setSiteTartget] = React.useState<Number>(1)
    const [CategoryTarget, setCategoryTarget] = React.useState<Number>(1)
    const handleSiteChage = (sit_id:number) => {
        setSiteTartget(sit_id)
    }
  const handleCategoryChage = (category_id:Number) => {
     setCategoryTarget(category_id)
  }
  const pagtTitle = filterPathName(currentPaht)
  React.useEffect(() => {
    document.title = `${pagtTitle}`;
  }, [pagtTitle]); 
  const paginatedCustomers = applyPagination(ListCashPartner, page, rowsPerPage);
  return (
    <Grid container spacing={3} lg={12}>
      <Card>
        <div className='p-2 py-3 border border-1 border-t-0 border-x-0 border-sky-400'>
            <h2>{pagtTitle}</h2>
        </div>
        <div className='mt-3'>
            <SiteRender siteDatas={siteData} shadow={false} acitve={siteTarget} handleSiteChange={handleSiteChage} />
        </div>
        <div className='mt-3 flex flex-row items-center justify-start gap-2' style={{ fontSize:'10px' }}>
            <RenderCategory 
                category={[
                    {id:1, title:'전체'}, 
                    {id:2, title:'입금승인'}, 
                    {id:3, title:'입금취소'}, 
                    {id:4, title:'입금삭제'}, 
                    {id:5, title:'출금승인'},
                    {id:6, title:'출금취소'},
                    {id:7, title:'출금삭제'},
                    {id:8, title:'포인트전환'},
                    {id:9, title:'롤링전환'},
                    {id:10, title:'관리자지급'},
                    {id:11, title:'관리자회수'},
                    {id:12, title:'게임충전'},
                    {id:13, title:'게임환전'},
                    {id:14, title:'총판머니지급'},
                    {id:15, title:'총판머니회수'},
                    {id:16, title:'루징금 합산'},
                    {id:17, title:'재정산회수'},
                    {id:18, title:'(정산금)충전'},
                    {id:19, title:'(정산금)환전'},
                ]}
                acitve_category={CategoryTarget} 
                handleCategoryChage={handleCategoryChage}
            />
        </div>
        <div className='p-2 flex flex-row items-center justify-center flex-wrap lg:flex-nowrap lg:justify-start gap-3 mt-2 lg:ml-2'>
            <MultipleSelect listOfDataq={UserName}/>
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
        </div>
        <SummeryTable 
              totole_deposit_aday={12}
              withdraw_today={1313}
              perlod={'2024-03-07 00:00 ~ 2024-04-30 23:59'}
              deposit={23636}
              withdraw={131335534}
              deposit_withdraw={12422323}
        />
        <CashPartnerList          
            count={paginatedCustomers.length}
            page={page}
            rows={CashPartnerListData}
            rowsPerPage={rowsPerPage}
            tableHeader={[
                  {id:1, headerTitle:'번호'}, 
                  {id:2, headerTitle:'루트총판'},
                  {id:3, headerTitle:'상위총판'},
                  {id:4, headerTitle:'아이디'},
                  {id:5, headerTitle:'닉네임'},
                  {id:6, headerTitle:'머니'},
                  {id:7, headerTitle:'이전머니'},
                  {id:8, headerTitle:'이후머니'},
                  {id:9, headerTitle:'종류'},
                  {id:10, headerTitle:'설명'},
                  {id:11, headerTitle:'신청일자'},
                ]}
            />
      </Card>
    </Grid>
  );
}

function applyPagination(rows: PartnerList[], page: number, rowsPerPage: number): PartnerList[] {
  return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}




