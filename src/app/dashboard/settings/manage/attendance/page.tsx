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
              <Grid xl={6} lg={6} md={12} sm={12}>
                  <div className='py-2 px-2 bg-sky-600 text-white w-full'>
                    1레벨 설정
                    </div>
                    <form className='flex text-sm xl:text-xs flex-col items-start justify-start gap-4 shadow-md px-3 py-2'>
                      <div className='flex flex-row items-center justify-between gap-1 xl:flex-nowrap'>
                        <label htmlFor=''>출석체크 사용</label>
                        <SwitchButton onClick={() => handleClick('use_attendance_check', 0)} 
                         switchState={switchState['use_attendance_check']} />
                      </div>
                      <div className='flex flex-row items-center justify-start gap-5 xl:flex-nowrap w-full'>
                        <label htmlFor=''>출석 보너스 방식</label>
                        <div className='w-32 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                          <select className='w-full py-2 rounded-md'>
                            <option>연속 출석 보너스</option>
                            <option>회차 출석 보너스</option>
                          </select>
                        </div>
                      </div>
                      <div className='flex flex-row items-center justify-start gap-5 xl:flex-nowrap w-full'>
                        <label htmlFor=''>출석 체크 자동/수동</label>
                        <div className='w-32 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                          <select className='w-full py-2 rounded-md'>
                            <option>자동 출석 체크</option>
                            <option>수동 출석 체크</option>
                          </select>
                        </div>
                      </div>
                      <div className='flex flex-row items-center justify-start gap-5 xl:flex-nowrap w-full'>
                        <label htmlFor=''>출석 머니판정 기준</label>
                        <div className='w-32 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                          <select className='w-full py-2 rounded-md'>
                            <option>일일 입금머니 총합으로 판정</option>
                            <option>1회 머니입금으로 판정</option>
                          </select>
                        </div>
                      </div>
                      <div className='flex flex-row items-center justify-start gap-5 xl:flex-nowrap w-full'>
                        <label htmlFor=''>월마다 출석 초기화</label>
                        <div className='w-32 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                          <select className='w-full py-2 rounded-md'>
                            <option>사용</option>
                            <option>사용안함</option>
                          </select>
                        </div>
                      </div>
                      <table className='w-full'>
                        <tbody>
                          <tr>
                            <td>
                              <label htmlFor=''>출석체크가능 금일충전금액</label>
                            </td>
                            <td>
                              <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                                <input type='number' className=' rounded-md w-full py-2 pl-2' />
                                <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>%</span>
                              </div>
                            </td>
                            <td>
                              <label htmlFor=''>보너스</label>
                            </td>
                            <td>
                              <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                                <input type='number' className=' rounded-md w-full py-2 pl-2' />
                                <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>P</span>
                              </div>
                            </td>
                            <td>
                              <label htmlFor=''>쿠폰</label>
                            </td>
                            <td>
                              <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                                <input type='number' className=' rounded-md w-full py-2 pl-2' />
                                <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>개</span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <label htmlFor=''>연속 출석미션 보너스 1</label>
                            </td>
                            <td>
                              <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                                <input type='number' className=' rounded-md w-full py-2 pl-2' />
                                <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>%</span>
                              </div>
                            </td>
                            <td>
                              <label htmlFor=''>보너스</label>
                            </td>
                            <td>
                              <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                                <input type='number' className=' rounded-md w-full py-2 pl-2' />
                                <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>P</span>
                              </div>
                            </td>
                            <td>
                              <label htmlFor=''>쿠폰</label>
                            </td>
                            <td>
                              <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                                <input type='number' className=' rounded-md w-full py-2 pl-2' />
                                <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>개</span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <label htmlFor=''>연속 출석미션 보너스 2</label>
                            </td>
                            <td>
                              <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                                <input type='number' className=' rounded-md w-full py-2 pl-2' />
                                <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>%</span>
                              </div>
                            </td>
                            <td>
                              <label htmlFor=''>보너스</label>
                            </td>
                            <td>
                              <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                                <input type='number' className=' rounded-md w-full py-2 pl-2' />
                                <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>P</span>
                              </div>
                            </td>
                            <td>
                              <label htmlFor=''>쿠폰</label>
                            </td>
                            <td>
                              <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                                <input type='number' className=' rounded-md w-full py-2 pl-2' />
                                <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>개</span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <label htmlFor=''>연속 출석미션 보너스 3</label>
                            </td>
                            <td>
                              <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                                <input type='number' className=' rounded-md w-full py-2 pl-2' />
                                <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>%</span>
                              </div>
                            </td>
                            <td>
                              <label htmlFor=''>보너스</label>
                            </td>
                            <td>
                              <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                                <input type='number' className=' rounded-md w-full py-2 pl-2' />
                                <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>P</span>
                              </div>
                            </td>
                            <td>
                              <label htmlFor=''>쿠폰</label>
                            </td>
                            <td>
                              <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                                <input type='number' className=' rounded-md w-full py-2 pl-2' />
                                <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>개</span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <label htmlFor=''>연속 출석미션 보너스 4</label>
                            </td>
                            <td>
                              <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                                <input type='number' className=' rounded-md w-full py-2 pl-2' />
                                <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>%</span>
                              </div>
                            </td>
                            <td>
                              <label htmlFor=''>보너스</label>
                            </td>
                            <td>
                              <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                                <input type='number' className=' rounded-md w-full py-2 pl-2' />
                                <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>P</span>
                              </div>
                            </td>
                            <td>
                              <label htmlFor=''>쿠폰</label>
                            </td>
                            <td>
                              <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                                <input type='number' className=' rounded-md w-full py-2 pl-2' />
                                <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>개</span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <label htmlFor=''>연속 출석미션 보너스 5</label>
                            </td>
                            <td>
                              <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                                <input type='number' className=' rounded-md w-full py-2 pl-2' />
                                <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>%</span>
                              </div>
                            </td>
                            <td>
                              <label htmlFor=''>보너스</label>
                            </td>
                            <td>
                              <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                                <input type='number' className=' rounded-md w-full py-2 pl-2' />
                                <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>P</span>
                              </div>
                            </td>
                            <td>
                              <label htmlFor=''>쿠폰</label>
                            </td>
                            <td>
                              <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                                <input type='number' className=' rounded-md w-full py-2 pl-2' />
                                <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>개</span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <label htmlFor=''>연속 출석미션 보너스 6</label>
                            </td>
                            <td>
                              <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                                <input type='number' className=' rounded-md w-full py-2 pl-2' />
                                <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>%</span>
                              </div>
                            </td>
                            <td>
                              <label htmlFor=''>보너스</label>
                            </td>
                            <td>
                              <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                                <input type='number' className=' rounded-md w-full py-2 pl-2' />
                                <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>P</span>
                              </div>
                            </td>
                            <td>
                              <label htmlFor=''>쿠폰</label>
                            </td>
                            <td>
                              <div className='w-20 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                                <input type='number' className=' rounded-md w-full py-2 pl-2' />
                                <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>개</span>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
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
              <Grid xl={6} lg={6} md={12} sm={12}>
                  <div className='py-2 px-2 bg-sky-600 text-white w-full'>
                    룰렛 구멍 설정 ( 1레벨 설정 )
                    </div>
                    <form className='flex text-sm xl:text-xs flex-col items-start justify-start gap-4 shadow-md px-3 py-2'>
                      <table className='w-full'>
                        <tbody>
                            {renderRigthSideSetting()}
                        </tbody>
                      </table>
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
          </CardContent>
      </Card>
    </Stack>
  );
}


const renderRigthSideSetting = () => {
  let rows = [];
    for(let row = 0; row < 12; row ++){
      rows.push(
        <tr>
          <td>
            <label htmlFor=''><b>{`구멍${row+1}:`}</b></label>
          </td>
          <td>
            <div className='w-32 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
              <select className='w-full py-2 rounded-md'>
                <option>보너스</option>
                <option>쿠폰</option>
              </select>
            </div>
          </td>
          <td>
            <div className='border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
              <input type='number' className=' rounded-md w-full py-2 pl-2' />
              <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>P</span>
            </div>
          </td>
          <td>
            <label htmlFor=''>출연횟수</label>
          </td>
          <td>
            <div className='border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
              <input type='number' className=' rounded-md w-full py-2 pl-2' />
              <span className='border border-spacing-2 border-y-0 border-r-0 px-2'>{Number(1.185) + Number((row+1/100))}%</span>
            </div>
          </td>
          <td>
            <button className='px-3 py-1.5 text-white bg-sky-700 border border-spacing-2 rounded-md'>변경</button>
          </td>
      </tr>
      );
    }
    return rows;
}
