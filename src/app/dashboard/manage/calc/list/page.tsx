
'use client';
import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { usePathname } from 'next/navigation';
import { Card } from '@mui/material';
import type { Customer } from '@/components/dashboard/customer/customers-table';
import { filterPathName } from '@/app/meta/metadata';
import { PartnerRollingDatePicker } from '@/components/dashboard/manage_cp/rolling_partner_req/SelectDate';
import { SiteRender } from '@/components/materinals_components/site_render_gination';
import { siteData } from '../../../../../db/siteData'
import { SearchComponent } from '@/components/materinals_components/search';
import MultipleSelect from '@/components/materinals_components/selection_component';
import { UserName } from '@/db/selectionData' 
import RenderCategory from '@/components/materinals_components/category_render';
import {Customers} from '@/db/Demo_user';
import { CalcListTable } from '@/components/dashboard/list/table';

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

  const paginatedCustomers = applyPagination(Customers, page, rowsPerPage);
  return (
    <Grid container spacing={3} lg={12}>
      <Card>
        <div className='p-2 py-3 border border-1 border-t-0 border-x-0 border-sky-400'>
            <h2>{pagtTitle}</h2>
        </div>
        <div className='mt-3'>
            <SiteRender siteDatas={siteData} shadow={false} acitve={siteTarget} handleSiteChange={handleSiteChage} />
        </div>
        <div className='mt-3'>
            <RenderCategory 
                category={[{id:1, title:'전체'}, {id:2, title:'출첵지급'}, {id:3, title:'룰렛지급'}, {id:4, title:'포인트전환'}, {id:5, title:'관리자지급'}]}
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
        <CalcListTable         
            count={paginatedCustomers.length}
            page={page}
            rows={paginatedCustomers}
            rowsPerPage={rowsPerPage}
            />
      </Card>
    </Grid>
  );
}

function applyPagination(rows: Customer[], page: number, rowsPerPage: number): Customer[] {
  return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}




