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
  const [durationValue, setDurationValue] = React.useState<string>('disposable')

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

const handleOnChagng = (event: React.ChangeEvent<HTMLSelectElement>) => {
  setDurationValue(event.target.value)
}

  return (
    <Stack spacing={3}>
      <Card>
        <CardHeader title={pagtTitle} sx={{borderBottom:'1px solid gray'}}>
        </CardHeader>
          <CardContent>
             <div className='border-2 border-x-0 border-t-0'>
                <ul className='flex flex-row items-center justify-start gap-2 py-2 flex-wrap lgx:flex-nowrap'>
                  <li className={`border border-spacing-1 border-b-0 px-3 py-1 cursor-pointer rounded-full bg-gray-100`}>
                    Site 1
                  </li>
                </ul>
             </div>
             <div>
              <ul className='flex flex-row items-center justify-start gap-2 bg-gray-200 mt-3 w-fit py-2 px-2 rounded-md flex-wrap xl:flex-nowrap'>
                {
                  LevelJs?.map((level, index) => {
                    return (
                      <li key={index + 1} className='px-3 py-1 bg-white rounded-md cursor-pointer'>
                        { level.name }
                      </li>
                    )
                  })
                }
              </ul>
             </div>
             <Grid container spacing={1} sx={{marginTop:'10px'}}>
              <Grid container xl={4} lg={6} md={12} spacing={1}>
                <Grid xl={12} lg={12} md={12} sm={12}>
                <div className='py-2 px-2 bg-sky-600 text-white w-full'>
                    2레벨 설정
                  </div>
                  <form className='flex text-sm xl:text-xs flex-col items-start justify-start gap-4 shadow-md px-3 py-2'>
                      <div className='flex flex-row items-center justify-between gap-1 xl:flex-nowrap'>
                        <label htmlFor=''>최소 입금금액</label>
                        <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                          <input type='number' className=' rounded-md w-full pl-2' />
                          <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>원</span>
                        </div>
                        <label htmlFor=''>카지노 라이브 최대 롤링</label>
                        <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                          <input type='number' className=' rounded-md w-full pl-2' />
                          <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>%</span>
                        </div>
                      </div>
                      <div className='flex flex-row items-center justify-between gap-1 xl:flex-nowrap'>
                        <label htmlFor=''>최소 출금금액</label>
                        <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                          <input type='number' className=' rounded-md w-full pl-2' />
                          <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>원</span>
                        </div>
                        <label htmlFor=''>카지노 라이브 최소 롤링</label>
                        <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                          <input type='number' className=' rounded-md w-full pl-2' />
                          <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>%</span>
                        </div>
                      </div>
                      <div className='flex flex-row items-center justify-between gap-1 xl:flex-nowrap'>
                        <label htmlFor=''>최대 입금금액</label>
                        <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                          <input type='number' className=' rounded-md w-full pl-2' />
                          <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>원</span>
                        </div>
                        <label htmlFor=''>카지노 슬롯 최대 롤링</label>
                        <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                          <input type='number' className=' rounded-md w-full pl-2' />
                          <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>%</span>
                        </div>
                      </div>
                      <div className='flex flex-row items-center justify-between gap-1 xl:flex-nowrap'>
                        <label htmlFor=''>최대 출금금액</label>
                        <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                          <input type='number' className=' rounded-md w-full pl-2' />
                          <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>원</span>
                        </div>
                        <label htmlFor=''>카지노 슬롯 최소 롤링</label>
                        <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                          <input type='number' className=' rounded-md w-full pl-2' />
                          <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>%</span>
                        </div>
                      </div>
                      <div className='flex flex-row items-center justify-between gap-1 xl:flex-nowrap'>
                        <label htmlFor=''>1일 최대 출금금액</label>
                        <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                          <input type='number' className=' rounded-md w-full pl-2' />
                          <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>원</span>
                        </div>
                        <label htmlFor=''>미니게임 최소 베팅금액</label>
                        <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                          <input type='number' className=' rounded-md w-full pl-2' />
                          <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>%</span>
                        </div>
                      </div>
                      <div className='flex flex-row items-center justify-between gap-1 xl:flex-nowrap'>
                        <label htmlFor=''>포인트 최소 전환금액</label>
                        <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                          <input type='number' className=' rounded-md w-full pl-2' />
                          <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>원</span>
                        </div>
                        <label htmlFor=''>미니게임 최대 롤링</label>
                        <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                          <input type='number' className=' rounded-md w-full pl-2' />
                          <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>%</span>
                        </div>
                      </div>
                      <div className='flex flex-row items-center justify-between gap-1 xl:flex-nowrap'>
                        <label htmlFor=''>입금 금액 단위</label>
                        <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                          <input type='number' className=' rounded-md w-full pl-2' />
                          <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>원</span>
                        </div>
                        <label htmlFor=''>미니게임 최소 롤링</label>
                        <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                          <input type='number' className=' rounded-md w-full pl-2' />
                          <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>%</span>
                        </div>
                      </div>
                      <div className='flex flex-row items-center justify-between gap-1 xl:flex-nowrap'>
                        <label htmlFor=''>출금 금액 단위</label>
                        <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                          <input type='number' className=' rounded-md w-full pl-2' />
                          <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>원</span>
                        </div>
                        <label htmlFor=''>스포츠 최대 롤링</label>
                        <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                          <input type='number' className=' rounded-md w-full pl-2' />
                          <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>%</span>
                        </div>
                      </div>
                      <div className='flex flex-row items-center justify-between gap-1 xl:flex-nowrap'>
                        <label htmlFor=''>미니게임 단폴 낙첨 포인트</label>
                        <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                          <input type='number' className=' rounded-md w-full pl-2' />
                          <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>원</span>
                        </div>
                        <label htmlFor=''>스포츠 최소 롤링</label>
                        <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                          <input type='number' className=' rounded-md w-full pl-2' />
                          <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>%</span>
                        </div>
                      </div>
                      <div className='flex flex-row items-center justify-between gap-1 xl:flex-nowrap'>
                        <label htmlFor=''>미니게임 조합 낙첨 포인트</label>
                        <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                          <input type='number' className=' rounded-md w-full pl-2' />
                          <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>원</span>
                        </div>
                        <label htmlFor=''>가상게임 최대 롤링</label>
                        <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                          <input type='number' className=' rounded-md w-full pl-2' />
                          <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>%</span>
                        </div>
                      </div>
                      <div className='flex flex-row items-center justify-between gap-1 xl:flex-nowrap'>
                        <label htmlFor=''>미니게임 전체 낙첨 포인트</label>
                        <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                          <input type='number' className=' rounded-md w-full pl-2' />
                          <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>원</span>
                        </div>
                        <label htmlFor=''>가상게임 최소 롤링</label>
                        <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                          <input type='number' className=' rounded-md w-full pl-2' />
                          <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>%</span>
                        </div>
                      </div>
                      <div className='flex flex-row items-center justify-between gap-1 xl:flex-nowrap'>
                        <label htmlFor=''>스포츠 라이브 단폴 낙첨 포인트</label>
                        <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                          <input type='number' className=' rounded-md w-full pl-2' />
                          <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>원</span>
                        </div>
                        <label htmlFor=''>로투스 최대 롤링</label>
                        <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                          <input type='number' className=' rounded-md w-full pl-2' />
                          <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>%</span>
                        </div>
                      </div>
                      <div className='flex flex-row items-center justify-between gap-1 xl:flex-nowrap'>
                        <label htmlFor=''>스포츠 라이브 2폴 낙첨 포인트</label>
                        <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                          <input type='number' className=' rounded-md w-full pl-2' />
                          <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>원</span>
                        </div>
                        <label htmlFor=''>로투스 최소 롤링</label>
                        <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                          <input type='number' className=' rounded-md w-full pl-2' />
                          <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>%</span>
                        </div>
                      </div>
                      <div className='flex flex-row items-center justify-between gap-1 xl:flex-nowrap'>
                        <label htmlFor=''>스포츠 라이브 3폴 낙첨 포인트</label>
                        <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                          <input type='number' className=' rounded-md w-full pl-2' />
                          <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>원</span>
                        </div>
                        <label htmlFor=''>MGM 최대 롤링</label>
                        <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                          <input type='number' className=' rounded-md w-full pl-2' />
                          <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>%</span>
                        </div>
                      </div>
                      <div className='flex flex-row items-center justify-between gap-1 xl:flex-nowrap'>
                        <label htmlFor=''>스포츠 라이브 4폴 낙첨 포인트</label>
                        <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                          <input type='number' className=' rounded-md w-full pl-2' />
                          <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>원</span>
                        </div>
                        <label htmlFor=''>MGM 최소 롤링</label>
                        <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                          <input type='number' className=' rounded-md w-full pl-2' />
                          <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>%</span>
                        </div>
                      </div>
                      <div className='flex flex-row items-center justify-between gap-1 xl:flex-nowrap'>
                        <label htmlFor=''>스포츠 라이브 다폴 낙첨 포인트</label>
                        <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                          <input type='number' className=' rounded-md w-full pl-2' />
                          <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>원</span>
                        </div>
                        <label htmlFor=''>터치게임 최대 롤링</label>
                        <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                          <input type='number' className=' rounded-md w-full pl-2' />
                          <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>%</span>
                        </div>
                      </div>
                      <div className='flex flex-row items-center justify-between gap-1 xl:flex-nowrap'>
                        <label htmlFor=''>스포츠 라이브 전체 낙첨 포인트</label>
                        <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                          <input type='number' className=' rounded-md w-full pl-2' />
                          <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>원</span>
                        </div>
                        <label htmlFor=''>터치게임 최소 롤링</label>
                        <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                          <input type='number' className=' rounded-md w-full pl-2' />
                          <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>%</span>
                        </div>
                      </div>
                      <div className='flex flex-row items-center justify-between gap-1 xl:flex-nowrap'>
                        <label htmlFor=''>스포츠 라이브 전체 낙첨 포인트</label>
                        <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                          <input type='number' className=' rounded-md w-full pl-2' />
                          <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>원</span>
                        </div>
                      </div>
                      <div className='flex flex-row items-center justify-between gap-1 xl:flex-nowrap'>
                        <label htmlFor=''>스포츠 프리매치 단폴 낙첨 포인트</label>
                        <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                          <input type='number' className=' rounded-md w-full pl-2' />
                          <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>원</span>
                        </div>
                      </div>
                      <div className='flex flex-row items-center justify-between gap-1 xl:flex-nowrap'>
                        <label htmlFor=''>스포츠 프리매치 2폴 낙첨 포인트</label>
                        <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                          <input type='number' className=' rounded-md w-full pl-2' />
                          <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>원</span>
                        </div>
                      </div>
                      <div className='flex flex-row items-center justify-between gap-1 xl:flex-nowrap'>
                        <label htmlFor=''>스포츠 프리매치 3폴 낙첨 포인트</label>
                        <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                          <input type='number' className=' rounded-md w-full pl-2' />
                          <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>원</span>
                        </div>
                      </div>
                      <div className='flex flex-row items-center justify-between gap-1 xl:flex-nowrap'>
                        <label htmlFor=''>스포츠 프리매치 4폴 낙첨 포인트</label>
                        <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                          <input type='number' className=' rounded-md w-full pl-2' />
                          <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>원</span>
                        </div>
                      </div>
                      <div className='flex flex-row items-center justify-between gap-1 xl:flex-nowrap'>
                        <label htmlFor=''>스포츠 프리매치 다폴 낙첨 포인트</label>
                        <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                          <input type='number' className=' rounded-md w-full pl-2' />
                          <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>원</span>
                        </div>
                      </div>
                      <div className='flex flex-row items-center justify-between gap-1 xl:flex-nowrap'>
                        <label htmlFor=''>스포츠 프리매치 전체 낙첨 포인트</label>
                        <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                          <input type='number' className=' rounded-md w-full pl-2' />
                          <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>원</span>
                        </div>
                      </div>
                      <div className='flex flex-row items-center justify-between gap-1 xl:flex-nowrap'>
                        <label htmlFor=''>스포츠 낙첨포인트 최대금액(1일)</label>
                        <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                          <input type='number' className=' rounded-md w-full pl-2' />
                          <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>원</span>
                        </div>
                      </div>
                      <div className='flex flex-row items-center justify-between gap-1 xl:flex-nowrap'>
                        <label htmlFor=''>가상게임 단폴 낙첨 포인트</label>
                        <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                          <input type='number' className=' rounded-md w-full pl-2' />
                          <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>원</span>
                        </div>
                      </div>
                      <div className='flex flex-row items-center justify-between gap-1 xl:flex-nowrap'>
                        <label htmlFor=''>가상게임 다폴 낙첨 포인트</label>
                        <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                          <input type='number' className=' rounded-md w-full pl-2' />
                          <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>원</span>
                        </div>
                      </div>
                      <div className='flex flex-row items-center justify-between gap-1 xl:flex-nowrap'>
                        <label htmlFor=''>가상게임 전체 낙첨 포인트</label>
                        <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                          <input type='number' className=' rounded-md w-full pl-2' />
                          <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>원</span>
                        </div>
                      </div>
                      <div className='px-2 py-2 bg-red-200 text-red-500'>
                        * 각 레벨에 해당하는 값을 설정하지 않을 경우 0을 기본으로 처리됩니다.
                        * [당일 매충보너스제한(출금후)] 옵션이 설정되면 [매충보너스제한(출금후)] 옵션은 무시됩니다.
                        * [입출금 금액단위] 옵션을 설정하지 않으면 금액 수동입력 가능합니다.
                      </div>
                  </form>
                </Grid>
                <Grid xl={12} lg={12} md={12} sm={12}>
                    <div className='py-2 px-2 bg-sky-600 text-whit w-full'>
                      1레벨 게임사용 설정
                    </div>
                    <form className='flex text-sm xl:text-xs flex-col items-start justify-start gap-4 shadow-md px-3 py-2'>
                        <ul className='flex flex-row items-center justify-start flex-wrap xl:flex-nowrap'>
                          <li className={`px-3 py-1.5 cursor-pointer bg-sky-700 text-white active:bg-gray-200 `}>라이브</li>
                          <li className={`px-3 py-1.5 cursor-pointer bg-sky-700 text-white active:bg-gray-200 `}>슬롯</li>
                          <li className={`px-3 py-1.5 cursor-pointer bg-sky-700 text-white active:bg-gray-200 `}>미니</li>
                          <li className={`px-3 py-1.5 cursor-pointer bg-sky-700 text-white active:bg-gray-200 `}>스포츠</li>
                          <li className={`px-3 py-1.5 cursor-pointer bg-sky-700 text-white active:bg-gray-200 `}>가상게임</li>
                          <li className={`px-3 py-1.5 cursor-pointer bg-sky-700 text-white active:bg-gray-200 `}>로투스</li>
                          <li className={`px-3 py-1.5 cursor-pointer bg-sky-700 text-white active:bg-gray-200 `}>MGM</li>
                          <li className={`px-3 py-1.5 cursor-pointer bg-sky-700 text-white active:bg-gray-200 `}>터치</li>
                        </ul>
                        <div className='flex flex-row items-center justify-center gap-2 w-full'>
                          <button className='px-3 py-1.5 text-white bg-sky-700 border border-spacing-2 rounded-md'>미니게임 상세</button>
                          <button className='px-3 py-1.5 text-white bg-sky-700 border border-spacing-2 rounded-md'>미니게임 상세</button>
                        </div>
                        <div className='flex flex-row items-center justify-center gap-2 w-full'>
                          <button className='px-3 py-1.5 text-white bg-sky-700 border border-spacing-2 rounded-md'>변경</button>
                          <button className='px-3 py-1.5 text-white bg-sky-700 border border-spacing-2 rounded-md'>전체 레벨 일괄적용</button>
                        </div>
                        <div className='px-2 py-2 bg-red-200 text-red-500'>
                          * 각 레벨에 해당하는 값을 설정하지 않을 경우 0을 기본으로 처리됩니다.
                          * [당일 매충보너스제한(출금후)] 옵션이 설정되면 [매충보너스제한(출금후)] 옵션은 무시됩니다.
                          * [입출금 금액단위] 옵션을 설정하지 않으면 금액 수동입력 가능합니다.
                        </div>
                    </form>
                </Grid>
                <Grid xl={12} lg={12} md={12} sm={12}>
                  <div className='py-2 px-2 bg-sky-600 text-white w-full'>
                    1레벨 추천인혜택 설정
                    </div>
                    <form className='flex text-sm xl:text-xs flex-col items-start justify-start gap-4 shadow-md px-3 py-2'>
                      <div className='flex flex-row items-center justify-between gap-1 xl:flex-nowrap'>
                        <label htmlFor=''>추천인혜택(미니)</label>
                        <div className='w-32 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                          <select className='w-full py-2 rounded-md'>
                            <option>사용안함</option>
                            <option>베팅금%</option>
                            <option>낙첨금%</option>
                          </select>
                        </div>
                        <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                          <input type='number' className=' rounded-md w-full py-2 pl-2' />
                          <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>%</span>
                        </div>
                      </div>
                      <div className='flex flex-row items-center justify-between gap-1 xl:flex-nowrap'>
                        <label htmlFor=''>추천인혜택(가상)</label>
                        <div className='w-32 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                          <select className='w-full py-2 rounded-md'>
                            <option>사용안함</option>
                            <option>베팅금%</option>
                            <option>낙첨금%</option>
                          </select>
                        </div>
                        <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                          <input type='number' className=' rounded-md w-full py-2 pl-2' />
                          <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>%</span>
                        </div>
                      </div>
                      <div className='flex flex-row items-center justify-between gap-1 xl:flex-nowrap'>
                        <label htmlFor=''>추천인혜택(스포츠 단폴)</label>
                        <div className='w-32 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                          <select className='w-full py-2 rounded-md'>
                            <option>사용안함</option>
                            <option>베팅금%</option>
                            <option>낙첨금%</option>
                          </select>
                        </div>
                        <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                          <input type='number' className=' rounded-md w-full py-2 pl-2' />
                          <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>%</span>
                        </div>
                      </div>
                      <div className='flex flex-row items-center justify-between gap-1 xl:flex-nowrap'>
                        <label htmlFor=''>추천인혜택(스포츠 2폴)</label>
                        <div className='w-32 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                          <select className='w-full py-2 rounded-md'>
                            <option>사용안함</option>
                            <option>베팅금%</option>
                            <option>낙첨금%</option>
                          </select>
                        </div>
                        <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                          <input type='number' className=' rounded-md w-full py-2 pl-2' />
                          <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>%</span>
                        </div>
                      </div>
                      <div className='flex flex-row items-center justify-between gap-1 xl:flex-nowrap'>
                        <label htmlFor=''>추천인혜택(스포츠 3폴)</label>
                        <div className='w-32 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                          <select className='w-full py-2 rounded-md'>
                            <option>사용안함</option>
                            <option>베팅금%</option>
                            <option>낙첨금%</option>
                          </select>
                        </div>
                        <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                          <input type='number' className=' rounded-md w-full py-2 pl-2' />
                          <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>%</span>
                        </div>
                      </div>
                      <div className='flex flex-row items-center justify-between gap-1 xl:flex-nowrap'>
                        <label htmlFor=''>추천인혜택(스포츠 4폴)</label>
                        <div className='w-32 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                          <select className='w-full py-2 rounded-md'>
                            <option>사용안함</option>
                            <option>베팅금%</option>
                            <option>낙첨금%</option>
                          </select>
                        </div>
                        <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                          <input type='number' className=' rounded-md w-full py-2 pl-2' />
                          <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>%</span>
                        </div>
                      </div>
                      <div className='flex flex-row items-center justify-between gap-1 xl:flex-nowrap'>
                        <label htmlFor=''>추천인혜택(스포츠 다폴)</label>
                        <div className='w-32 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                          <select className='w-full py-2 rounded-md'>
                            <option>사용안함</option>
                            <option>베팅금%</option>
                            <option>낙첨금%</option>
                          </select>
                        </div>
                        <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                          <input type='number' className=' rounded-md w-full py-2 pl-2' />
                          <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>%</span>
                        </div>
                      </div>
                      <div className='flex flex-row items-center justify-center gap-2 w-full'>
                          <button className='px-3 py-1.5 text-white bg-sky-700 border border-spacing-2 rounded-md'>변경</button>
                          <button className='px-3 py-1.5 text-white bg-sky-700 border border-spacing-2 rounded-md'>전체 레벨 일괄적용</button>
                      </div>
                        <div className='px-2 py-2 bg-red-200 text-red-500'>
                          * 각 레벨에 해당하는 값을 설정하지 않을 경우 0을 기본으로 처리됩니다.
                          * [당일 매충보너스제한(출금후)] 옵션이 설정되면 [매충보너스제한(출금후)] 옵션은 무시됩니다.
                          * [입출금 금액단위] 옵션을 설정하지 않으면 금액 수동입력 가능합니다.
                        </div>
                    </form>
                </Grid>
              </Grid>
              <Grid container spacing={1} xl={8} lg={6} md={12} sm={12}>
                <Grid xl={6} lg={12} md={12}>
                  <div className='py-2 px-2 bg-sky-600 text-white w-full'>
                  2레벨 페이백 설정
                  </div>
                  <form className='flex text-sm xl:text-xs flex-col items-start justify-start gap-4 shadow-md px-3 py-2'>
                      <div className='flex flex-row items-center justify-between gap-2 xl:flex-nowrap'>
                          <label htmlFor=''>지급주기</label>
                          <select  className=' w-80 py-2 border border-spacing-2 rounded-md' onChange={(value) => handleOnChagng(value) }>
                            <option value={'disposable'}>월별</option> 
                            <option value={'by_week'}>1회용</option> 		
                            <option value={'monthly'}>일별</option>
                            <option value={'value'}>월별</option>
                          </select>
                      </div>
                      <div className='flex flex-col gap-1 justify-center items-center w-full'>
                        { durationValue && durationValue === 'disposable'?
                          Desposable() :
                          durationValue && durationValue === 'by_week'?
                          ByweeK() :
                          durationValue && durationValue === 'monthly'?
                          Mondthly(): ''
                        }
                      </div>
                      <div className='flex flex-row items-center justify-between gap-3 mt-3'>
                        <span>게임별 적용여부</span>
                          <ul className='flex flex-row items-center justify-start flex-wrap gap-y-1 w-60'>
                            <li className='px-2 py-1 bg-blue-600 text-white cursor-pointer'>
                            라이브
                            </li>
                            <li className='px-2 py-1 bg-blue-600 text-white cursor-pointer'>
                              슬롯
                            </li>
                            <li className='px-2 py-1 bg-blue-600 text-white cursor-pointer'>
                              미니
                            </li>
                            <li className='px-2 py-1 bg-blue-600 text-white cursor-pointer'>
                              스포츠
                            </li>
                            <li className='px-2 py-1 bg-blue-600 text-white cursor-pointer'>
                              가상게임
                            </li>
                            <li className='px-2 py-1 bg-blue-600 text-white cursor-pointer'>
                              로투스
                            </li>
                            <li className='px-2 py-1 bg-blue-600 text-white cursor-pointer'>
                              MGM
                            </li>
                            <li className='px-2 py-1 bg-blue-600 text-white cursor-pointer'>
                              터치
                            </li>
                          </ul>
                      </div>
                      <div>
                        <label>지급방식</label>
                        <select>
                          <option>자동</option>
                          <option>수동</option>
                        </select>
                      </div>
                      <div>
                        <label>지급공식</label>
                        <select>
                          <option>(베-당-포인트전환)*요율%</option>
                          <option>(입-출)*요율%</option>
                          <option>	(입-포인트전환)*요율%</option>
                          <option>	(입-포인트전환)*요율%</option>
                          <option>	(입-출-보유머니)*요율%</option>
                        </select>
                      </div>
                      <div className='flex flex-row items-center justify-between gap-1 xl:flex-nowrap'>
                          <label htmlFor=''>x일 이상 입금시 지급</label>
                          <SwitchButton onClick={() => handleClick('If_it_is_a_negative_amount_it_is_treated_as', 0)} switchState={switchState['If_it_is_a__negative_amount_it_is_treated_as']} />
                      </div>
                      <div className='flex flex-row items-center justify-between gap-1 xl:flex-nowrap'>
                          <label htmlFor=''>총판에게도 지급</label>
                          <SwitchButton onClick={() => handleClick('also_paid_to_distributors', 1)} switchState={switchState['also_paid_to_distributors']} />
                      </div>
                      <div className='flex flex-row items-center justify-between gap-1 xl:flex-nowrap'>
                          <label htmlFor=''>최대지급금액</label>
                          <div className='w-60 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                            <input type='number' className=' rounded-md w-full pl-2 py-1' />
                            <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>원</span>
                          </div>
                      </div>
                      <div className='flex flex-row items-center justify-between gap-1 xl:flex-nowrap'>
                          <label htmlFor=''>x회 이상 입금시 지급</label>
                          <div className='w-60 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                            <input type='number' className=' rounded-md w-full pl-2 py-1' />
                            <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>원</span>
                          </div>
                      </div>
                      <div className='flex flex-row items-center justify-between gap-1 xl:flex-nowrap'>
                          <label htmlFor=''>x일 이상 입금시 지급</label>
                          <div className='w-60 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                            <input type='number' className=' rounded-md w-full pl-2 py-1' />
                            <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>원</span>
                          </div>
                      </div>
                      <div className='px-2 py-2 bg-red-200 text-red-500'>
                        * 페이백은 기준 시간내 총판이 아닌 회원들의 베팅금 통계에 맞추어 지급됩니다.
                        * 페이백포인트 지급에서 누락을 없애기 위해 베팅금통계는 다른 페이지들에서처럼
                        베팅시간 기준이 아니라 등록시간 기준으로 계산됩니다.
                      </div>
                  </form>
                </Grid>
                <Grid xl={6} lg={12} md={12}>
                  <div className='py-2 px-2 bg-sky-600 text-white w-full'>
                  2레벨 페이백 설정
                  </div>
                  <form className='flex text-sm xl:text-xs flex-col items-start justify-start gap-4 shadow-md px-3 py-2'>
                      <div className='flex flex-row justify-start items-center w-full gap-3'>
                        <label>돌발보너스 지급후 기타 충전보너스 제한</label>
                        <SwitchButton onClick={() => handleClick(
                          'restrictions_on_other_recharge_bonuses_after_payment_of_sudden_bonus', 1
                          )} switchState={switchState['restrictions_on_other_recharge_bonuses_after_payment_of_sudden_bonus']} />
                          <button className='px-2 py-1.5 bg-sky-600 rounded-md text-white'>돌발보너스 추가</button>
                      </div>
                      <div className='w-full'>
                        <table className='w-full border border-spacing-2 py-200'>
                          <thead>
                            <tr>
                              <th className='py-2 px-1 border border-b-2 '>번호</th>
                              <th className='py-2 px-1 border border-b-2 '>시간구간</th>
                              <th className='py-2 px-1 border border-b-2 '>돌발보너스%</th>
                              <th className='py-2 px-1 border border-b-2 '>지급여부</th>
                              <th className='py-2 px-1 border border-b-2 '>-</th>
                            </tr>
                          </thead>
                            <tbody>
                              <tr className='text-center'>
                                <td className='py-2 px-1 border border-spacing-2'>1</td>
                                <td className='py-2 px-1 border border-spacing-2'>01:00 - 23:59</td>
                                <td className='py-2 px-1 border border-spacing-2'>15</td>
                                <td className='py-2 px-1 border border-spacing-2'>
                                <SwitchButton onClick={() => 
                                  handleClick(
                                  'payment_status', 1
                                  )} switchState={switchState['payment_status']} />
                                </td>
                                <td>
                                  <button className='px-2 py-1 text-white bg-sky-600'>
                                    변경 
                                  </button>
                                  <button className='px-2 py-1 text-white bg-red-500'>
                                  삭제
                                  </button>
                                </td>
                              </tr>
                              
                            </tbody>
                        </table>
                      </div>
                      <div className='w-full flex flex-col items-center justify-center'>
                        <button className='w-40 lg:w-1/2 bg-sky-600 text-white py-2'>전체 레벨 일괄적용</button>
                      </div>
                  </form>
                </Grid>
                <Grid xl={8} lg={12} md={12} sm={12}>
                  <div className='py-2 px-2 bg-sky-600 text-white w-full'>
                  1레벨 충전보너스선택 설정
                  </div>
                  <form className='flex text-sm xl:text-xs flex-col items-start justify-start gap-4 shadow-md px-3 py-2'>
                      <div className='flex flex-row justify-start items-center w-full gap-3'>
                        <label>충전보너스선택 사용</label>
                         <SwitchButton onClick={() => handleClick(
                          'restrictions_on_other_recharge_bonuses_after_payment_of_sudden_bonus', 1
                          )} switchState={switchState['restrictions_on_other_recharge_bonuses_after_payment_of_sudden_bonus']} />
                        <label >보너스지급 형태 갯수</label>
                        <div className='flex flex-row items-center justify-start gap-2'>
                          <input type='number' className='py-1 px-2 border border-spacing-2 rounded-md' />
                          <button type='button' className='px-2 py-1.5 bg-sky-600 rounded-md text-white'>변경</button>
                        </div>
                      </div>
                      <div className='w-full'>
                        <table className='w-full border border-spacing-2 py-200'>
                          <thead>
                            <tr>
                              <th className='py-2 px-1 border border-b-2 '>메모</th>
                              <th className='py-2 px-1 border border-b-2 '>보너스지급방식</th>
                              <th className='py-2 px-1 border border-b-2 '>-</th>
                            </tr>
                          </thead>
                            <tbody>
                              <tr className='text-center'>
                                <td className='border border-spacing-2'>
                                 <input type='text' className='w-full py-1 px-2 border border-spacing-2 rounded-md' />
                                </td>
                                <td className='border border-spacing-2'>
                                  <select>
                                    <option>미지급</option>
                                    <option>지급 1</option>
                                    <option>지급 2</option>
                                    <option>지급 3</option>
                                  </select>
                                </td>
                                <td className='border border-spacing-2'>
                                  <button className='px-2 py-1 text-white bg-sky-600'>
                                    변경 
                                  </button>
                                  <button className='px-2 py-1 text-white bg-red-500'>
                                  삭제
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                        </table>
                      </div>
                      <div className='w-full flex flex-col items-center justify-center'>
                        <button className='w-40 lg:w-1/2 bg-sky-600 text-white py-2'>전체 레벨 일괄적용</button>
                      </div>
                  </form>
                </Grid>
                <Grid container spacing={1} xl={12} lg={12} md={12} sm={12}>
                  <Grid xl={4} lg={6} md={6} sm={6}>
                    <div className='py-2 px-2 bg-sky-600 text-white w-full'>
                      1레벨 충전보너스선택 설정
                      </div>
                      <form className='flex text-sm xl:text-xs flex-col items-start justify-start gap-4 shadow-md px-3 py-2'>
                        <div className='flex flex-row items-center justify-around gap-1 xl:flex-nowrap w-full'>
                          <label htmlFor=''>첫충 보너스(주중)</label>
                          <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                            <input type='number' className=' rounded-md w-full pl-2  py-2' />
                            <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>%</span>
                          </div>
                        </div>
                        <div className='flex flex-row items-center justify-around gap-1 xl:flex-nowrap w-full'>
                          <label htmlFor=''>첫충 보너스(주말)</label>
                          <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                            <input type='number' className=' rounded-md w-full pl-2  py-2' />
                            <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>%</span>
                          </div>
                        </div>
                        <div className='flex flex-row items-center justify-around gap-1 xl:flex-nowrap w-full'>
                          <label htmlFor=''>매충 보너스(주중)</label>
                          <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                            <input type='number' className=' rounded-md w-full pl-2  py-2' />
                            <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>%</span>
                          </div>
                        </div>
                        <div className='flex flex-row items-center justify-around gap-1 xl:flex-nowrap w-full'>
                          <label htmlFor=''>매충 보너스(주말)</label>
                          <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                            <input type='number' className=' rounded-md w-full pl-2  py-2' />
                            <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>%</span>
                          </div>
                        </div>
                        <div className='flex flex-row items-center justify-around gap-1 xl:flex-nowrap w-full'>
                          <label htmlFor=''>가입 첫충 보너스</label>
                          <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                            <input type='number' className=' rounded-md w-full pl-2  py-2' />
                            <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>%</span>
                          </div>
                        </div>
                        <div className='flex flex-row items-center justify-around gap-1 xl:flex-nowrap w-full'>
                          <label htmlFor=''>최대 보너스 머니(1회)</label>
                          <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                            <input type='number' className=' rounded-md w-full pl-2  py-2' />
                            <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>P</span>
                          </div>
                        </div>
                        <div className='flex flex-row items-center justify-around gap-1 xl:flex-nowrap w-full'>
                          <label htmlFor=''>최대 보너스 머니(1일)</label>
                          <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                            <input type='number' className=' rounded-md w-full pl-2  py-2' />
                            <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>P</span>
                          </div>
                        </div>
                        <div className='flex flex-row items-center justify-around gap-1 xl:flex-nowrap w-full'>
                          <label htmlFor=''>(입금플러스)가입첫충 우선적용</label>
                            <SwitchButton onClick={() => handleClick(
                            'restrictions_on_other_recharge_bonuses_after_payment_of_sudden_bonus', 1
                            )} switchState={switchState['restrictions_on_other_recharge_bonuses_after_payment_of_sudden_bonus']} />
                        </div>
                        <div className='flex flex-row items-center justify-around gap-1 xl:flex-nowrap w-full'>
                          <label htmlFor=''>(입금플러스)매충 우선적용</label>
                            <SwitchButton onClick={() => handleClick(
                            'restrictions_on_other_recharge_bonuses_after_payment_of_sudden_bonus', 1
                            )} switchState={switchState['restrictions_on_other_recharge_bonuses_after_payment_of_sudden_bonus']} />
                        </div>
                        <div className='flex flex-row items-center justify-around gap-1 xl:flex-nowrap w-full'>
                          <label htmlFor=''>당일 첫충보너스제한(출금후)</label>
                            <SwitchButton onClick={() => handleClick(
                            'restrictions_on_other_recharge_bonuses_after_payment_of_sudden_bonus', 1
                            )} switchState={switchState['restrictions_on_other_recharge_bonuses_after_payment_of_sudden_bonus']} />
                        </div>
                        <div className='flex flex-row items-center justify-around gap-1 xl:flex-nowrap w-full'>
                          <label htmlFor=''>당일 매충보너스제한(출금후)</label>
                            <SwitchButton onClick={() => handleClick(
                            'restrictions_on_other_recharge_bonuses_after_payment_of_sudden_bonus', 1
                            )} switchState={switchState['restrictions_on_other_recharge_bonuses_after_payment_of_sudden_bonus']} />
                        </div>
                        <div className='flex flex-row items-center justify-around gap-1 xl:flex-nowrap w-full'>
                          <label htmlFor=''>매충보너스제한(출금후)</label>
                          <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                            <input type='number' className=' rounded-md w-full pl-2  py-2' />
                            <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>분</span>
                          </div>
                        </div>
                        <div className='flex flex-row items-center justify-around gap-1 xl:flex-nowrap w-full'>
                          <label htmlFor=''>당일 매충보너스%(출금후)</label>
                          <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                            <input type='number' className=' rounded-md w-full pl-2  py-2' />
                            <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>%</span>
                          </div>
                        </div>
                        <div className='flex flex-row items-center justify-around gap-1 xl:flex-nowrap w-full'>
                          <label htmlFor=''>당일 매충보너스제한(출금후)</label>
                            <SwitchButton onClick={() => handleClick(
                            'restrictions_on_other_recharge_bonuses_after_payment_of_sudden_bonus', 1
                            )} switchState={switchState['restrictions_on_other_recharge_bonuses_after_payment_of_sudden_bonus']} />
                        </div>
                        <div className='flex flex-row items-center justify-around gap-1 xl:flex-nowrap w-full'>
                          <label htmlFor=''>돌발보너스 일일 최대 지급횟수</label>
                          <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                            <input type='number' className=' rounded-md w-full pl-2  py-2' />
                            <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>회</span>
                          </div>
                        </div>
                        <div className='flex flex-row items-center justify-around gap-1 xl:flex-nowrap w-full'>
                          <label htmlFor=''>돌발보너스 시간당 최대 지급횟수</label>
                          <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                            <input type='number' className=' rounded-md w-full pl-2  py-2' />
                            <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>회</span>
                          </div>
                        </div>
                        <div className='w-full'>
                          <table className='w-full border border-spacing-2 py-200'>
                              <tbody>
                                <tr className='text-center'>
                                  <td className='border border-spacing-2 '>
                                    <div className='flex flex-row items-center justify-start whitespace-nowrap'>
                                      (<input type='text' className='w-full py-1 border border-spacing-2 rounded-md' />) 
                                      + 
                                      (<input type='text' className='w-full py-1 border border-spacing-2 rounded-md' />) 
                                    </div>
                                  </td>
                                  <td className='border border-spacing-2 flex '>
                                    <button className='px-2 py-1 text-white bg-sky-600'>
                                      변경 
                                    </button>
                                    <button className='px-2 py-1 text-white bg-red-500'>
                                    삭제
                                    </button>
                                  </td>
                                </tr>
                                <tr className='text-center'>
                                  <td className='border border-spacing-2 flex flex-row items-center justify-start gap-0 flex-nowrap whitespace-nowrap'>
                                    (<input type='text' className='w-full py-1 border border-spacing-2 rounded-md' />) 
                                    + 
                                    (<input type='text' className='w-full py-1 border border-spacing-2 rounded-md' />) 
                                  </td>
                                  <td className='border border-spacing-2'>
                                    <button className='px-2 py-1 text-white bg-sky-600'>
                                      변경 
                                    </button>
                                  </td>
                                </tr>
                              </tbody>
                          </table>
                        </div>
                        <div className='w-full flex flex-row items-center justify-center gap-2'>
                          <button className='py-2 px-3 text-white bg-sky-600 rounded-md '>변경</button>
                          <button className='py-2 px-3 text-white bg-sky-600 rounded-md '>전체 레벨 일괄적용</button>
                        </div>
                      </form>
                  </Grid>
                  <Grid xl={4} lg={6} md={6} sm={6}>
                    <div className='py-2 px-2 bg-sky-600 text-white w-full'>
                      1레벨 충전보너스선택 설정
                      </div>
                      <form className='flex text-sm xl:text-xs flex-col items-start justify-start gap-4 shadow-md px-3 py-2'>
                        <div className='flex flex-row items-center justify-around gap-1 xl:flex-nowrap w-full'>
                          <label htmlFor=''>첫충 보너스(주중)</label>
                          <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                            <input type='number' className=' rounded-md w-full pl-2  py-2' />
                            <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>%</span>
                          </div>
                        </div>
                        <div className='flex flex-row items-center justify-around gap-1 xl:flex-nowrap w-full'>
                          <label htmlFor=''>첫충 보너스(주말)</label>
                          <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                            <input type='number' className=' rounded-md w-full pl-2  py-2' />
                            <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>%</span>
                          </div>
                        </div>
                        <div className='flex flex-row items-center justify-around gap-1 xl:flex-nowrap w-full'>
                          <label htmlFor=''>매충 보너스(주중)</label>
                          <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                            <input type='number' className=' rounded-md w-full pl-2  py-2' />
                            <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>%</span>
                          </div>
                        </div>
                        <div className='flex flex-row items-center justify-around gap-1 xl:flex-nowrap w-full'>
                          <label htmlFor=''>매충 보너스(주말)</label>
                          <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                            <input type='number' className=' rounded-md w-full pl-2  py-2' />
                            <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>%</span>
                          </div>
                        </div>
                        <div className='flex flex-row items-center justify-around gap-1 xl:flex-nowrap w-full'>
                          <label htmlFor=''>가입 첫충 보너스</label>
                          <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                            <input type='number' className=' rounded-md w-full pl-2  py-2' />
                            <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>%</span>
                          </div>
                        </div>
                        <div className='flex flex-row items-center justify-around gap-1 xl:flex-nowrap w-full'>
                          <label htmlFor=''>최대 보너스 머니(1회)</label>
                          <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                            <input type='number' className=' rounded-md w-full pl-2  py-2' />
                            <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>P</span>
                          </div>
                        </div>
                        <div className='flex flex-row items-center justify-around gap-1 xl:flex-nowrap w-full'>
                          <label htmlFor=''>최대 보너스 머니(1일)</label>
                          <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                            <input type='number' className=' rounded-md w-full pl-2  py-2' />
                            <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>P</span>
                          </div>
                        </div>
                        <div className='flex flex-row items-center justify-around gap-1 xl:flex-nowrap w-full'>
                          <label htmlFor=''>(입금플러스)가입첫충 우선적용</label>
                            <SwitchButton onClick={() => handleClick(
                            'restrictions_on_other_recharge_bonuses_after_payment_of_sudden_bonus', 1
                            )} switchState={switchState['restrictions_on_other_recharge_bonuses_after_payment_of_sudden_bonus']} />
                        </div>
                        <div className='flex flex-row items-center justify-around gap-1 xl:flex-nowrap w-full'>
                          <label htmlFor=''>(입금플러스)매충 우선적용</label>
                            <SwitchButton onClick={() => handleClick(
                            'restrictions_on_other_recharge_bonuses_after_payment_of_sudden_bonus', 1
                            )} switchState={switchState['restrictions_on_other_recharge_bonuses_after_payment_of_sudden_bonus']} />
                        </div>
                        <div className='flex flex-row items-center justify-around gap-1 xl:flex-nowrap w-full'>
                          <label htmlFor=''>당일 첫충보너스제한(출금후)</label>
                            <SwitchButton onClick={() => handleClick(
                            'restrictions_on_other_recharge_bonuses_after_payment_of_sudden_bonus', 1
                            )} switchState={switchState['restrictions_on_other_recharge_bonuses_after_payment_of_sudden_bonus']} />
                        </div>
                        <div className='flex flex-row items-center justify-around gap-1 xl:flex-nowrap w-full'>
                          <label htmlFor=''>당일 매충보너스제한(출금후)</label>
                            <SwitchButton onClick={() => handleClick(
                            'restrictions_on_other_recharge_bonuses_after_payment_of_sudden_bonus', 1
                            )} switchState={switchState['restrictions_on_other_recharge_bonuses_after_payment_of_sudden_bonus']} />
                        </div>
                        <div className='flex flex-row items-center justify-around gap-1 xl:flex-nowrap w-full'>
                          <label htmlFor=''>매충보너스제한(출금후)</label>
                          <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                            <input type='number' className=' rounded-md w-full pl-2  py-2' />
                            <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>분</span>
                          </div>
                        </div>
                        <div className='flex flex-row items-center justify-around gap-1 xl:flex-nowrap w-full'>
                          <label htmlFor=''>당일 매충보너스%(출금후)</label>
                          <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                            <input type='number' className=' rounded-md w-full pl-2  py-2' />
                            <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>%</span>
                          </div>
                        </div>
                        <div className='flex flex-row items-center justify-around gap-1 xl:flex-nowrap w-full'>
                          <label htmlFor=''>당일 매충보너스제한(출금후)</label>
                            <SwitchButton onClick={() => handleClick(
                            'restrictions_on_other_recharge_bonuses_after_payment_of_sudden_bonus', 1
                            )} switchState={switchState['restrictions_on_other_recharge_bonuses_after_payment_of_sudden_bonus']} />
                        </div>
                        <div className='flex flex-row items-center justify-around gap-1 xl:flex-nowrap w-full'>
                          <label htmlFor=''>돌발보너스 일일 최대 지급횟수</label>
                          <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                            <input type='number' className=' rounded-md w-full pl-2  py-2' />
                            <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>회</span>
                          </div>
                        </div>
                        <div className='flex flex-row items-center justify-around gap-1 xl:flex-nowrap w-full'>
                          <label htmlFor=''>돌발보너스 시간당 최대 지급횟수</label>
                          <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                            <input type='number' className=' rounded-md w-full pl-2  py-2' />
                            <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>회</span>
                          </div>
                        </div>
                        <div className='w-full'>
                          <table className='w-full border border-spacing-2 py-200'>
                              <tbody>
                                <tr className='text-center'>
                                  <td className='border border-spacing-2 '>
                                    <div className='flex flex-row items-center justify-start whitespace-nowrap'>
                                      (<input type='text' className='w-full py-1 border border-spacing-2 rounded-md' />) 
                                      + 
                                      (<input type='text' className='w-full py-1 border border-spacing-2 rounded-md' />) 
                                    </div>
                                  </td>
                                  <td className='border border-spacing-2 flex '>
                                    <button className='px-2 py-1 text-white bg-sky-600'>
                                      변경 
                                    </button>
                                    <button className='px-2 py-1 text-white bg-red-500'>
                                    삭제
                                    </button>
                                  </td>
                                </tr>
                                <tr className='text-center'>
                                  <td className='border border-spacing-2 flex flex-row items-center justify-start gap-0 flex-nowrap whitespace-nowrap'>
                                    (<input type='text' className='w-full py-1 border border-spacing-2 rounded-md' />) 
                                    + 
                                    (<input type='text' className='w-full py-1 border border-spacing-2 rounded-md' />) 
                                  </td>
                                  <td className='border border-spacing-2'>
                                    <button className='px-2 py-1 text-white bg-sky-600'>
                                      변경 
                                    </button>
                                  </td>
                                </tr>
                              </tbody>
                          </table>
                        </div>
                        <div className='w-full flex flex-row items-center justify-center gap-2'>
                          <button className='py-2 px-3 text-white bg-sky-600 rounded-md '>변경</button>
                          <button className='py-2 px-3 text-white bg-sky-600 rounded-md '>전체 레벨 일괄적용</button>
                        </div>
                      </form>
                  </Grid>
                  <Grid xl={4} lg={6} md={6} sm={6}>
                    <div className='py-2 px-2 bg-sky-600 text-white w-full'>
                      1레벨 충전보너스선택 설정
                      </div>
                      <form className='flex text-sm xl:text-xs flex-col items-start justify-start gap-4 shadow-md px-3 py-2'>
                        <div className='flex flex-row items-center justify-around gap-1 xl:flex-nowrap w-full'>
                          <label htmlFor=''>첫충 보너스(주중)</label>
                          <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                            <input type='number' className=' rounded-md w-full pl-2  py-2' />
                            <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>%</span>
                          </div>
                        </div>
                        <div className='flex flex-row items-center justify-around gap-1 xl:flex-nowrap w-full'>
                          <label htmlFor=''>첫충 보너스(주말)</label>
                          <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                            <input type='number' className=' rounded-md w-full pl-2  py-2' />
                            <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>%</span>
                          </div>
                        </div>
                        <div className='flex flex-row items-center justify-around gap-1 xl:flex-nowrap w-full'>
                          <label htmlFor=''>매충 보너스(주중)</label>
                          <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                            <input type='number' className=' rounded-md w-full pl-2  py-2' />
                            <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>%</span>
                          </div>
                        </div>
                        <div className='flex flex-row items-center justify-around gap-1 xl:flex-nowrap w-full'>
                          <label htmlFor=''>매충 보너스(주말)</label>
                          <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                            <input type='number' className=' rounded-md w-full pl-2  py-2' />
                            <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>%</span>
                          </div>
                        </div>
                        <div className='flex flex-row items-center justify-around gap-1 xl:flex-nowrap w-full'>
                          <label htmlFor=''>가입 첫충 보너스</label>
                          <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                            <input type='number' className=' rounded-md w-full pl-2  py-2' />
                            <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>%</span>
                          </div>
                        </div>
                        <div className='flex flex-row items-center justify-around gap-1 xl:flex-nowrap w-full'>
                          <label htmlFor=''>최대 보너스 머니(1회)</label>
                          <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                            <input type='number' className=' rounded-md w-full pl-2  py-2' />
                            <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>P</span>
                          </div>
                        </div>
                        <div className='flex flex-row items-center justify-around gap-1 xl:flex-nowrap w-full'>
                          <label htmlFor=''>최대 보너스 머니(1일)</label>
                          <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                            <input type='number' className=' rounded-md w-full pl-2  py-2' />
                            <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>P</span>
                          </div>
                        </div>
                        <div className='flex flex-row items-center justify-around gap-1 xl:flex-nowrap w-full'>
                          <label htmlFor=''>(입금플러스)가입첫충 우선적용</label>
                            <SwitchButton onClick={() => handleClick(
                            'restrictions_on_other_recharge_bonuses_after_payment_of_sudden_bonus', 1
                            )} switchState={switchState['restrictions_on_other_recharge_bonuses_after_payment_of_sudden_bonus']} />
                        </div>
                        <div className='flex flex-row items-center justify-around gap-1 xl:flex-nowrap w-full'>
                          <label htmlFor=''>(입금플러스)매충 우선적용</label>
                            <SwitchButton onClick={() => handleClick(
                            'restrictions_on_other_recharge_bonuses_after_payment_of_sudden_bonus', 1
                            )} switchState={switchState['restrictions_on_other_recharge_bonuses_after_payment_of_sudden_bonus']} />
                        </div>
                        <div className='flex flex-row items-center justify-around gap-1 xl:flex-nowrap w-full'>
                          <label htmlFor=''>당일 첫충보너스제한(출금후)</label>
                            <SwitchButton onClick={() => handleClick(
                            'restrictions_on_other_recharge_bonuses_after_payment_of_sudden_bonus', 1
                            )} switchState={switchState['restrictions_on_other_recharge_bonuses_after_payment_of_sudden_bonus']} />
                        </div>
                        <div className='flex flex-row items-center justify-around gap-1 xl:flex-nowrap w-full'>
                          <label htmlFor=''>당일 매충보너스제한(출금후)</label>
                            <SwitchButton onClick={() => handleClick(
                            'restrictions_on_other_recharge_bonuses_after_payment_of_sudden_bonus', 1
                            )} switchState={switchState['restrictions_on_other_recharge_bonuses_after_payment_of_sudden_bonus']} />
                        </div>
                        <div className='flex flex-row items-center justify-around gap-1 xl:flex-nowrap w-full'>
                          <label htmlFor=''>매충보너스제한(출금후)</label>
                          <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                            <input type='number' className=' rounded-md w-full pl-2  py-2' />
                            <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>분</span>
                          </div>
                        </div>
                        <div className='flex flex-row items-center justify-around gap-1 xl:flex-nowrap w-full'>
                          <label htmlFor=''>당일 매충보너스%(출금후)</label>
                          <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                            <input type='number' className=' rounded-md w-full pl-2  py-2' />
                            <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>%</span>
                          </div>
                        </div>
                        <div className='flex flex-row items-center justify-around gap-1 xl:flex-nowrap w-full'>
                          <label htmlFor=''>당일 매충보너스제한(출금후)</label>
                            <SwitchButton onClick={() => handleClick(
                            'restrictions_on_other_recharge_bonuses_after_payment_of_sudden_bonus', 1
                            )} switchState={switchState['restrictions_on_other_recharge_bonuses_after_payment_of_sudden_bonus']} />
                        </div>
                        <div className='flex flex-row items-center justify-around gap-1 xl:flex-nowrap w-full'>
                          <label htmlFor=''>돌발보너스 일일 최대 지급횟수</label>
                          <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                            <input type='number' className=' rounded-md w-full pl-2  py-2' />
                            <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>회</span>
                          </div>
                        </div>
                        <div className='flex flex-row items-center justify-around gap-1 xl:flex-nowrap w-full'>
                          <label htmlFor=''>돌발보너스 시간당 최대 지급횟수</label>
                          <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                            <input type='number' className=' rounded-md w-full pl-2  py-2' />
                            <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>회</span>
                          </div>
                        </div>
                        <div className='w-full'>
                          <table className='w-full border border-spacing-2 py-200'>
                              <tbody>
                                <tr className='text-center'>
                                  <td className='border border-spacing-2 '>
                                    <div className='flex flex-row items-center justify-start whitespace-nowrap'>
                                      (<input type='text' className='w-full py-1 border border-spacing-2 rounded-md' />) 
                                      + 
                                      (<input type='text' className='w-full py-1 border border-spacing-2 rounded-md' />) 
                                    </div>
                                  </td>
                                  <td className='border border-spacing-2 flex '>
                                    <button className='px-2 py-1 text-white bg-sky-600'>
                                      변경 
                                    </button>
                                    <button className='px-2 py-1 text-white bg-red-500'>
                                    삭제
                                    </button>
                                  </td>
                                </tr>
                                <tr className='text-center'>
                                  <td className='border border-spacing-2 flex flex-row items-center justify-start gap-0 flex-nowrap whitespace-nowrap'>
                                    (<input type='text' className='w-full py-1 border border-spacing-2 rounded-md' />) 
                                    + 
                                    (<input type='text' className='w-full py-1 border border-spacing-2 rounded-md' />) 
                                  </td>
                                  <td className='border border-spacing-2'>
                                    <button className='px-2 py-1 text-white bg-sky-600'>
                                      변경 
                                    </button>
                                  </td>
                                </tr>
                              </tbody>
                          </table>
                        </div>
                        <div className='w-full flex flex-row items-center justify-center gap-2'>
                          <button className='py-2 px-3 text-white bg-sky-600 rounded-md '>변경</button>
                          <button className='py-2 px-3 text-white bg-sky-600 rounded-md '>전체 레벨 일괄적용</button>
                        </div>
                      </form>
                  </Grid>
                </Grid>
              </Grid>
             </Grid>
          </CardContent>
      </Card>
    </Stack>
  );
}

