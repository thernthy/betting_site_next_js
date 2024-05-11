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
import { SwitchButton } from './switchButton';
import JoditReact from './Render';
import { LevelJs } from './level';


export default function Page(): React.JSX.Element {
  const currentPaht = usePathname()
 const pagtTitle = filterPathName(currentPaht)
  React.useEffect(() => {
    document.title = `${pagtTitle}`;
  }, [pagtTitle]); 

  const [selected, setSelected] = React.useState<string>('win')

// Define the SwitchStates interface
interface SwitchStates {
  [key: string]: boolean;
}

// Initialize switchState with initial values based on BankList
// const initialSwitchState: SwitchStates = BankList.reduce((acc:any, row) => {
//   acc[row.id.toString()] = row.status === 1;
//   return acc;
// }, {});

// Use React.useState to initialize the switchState state
const [switchState, setSwitchState] = React.useState<SwitchStates>({});

// handleClick function remains the same
const handleClick = (index: string, status: number) => {
  setSwitchState(prevState => ({
    ...prevState,
    [index]: !prevState[index]
  }));
};

const handleSlect = (value:string) => {
  setSelected(value)
}

const handleOnChagng = () => {
  
}

  return (
    <Stack spacing={3}>
      <Card>
        <CardHeader title={pagtTitle} sx={{borderBottom:'1px solid gray'}}>
        </CardHeader>
          <CardContent>
             <div className='border-2 border-x-0 border-t-0'>
                <ul className='flex flex-row items-center justify-start gap-2 py-2 flex-wrap lgx:flex-nowrap'>
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
             <div>
              <ul className='flex flex-row items-center justify-start gap-2 bg-gray-200 mt-3 w-fit py-2 pl-2 rounded-md flex-wrap xl:flex-nowrap'>
                {LevelJs?.map((level, index) => {
                    return (
                      <li key={index + 1} className='px-3 py-1 bg-white rounded-md cursor-pointer'>
                        { level.name }
                      </li>
                    )
                  })
                }
                <li></li>
              </ul>
             </div>
            {Gamecategory.map((elemen, index) => {
               if(elemen.title === selected){
                  return (
                    <form className='py-4 shadow-md xl:w-2/3'>
                      <div className='bg-sky-600 py-1.5 mb-5 px-2 text-white'>
                        {elemen.title}
                      </div>
                      <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                        <div className='pl-3 flex flex-col justify-start items-start gap-2'>
                          <div className='flex flex-row gap-3 items-center justify-start'>
                            <label htmlFor='name_of_bank'>은행명</label>
                            <input className='px-2 py-2 border border-spacing-2 border-gray-200 rounded-md' placeholder='bank...' />
                          </div>
                          <div className='flex flex-row gap-3 items-center justify-start'>
                            <label htmlFor='account_number'>계좌번호</label>
                            <input className='px-2 py-2 border border-spacing-2 border-gray-200 rounded-md' placeholder='bank...' />
                          </div>
                          <div className='flex flex-row gap-3 items-center justify-start'>
                            <label htmlFor='account_holder'>예금주</label>
                            <input className='px-2 py-2 border border-spacing-2 border-gray-200 rounded-md' placeholder='bank...' />
                          </div>
                          <div className='flex flex-row gap-3 items-center justify-start'>
                            <label htmlFor='contact_customer_service_center'>고객센터로 문의</label>
                            <SwitchButton onClick={ ()=>handleClick(String(elemen.id), 1) } switchState={switchState[elemen.id.toString()]} />
                          </div>
                        </div>
                        <div>
                          <JoditReact onChange={handleOnChagng} />
                        </div>
                      </div>
                      <div className='flex flex-row items-center justify-center mt-4 gap-3 '>
                        <button className='py-1 px-3 bg-sky-600 rounded-sm text-white'>1레벨 변경</button>
                        <button className='py-1 px-3 bg-sky-600 rounded-sm text-white'>전체 레벨 일괄적용</button>
                      </div>
                    </form>
                  )
               }
              })
            }
          </CardContent>
      </Card>
    </Stack>
  );
}
