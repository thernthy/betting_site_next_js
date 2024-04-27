import * as React from 'react';
import Card from '@mui/material/Card';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Button, Grid, Input } from '@mui/material';
import { PartnerRollingDatePicker } from './SelectDate';
import { SearchComponent } from '@/components/materinals_components/search';
import { SiteRender } from '@/components/materinals_components/site_render_gination';
import { siteData } from '@/db/siteData';

export function PartnerRollingHeader(): React.JSX.Element {
  const [siteTarget, setSiteTartget] = React.useState<Number>(1)
  const [data, setData] = React.useState<{
    email: string;
    status: 'initial' | 'loading' | 'failure' | 'sent';
  }>({
    email: '',
    status: 'initial',
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setData((current) => ({ ...current, status: 'loading' }));
    try {
      // Replace timeout with real backend operation
      setTimeout(() => {
        setData({ email: '', status: 'sent' });
      }, 1500);
    } catch (error) {
      setData((current) => ({ ...current, status: 'failure' }));
    }
  };
  const handleSiteChage = (sit_id:number) => {
    setSiteTartget(sit_id)
  }

  return (
    <>
      <SiteRender siteDatas={siteData} shadow={false} acitve={siteTarget} handleSiteChange={handleSiteChage} />
      <hr/>
      <div className='p-2 flex flex-row items-center justify-center flex-wrap lg:flex-nowrap lg:justify-start gap-3 mt-2 lg:ml-2'>
        <Grid lg={12} className='flex flex-row items-center justify-around gap-2'>
            <Grid lg={6}>
              <PartnerRollingDatePicker />
            </Grid>
            ~
            <Grid lg={6}>
              <PartnerRollingDatePicker />
            </Grid>
        </Grid>
        <SearchComponent />
      </div>
    </>
  );
}
