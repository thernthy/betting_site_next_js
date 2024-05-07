'use client';

import * as React from 'react';
import type { Metadata } from 'next';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import { Download as DownloadIcon } from '@phosphor-icons/react/dist/ssr/Download';
import { Plus as PlusIcon } from '@phosphor-icons/react/dist/ssr/Plus';
import { Upload as UploadIcon } from '@phosphor-icons/react/dist/ssr/Upload';
import dayjs from 'dayjs';
import SearchIcon from '@mui/icons-material/Search';
import { IntegrationCard } from '@/components/dashboard/integrations/integrations-card';
import type { Integration } from '@/components/dashboard/integrations/integrations-card';
import { Card, CardContent, CardHeader } from '@mui/material';
import { usePathname } from 'next/navigation';
import { filterPathName } from '@/app/meta/metadata';
import PopUpModle from './Modecomponenet';
import { SwitchButton } from '@/components/materinals_components/switchingbutton/switchButton';
import AccessibleTable from './table';


const integrations = [
  {
    id: 'INTEG-006',
    title: 'Dropbox',
    description: 'Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud.',
    logo: '/assets/logo-dropbox.png',
    installs: 594,
    updatedAt: dayjs().subtract(12, 'minute').toDate(),
  },
  {
    id: 'INTEG-005',
    title: 'Medium Corporation',
    description: 'Medium is an online publishing platform developed by Evan Williams, and launched in August 2012.',
    logo: '/assets/logo-medium.png',
    installs: 625,
    updatedAt: dayjs().subtract(43, 'minute').subtract(1, 'hour').toDate(),
  },
  {
    id: 'INTEG-004',
    title: 'Slack',
    description: 'Slack is a cloud-based set of team collaboration tools and services, founded by Stewart Butterfield.',
    logo: '/assets/logo-slack.png',
    installs: 857,
    updatedAt: dayjs().subtract(50, 'minute').subtract(3, 'hour').toDate(),
  },
  {
    id: 'INTEG-003',
    title: 'Lyft',
    description: 'Lyft is an on-demand transportation company based in San Francisco, California.',
    logo: '/assets/logo-lyft.png',
    installs: 406,
    updatedAt: dayjs().subtract(7, 'minute').subtract(4, 'hour').subtract(1, 'day').toDate(),
  },
  {
    id: 'INTEG-002',
    title: 'GitHub',
    description: 'GitHub is a web-based hosting service for version control of code using Git.',
    logo: '/assets/logo-github.png',
    installs: 835,
    updatedAt: dayjs().subtract(31, 'minute').subtract(4, 'hour').subtract(5, 'day').toDate(),
  },
  {
    id: 'INTEG-001',
    title: 'Squarespace',
    description: 'Squarespace provides software as a service for website building and hosting. Headquartered in NYC.',
    logo: '/assets/logo-squarespace.png',
    installs: 435,
    updatedAt: dayjs().subtract(25, 'minute').subtract(6, 'hour').subtract(6, 'day').toDate(),
  },
] satisfies Integration[];

