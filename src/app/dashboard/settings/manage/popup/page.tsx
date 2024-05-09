'use client';

import * as React from 'react';
import type { Metadata } from 'next';
import Stack from '@mui/material/Stack';
import { Card, CardContent, CardHeader } from '@mui/material';
import { usePathname } from 'next/navigation';
import { filterPathName } from '@/app/meta/metadata';
import JoditReact from './Render';
import { Jodit } from 'jodit';
import './style.css'
import Grid from '@mui/system/Unstable_Grid/Grid';
import { Settingform } from './setting_js';

export default function Page(): React.JSX.Element {
  const currentPaht = usePathname()
 const pagtTitle = filterPathName(currentPaht)
  React.useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/jodit/3.5.4/jodit.min.css'; 
    document.title = `${pagtTitle}`;
    document.head.appendChild(link);
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

const handleOnChagng = () => {
  
}

  return (
    <Stack spacing={3}>
      <Card>
        <CardHeader title={pagtTitle} sx={{borderBottom:'1px solid gray'}}>
        </CardHeader>
          <CardContent>
            <Grid container spacing={2}>
              {Settingform.map((setting, index) => {
                return(
                    <Grid xl={4} lg={6} sm={12}>
                      <div className='flex flex-row items-center justify-start text-sm py-3 bg-sky-600 gap-2 text-white'>
                          <span className='px-3'>{ setting.form_title }</span>
                          <div className='flex flex-row '>
                            <span>z-index</span>
                            <input type='number'  min={0} className='w-12 mx-0.5 bg-transparent border border-gray-200 rounded-md' />
                          </div>
                          <div>
                            <span>보기</span>
                            <input type='number' min={0} className='w-12 mx-0.5 bg-transparent border border-gray-200 rounded-md' />
                          </div>
                          <div>
                            <select className='mx-0.5 bg-transparent border border-gray-200 rounded-md'>
                              <option value={''}>로그인전</option>
                              <option value={''}>로그인후</option>
                              <option value={''}>모두</option>
                            </select>
                          </div>
                        </div>
                        <div className='w-full flex flex-col gap-3 my-3 px-3'>
                          <label htmlFor='pop-up_title'>팝업제목</label>
                          <input type='text' placeholder='after loggin in pop upu test title..' 
                            className='w-full py-0.5 border-2 bg-gray-100 px-3 bg-transparent' 
                          />
                        </div>
                        <div className='flex flex-row items-center justify-start gap-3 px-3 my-3'>
                          <div>
                            <label htmlFor='white_space'>여백</label>
                            <input type='text' placeholder='white space...' className='border-2 border-gray-100 px-2 w-full py-1' />
                          </div>
                          <div>
                            <label htmlFor='white_space'>너비</label>
                            <input type='text' placeholder='white ...' className='border-2 border-gray-100 px-2 w-full py-1' />
                          </div>
                          <div>
                            <label htmlFor='white_space'>높이(최소)</label>
                            <input type='text' placeholder='height...' className='border-2 border-gray-100 px-2 w-full py-1' />
                          </div>
                        </div>
                        <div className=' min-h-72 max-h-96 overflow-y-auto px-3'>
                          <JoditReact onChange={handleOnChagng} />
                        </div>
                    </Grid>
                )
              })
                
              }
            </Grid>
          </CardContent>
      </Card>
    </Stack>
  );
}