const Desposable = () => {
  return (
    <>
      <div className='flex flex-row items-center justify-between gap-2 border border-spacing-2 border-gray-300 pl-3'>
        <label htmlFor='payment_cycle'>시작일시</label>
        <input type='date' className='px-2 py-1.5' />
      </div>
      <div className='flex flex-row items-center justify-between gap-2 border border-spacing-2 border-gray-300 pl-3'>
        <label htmlFor='start_date_and_time'>마감일시</label>
        <input type='date' className='px-2 py-1.5' />
      </div>
      <div className='flex flex-row items-center justify-between gap-2 border border-spacing-2 border-gray-300 pl-3'>
        <label htmlFor='payment_date_and_time'>지급일시</label>
        <input type='date' className='px-2 py-1.5' />
      </div>
    </>
  )
}

const ByweeK = () => {
  return <>
         <div className='flex flex-row items-center justify-between gap-2 border border-spacing-2 border-gray-300 pl-3'>
          <label htmlFor='select_week'>매주	</label>
          <select id='select_week' className='py-2 w-80'>
            <option value={'sunday'}>sunday</option>
            <option value={'monday'}>monday</option>
            <option value={'tueday'}>tueday</option>
            <option value={'wenesday'}>wenesday</option>
            <option value={'thursday'}>thursday</option>
            <option value={'friday'}>friday</option>
            <option value={'saturday'}>saturday</option>
          </select>
         </div>
        </>
}

const Mondthly = () => {
  return (
    <div className='flex flex-row items-center justify-start gap-3'>
      <label htmlFor=''>Monthly</label>
      <select className=' w-80 px-2 py-2  border border-spacing-2 border-gray-200 rounded-md'>
        { renderOptions() }
      </select>
    </div>
  )
  function renderOptions() {
    const options = [];
    for (let i = 0; i < 28; i++) {
      const days = i + 1;
      options.push(
        <option key={days} value={`${days}`}>
          {days <= 7
            ? `${days}일`
            : days > 7 && days < 10
            ? `${days}일`
            : days === 10
            ? `${days}일`
            : days > 10 && days < 14
            ? `${days}일`
            : days === 14
            ? `${days}일`
            : days > 14 && days < 21
            ? `${days}일`
            :`${days}일`}
        </option>
      );
    }
    return options;
  }
}

const glance = () => {

}