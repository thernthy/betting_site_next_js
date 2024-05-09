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
             <div className='border-2 border-x-0 border-t-0'>
                <ul className='flex flex-row items-center justify-start'>
                    {Gamecategory.map((elemen, index) => {
                        return (
                          <li key={ index } className='border border-spacing-1 border-b-0 px-3 py-1 bg-gray-100'>
                            { elemen.title }
                          </li>
                        )
                      })
                    }
                </ul>
             </div>
          </CardContent>
      </Card>
    </Stack>
  );
}
