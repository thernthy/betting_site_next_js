
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
import RenderCategory from '@/components/materinals_components/category_render';
import { AllinTable } from './table';
import type { RowsUser } from './table';
import { rowsData } from './rowsData';
import { StatusComponent } from '@/components/materinals_components/status_components/status_component';

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

  const paginatedCustomers = applyPagination(rowsData, page, rowsPerPage);
  return (
    <Grid container spacing={3} lg={12}>
      <Card>
        <div className='p-2 py-3 border border-1 border-t-0 border-x-0 border-sky-400'>
            <h2>{pagtTitle}</h2>
        </div>
        <div className='mt-3'>
            <SiteRender siteDatas={siteData} shadow={false} acitve={siteTarget} handleSiteChange={handleSiteChage} />
        </div>
        <div className='mt-3 flex flex-row item-center justify-start'>
            <RenderCategory 
                category={[
                    {id:1, title:'전체'},
                    {id:2, title:'자동 '}, 
                    {id:3, title:'수동'},        
                ]}
                acitve_category={CategoryTarget} 
                handleCategoryChage={handleCategoryChage}
            />
            <RenderCategory 
                  category={[
                    {id:1, title:'전체'},
                    {id:2, title:'대기중 '}, 
                    {id:3, title:'지급완료'},        
                    {id:3, title:'처리실패'},        
                ]}
                acitve_category={CategoryTarget} 
                handleCategoryChage={handleCategoryChage}
            />
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
            <StatusComponent Status_text={'합계: ' + (398740).toLocaleString('en-Us')} tailwind_class_desing={[`${109 < 0? 'text-red-400' : 'text-white'} px-2 py-2  rounded-full bg-sky-500`]} />
        </div>
        <AllinTable rows={rowsData} />
      </Card>
    </Grid>
  );
}

function applyPagination(rows: RowsUser[], page: number, rowsPerPage: number): RowsUser[] {
  return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}




