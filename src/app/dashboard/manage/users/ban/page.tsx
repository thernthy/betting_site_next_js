
'use client';
import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { usePathname } from 'next/navigation';
import { Card } from '@mui/material';
import { filterPathName } from '@/app/meta/metadata';
import { SiteRender } from '@/components/materinals_components/site_render_gination';
import { siteData } from '../../../../../db/siteData'
import { SearchComponent } from '@/components/materinals_components/search';
import { RowData } from './RowData';
import type{ RowData as rowDataInterface }  from './table';
import { DataTable } from './table';

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
  const onSelectUser = (id:string) => {
    
  }
  const paginatedCustomers = applyPagination(RowData, page, rowsPerPage);
  return (
    <Card className='h-full'>
        <div className='p-2 py-3 border border-1 border-t-0 border-x-0 border-sky-400'>
            <h2>{pagtTitle}</h2>
        </div>
        <div className='mt-3'>
            <SiteRender siteDatas={siteData} shadow={false} acitve={siteTarget} handleSiteChange={handleSiteChage} />
        </div>
        <div className='p-2 flex flex-row items-end justify-center flex-wrap lg:flex-nowrap lg:justify-start gap-3 mt-2 lg:ml-2'>
            <SearchComponent />
        </div>
        <DataTable          
            count={paginatedCustomers.length}
            page={page}
            rows={RowData}
            rowsPerPage={rowsPerPage}
            headers={[
                  {id:1, header_title:'사이트'}, 
                  {id:2, header_title:'루트총판'},
                  {id:3, header_title:'상위총판'},
                  {id:4, header_title:'아이디'},
                  {id:5, header_title:'닉네임'},
                  {id:6, header_title:'예금주'},
                  {id:7, header_title:'별칭'},
                  {id:8, header_title:'가입일자'},
                  {id:9, header_title:'실패횟수'},
                  {id:10, header_title:'차단일시'},
                  {id:11, header_title:'설명'},
                  {id:12, header_title:'-'},
            ]}
        />
      </Card>
  );
}

function applyPagination(rows: rowDataInterface[], page: number, rowsPerPage: number): rowDataInterface[] {
  return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}




