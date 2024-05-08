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
import SoundPlay from './RadioPlayer';
import { SettingData } from './setting';
import { Sounds } from './db/renderSound'

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
          <div className='flex flex-row items-center justify-start w-full gap-3 flex-wrap md:flex-nowrap mb-3'>
              <div className='flex flex-row items-center justify-start gap-3 shadow-md  px-3 py-2 rounded-md'>
                  <div className='flex flex-row items-center justify-start gap-2 md:whitespace-nowrap'>                             
                    알람횟수 제한	
                    <input type='text' className='px-2 py-1.5 border border-1 border-sky-600 rounded-md' />
                    <button className='px-3 py-1.5 bg-sky-600 rounded-sm text-white'>변경</button>
                  </div>
              </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='w-full shadow-md'>
              <div className='px-2 py-1.5 bg-sky-700'><h2 className={' text-white'}>관리자 알람 설정</h2></div>
              <div className='filter-wrapper flex flex-col md:flex-row  items-center justify-start gap-2  px-2 md:px-5 pt-2 pb-5'>
                <div className='flex flex-row items-center justify-start gap-2 w-full'>
                  <div className='flex flex-col items-start justify-start gap-2 pt-4 w-full'>
                    {
                      SettingData?.map((element:any, index:number) => {
                        return(
                          <div key={index} className='flex flex-row items-center justify-between gap-2 w-full'>
                              <span>{element.name}</span>
                              {index > 0  && index < 2?
                                <div className='min-w-60 max-w-80'>
                                  <SoundPlay url={`${new Audio(Sounds[1].soundPath)}`} />
                                </div> :''
                              }
                              {index > 3  && index < 5?
                                <div className='min-w-60 max-w-80'>
                                  <SoundPlay url={`${new Audio(Sounds[2].soundPath)}`} />
                                </div> :''
                              }
                              <div className='flex flex-row items-center justify-start gap-2'>
                                <button className='px-2 py-1.5 bg-sky-600 rounded-lg text-white'>알람파일 설정</button>
                                <button className='px-2 py-1.5 bg-red-400 rounded-lg text-white'>알람음 해제</button>
                              </div>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className=' min-w-60 max-w-96 shadow-md'>
              <div className=' px-2 py-1.5 bg-sky-700 '><h2 className={' text-white '}>회원페이지 알람 설정</h2></div>
              <div className={` filter-wrapper flex flex-col md:flex-row  items-center justify-between gap-2 mt-4 px-2 py-3 `}>
                <div className={` flex flex-row items-center justify-between gap-2 `}>
                  <span className=' whitespace-nowrap'>관리자쪽지</span>
                  <button className='whitespace-nowrap py-1.5 px-3 rounded-md text-white bg-sky-600'>알람파일 설정</button>
                  <button className='whitespace-nowrap py-1.5 px-3 rounded-md text-white bg-red-500'>알람음 해제</button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Stack>
  );
}