export default function Page(): React.JSX.Element {
  const currentPaht = usePathname()
 const pagtTitle = filterPathName(currentPaht)
  React.useEffect(() => {
    document.title = `${pagtTitle}`;
  }, [pagtTitle]); 
  interface SwitchStates {
    [key: string]: boolean;
  }

  const [switchState, setSwitchState] = React.useState<SwitchStates>({});
  const handleClick = (index: number, status_requt: string, type_request: string) => {
        setSwitchState(prevState => ({
            ...prevState,
            [`${index}_${status_requt}_${type_request}`] : !prevState[`${index}_${status_requt}_${type_request}`]
        }));
        const requ_type = switchState[`${index}_${status_requt}_${type_request}`] ? 'set_' : 'unset_'; // Determine request type based on type_request
        alert(requ_type + ' ' + status_requt + ' ' + type_request);
  };

  const [seletedCategory, setSelectedCategory] = React.useState<string>('sn1')

  const handleFilterCategory = (category_name:string) => {
    setSelectedCategory(category_name)
  }


  return (
    <Stack spacing={3}>
      {/* <CompaniesFilters /> */}
      <Card>
        <CardHeader title={pagtTitle} sx={{borderBottom:'1px solid gray'}}>
        </CardHeader>
        <CardContent>
          <div className='flex flex-row items-center justify-end w-full gap-3 flex-wrap md:flex-nowrap mb-3'>
              <div className='flex flex-row items-center justify-start gap-3 shadow-sm px-3 py-2 rounded-sm'>
                  <div className='flex flex-row items-center justify-start gap-2 md:whitespace-nowrap'>
                    관리자 허용IP 사용/사용안함
                  <SwitchButton 
                    onClick={()=>handleClick(1, `enable_disable_administrator_allowed_ip`, 'enable_disable_administrator_allowed_ip')} 
                    switchState={switchState[`1_enable_disable_administrator_allowed_ip_enable_disable_administrator_allowed_ip`]} />
                  </div>
                  <div className='flex flex-row items-center justify-start gap-2 md:whitespace-nowrap'>
                    유저차단IP 사용/사용안함
                    <SwitchButton 
                    onClick={()=>handleClick(2, `user_block_ip_enable_disable`, 'user_block_ip_enable_disable')} 
                    switchState={switchState[`2_user_block_ip_enable_disable_user_block_ip_enable_disable`]} />
                  </div>
              </div>
              <div className='flex flex-row items-center justify-end w-full gap-3'>
                <PopUpModle show_title={'관리자 허용IP 등록'} request_methode={'/administrator_allowed_ip_registration'} />
                <PopUpModle show_title={'유저 차단IP 등록'} request_methode={'/register_blocked_user_ip'} />
              </div>
          </div>
          <div>
            <div className='filter-wrapper flex flex-col md:flex-row  items-center justify-start gap-2'>
              <div className='flex flex-row items-center justify-start gap-2'>
                <input type='text' placeholder='seach ip......' className='px-2 py-2 border-2 border-sky-400 rounded-full'/>
                <div className='rounded-full py-2 px-2 bg-sky-600 text-white active:bg-sky-400 hover:bg-gray-300'>
                  <SearchIcon />
                </div>
              </div>
              <ul className='flex flex-row items-center justify-around gap-3 bg-gray-200 px-3 rounded-md py-2'>
                <li onClick={()=>handleFilterCategory('sn1')} className={` px-2 py-0.5 rounded-md text-sm md:text-md hover:bg-gray-100 cursor-pointer ${seletedCategory && seletedCategory === 'sn1' ? 'bg-sky-600 text-white' : 'bg-white' }`}>전</li>
                <li onClick={()=>handleFilterCategory('sn2')} className={` px-2 py-0.5 rounded-md text-sm md:text-md hover:bg-gray-100 cursor-pointer ${seletedCategory && seletedCategory === 'sn2' ? 'bg-sky-600 text-white' : 'bg-white' }`}>체</li>
                <li onClick={()=>handleFilterCategory('sn3')} className={` px-2 py-0.5 rounded-md text-sm md:text-md hover:bg-gray-100 cursor-pointer ${seletedCategory && seletedCategory === 'sn3' ? 'bg-sky-600 text-white' : 'bg-white' }`}>회원로그인</li>
                <li onClick={()=>handleFilterCategory('sn4')} className={` px-2 py-0.5 rounded-md text-sm md:text-md hover:bg-gray-100 cursor-pointer ${seletedCategory && seletedCategory === 'sn4' ? 'bg-sky-600 text-white' : 'bg-white' }`}>실패 차단</li>
                <li onClick={()=>handleFilterCategory('sn5')} className={` px-2 py-0.5 rounded-md text-sm md:text-md hover:bg-gray-100 cursor-pointer ${seletedCategory && seletedCategory === 'sn5' ? 'bg-sky-600 text-white' : 'bg-white' }`}>관리자허용IP</li>
                <li onClick={()=>handleFilterCategory('sn6')} className={` px-2 py-0.5 rounded-md text-sm md:text-md hover:bg-gray-100 cursor-pointer ${seletedCategory && seletedCategory === 'sn6' ? 'bg-sky-600 text-white' : 'bg-white' }`}>관리자허용IP</li>
              </ul>
            </div>
          </div>
          <div className='w-full flex flex-row items-center justify-end'>
             <select className='px-3 py-1.5 min-w-64 max-w-80 text-white bg-sky-600 rounded-md'>
                <option value='50'>50</option>
                <option value='100'>100</option>
                <option value='250'>250</option>
                <option value='500'>500</option>
             </select>
          </div>
        </CardContent>
      </Card>
      <Grid container spacing={3}>
        <AccessibleTable />
        {/* {integrations.map((integration) => (
          <Grid key={integration.id} lg={4} md={6} xs={12}>
            <IntegrationCard integration={integration} />
          </Grid>
        ))} */}
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination count={3} size="small" />
      </Box>
    </Stack>
  );
}
