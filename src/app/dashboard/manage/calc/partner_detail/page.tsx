
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
import { PartnerDetailTable } from '@/components/dashboard/partner_detail/table';
import GameSelection from '@/components/dashboard/partner_detail/game_selection';
import { GameCategory } from '@/db/game_category';
import { DetailPartner } from '@/db/partner_detail';
import type { Customer } from '@/components/dashboard/partner_detail/table';
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
  const paginatedCustomers = applyPagination(DetailPartner, page, rowsPerPage);
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
      
          <PartnerDetailTable         
              count={paginatedCustomers.length}
              page={page}
              rows={DetailPartner}
              rowsPerPage={rowsPerPage}
              />
      </Card>
    </Grid>
  );
}

function applyPagination(rows: Customer[], page: number, rowsPerPage: number): Customer[] {
  return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}




