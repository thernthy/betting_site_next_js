'use client';

import * as React from 'react';
import type { Metadata } from 'next';
import Stack from '@mui/material/Stack';
import { Card, CardContent, CardHeader } from '@mui/material';
import { usePathname } from 'next/navigation';
import { filterPathName } from '@/app/meta/metadata';
import { Jodit } from 'jodit';
import Grid from '@mui/system/Unstable_Grid/Grid';
import { Gamecategory } from './category_game'
export default function Page(): React.JSX.Element {
  const currentPaht = usePathname()
 const pagtTitle = filterPathName(currentPaht)
  React.useEffect(() => {
    document.title = `${pagtTitle}`;
  }, [pagtTitle]); 

  const [selected, setSelected] = React.useState<string>('win')

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

const handleSlect = (value:string) => {
  setSelected(value)
}

  return (
    <Stack spacing={3}>
      <Card>
        <CardHeader title={pagtTitle} sx={{borderBottom:'1px solid gray'}}>
        </CardHeader>
          <CardContent>
             <div className='border-2 border-x-0 border-t-0'>
                <ul className='flex flex-row items-center justify-start gap-1 py-2 flex-wrap lgx:flex-nowrap'>
                    {Gamecategory.map((elemen, index) => {
                        return (
                          <li key={ index } onClick={ ()=>handleSlect(elemen.title) }
                            className={`
                                border border-spacing-1 border-b-0 px-3 py-1 cursor-pointer
                                rounded-full
                                ${ selected && selected ===  elemen.title? 'bg-transparent' : 'bg-gray-100' }
                              `}>
                            { elemen.title }
                          </li>
                        )
                      })
                    }
                </ul>
             </div>
            {Gamecategory.map((elemen, index) => {
               if(elemen.title === selected){
                  return <form className='py-4 lg:w-1/2 shadow-md'>
                      <div className='bg-sky-600 py-1.5 mb-5 px-2 text-white'>
                        {elemen.title}
                      </div>
                      {
                        elemen.setting_inpu.map((setting, index) => {
                            return(
                              <div key={index} className='form-control w-full flex flex-row items-center justify-around gap-3 py-2'>
                                <input type='text' className='px-2 py-2 border border-spacing-2 border-gray-200 bg-transparent rounded-sm' placeholder={setting} />
                                <button className='px-3 py-1 border border-1 border-gray-100 bg-gray-300 rounded-md text-white'> 삭제 </button>
                                <button className='px-3 py-1 border border-1 border-gray-100 bg-gray-300 rounded-md text-white'> 변경 </button>
                              </div>
                            )
                          })
                      }
                  </form>
               }
              })
            }
          </CardContent>
      </Card>
    </Stack>
  );
}
