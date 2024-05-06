'use client';
import * as React from 'react';
import { usePathname } from 'next/navigation';
import Grid from '@mui/material/Unstable_Grid2';
import { Card, CardContent, CardHeader,FormControl, FormLabel, MenuItem, Radio, RadioGroup, Select, TextField} from '@mui/material';
import { filterPathName } from '@/app/meta/metadata';
import { SelectChangeEvent } from '@mui/material/Select';
import { SwitchButton } from './switchButton';
import { Configsettings } from './settingData'
export default function Page(): React.JSX.Element {
  const [selectionSetting, setSelectionSetting] = React.useState<string>('Selection1')
  const [selectedSite, setSelectedsite] = React.useState<string[]>(['win'])
  const handleChange = (event: SelectChangeEvent) => {
    setSelectionSetting(event.target.value as string);
  };

  const handleSiteSelection = (sitName: string) => {
    // Check if sitName is already in selectedSite
    const isSiteSelected = selectedSite.includes(sitName);
    if (isSiteSelected) {
      // If already selected, filter it out
      const updatedSelectedSites = selectedSite.filter(site => site !== sitName);
      setSelectedsite(updatedSelectedSites);
    } else {
      // If not selected, add it
      setSelectedsite([...selectedSite, sitName]);
    }
    alert(selectedSite)
  };

  const handleOnselected = (id:string) => {

  }

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

const currentPaht = usePathname()
const pagtTitle = filterPathName(currentPaht)
  React.useEffect(() => {
    document.title = `${pagtTitle}`;
  }, [pagtTitle]); 
  return (
      <Card>
        <CardHeader
          title={pagtTitle}
          sx={{borderBottom:'1px solid rgb(56 189 248)'}}
          >
        </CardHeader>
        <CardContent>
            <Grid container spacing={2}>
              <Grid xl={6} lg={6} sm={12}  >
                <div className='flex flex-col itmes-center shadow-md  rounded-md pb-3'>
                 <div className='bg-sky-500 text-white px-2 w-full py-1.5'>
                  기본 설정
                 </div>
                 <FormControl sx={{marginTop:'2rem', display:'flex', flexDirection:'column', alignItems:'start', justifyContent:'space-around', gap:'1rem'}}>
                    {Configsettings.map((element:any, index:number ) => {
                        if(index < 15){
                            return(
                              <div className='flex flex-row items-center justify-round'>
                                <FormLabel id="demo-row-radio-buttons-group-label" className='mx-2 '>{element.name}</FormLabel>
                                <SwitchButton onClick={()=>handleClick(index, `${element.method}`, `${element.method}`)} 
                                  switchState={switchState[`${index}_${element.method}_${element.method}`]} 
                                />
                              </div>
                            )
                        }
                      })
                    }
                    <div className='flex flex-row items-center justify-round mt-5 flex-wrap xl:flex-nowrap'>
                        <FormLabel id="demo-row-radio-buttons-group-label" className='mx-2 '>관심회원 베팅 알람 최소 베팅금</FormLabel>
                        <div className='flex flex-row items-center justify-around gap-2 border borderd-1 border-sky-400  rounded-full'>
                          <input type='number' value={1244555} min={0} className='py-2 rounded-full px-1.5 w-full'/>
                          <div className='bg-red-400 h-full rounded-full w-6  text-white flex flex-col items-center justify-center'>
                           원
                          </div>
                        </div>
                    </div>
                    <div className='flex flex-row items-center justify-round mt-5 flex-wrap xl:flex-nowrap'>
                        <FormLabel id="demo-row-radio-buttons-group-label" className='mx-2 '>관심회원 베팅 알람 최소 베팅금</FormLabel>
                        <div className='flex flex-row items-center justify-around gap-2 border borderd-1 border-sky-400  rounded-full'>
                          <input type='number' value={1244555} min={0} className='py-2 rounded-full px-1.5 w-full'/>
                          <div className='bg-red-400 h-full rounded-full w-6  text-white flex flex-col items-center justify-center'>
                           원
                          </div>
                        </div>
                    </div>
                    {Configsettings.map((element:any, index:number ) => {
                        if(index > 15 && index <= 21){
                            return(
                              <div className='flex flex-row items-center justify-round'>
                                <FormLabel id="demo-row-radio-buttons-group-label" className='mx-2 '>{element.name}</FormLabel>
                                <SwitchButton onClick={()=>handleClick(index, `${element.method}`, `${element.method}`)} 
                                  switchState={switchState[`${index}_${element.method}_${element.method}`]} 
                                />
                              </div>
                            )
                        }
                      })
                    }
                    <div className='flex flex-row items-center justify-round mt-5 flex-wrap xl:flex-nowrap'>
                        <FormLabel id="demo-row-radio-buttons-group-label" className='mx-2 '>오프라인 파트너 입금 포인트 지급방식</FormLabel>
                        <div className='flex flex-row items-center justify-around gap-2 border borderd-1 border-sky-400  rounded-full'>
                          <input type='number' value={1244555} min={0} className='py-2 rounded-full px-1.5 w-full'/>
                          <div className='bg-red-400 h-full rounded-full w-6  text-white flex flex-col items-center justify-center'>
                           원
                          </div>
                        </div>
                    </div>
                    <div className='flex flex-row items-center justify-round mt-5 flex-wrap xl:flex-nowrap'>
                        <FormLabel id="demo-row-radio-buttons-group-label" className='mx-2 '>파트너 포인트지급 메모선택 목록</FormLabel>
                        <div className='flex flex-row items-center justify-around gap-2 border borderd-1 border-sky-400  rounded-full'>
                          <input type='number' value={1244555} min={0} className='py-2 rounded-full px-1.5 w-full'/>
                          <div className='bg-red-400 h-full rounded-full w-6  text-white flex flex-col items-center justify-center'>
                           원
                          </div>
                        </div>
                    </div>
                    {Configsettings.map((element:any, index:number ) => {
                        if(index > 21 && index <= 23){
                            return(
                              <div className='flex flex-row items-center justify-round'>
                                <FormLabel id="demo-row-radio-buttons-group-label" className='mx-2 '>{element.name}</FormLabel>
                                <SwitchButton onClick={()=>handleClick(index, `${element.method}`, `${element.method}`)} 
                                  switchState={switchState[`${index}_${element.method}_${element.method}`]} 
                                />
                              </div>
                            )
                        }
                      })
                    }
                    <div className='flex flex-row items-center justify-round mt-5 flex-wrap xl:flex-nowrap'>
                        <FormLabel id="demo-row-radio-buttons-group-label" className='mx-2 '>계좌문의 응답 개별설정 적용</FormLabel>
                        <div className='flex flex-row items-center justify-around gap-2 border borderd-1 border-sky-400  rounded-full'>
                          <input type='number' value={1244555} min={0} className='py-2 rounded-full px-1.5 w-full'/>
                          <div className='bg-red-400 h-full rounded-full w-6  text-white flex flex-col items-center justify-center'>
                           원
                          </div>
                        </div>
                    </div>
                    <div className='flex flex-row items-center justify-round mt-5 flex-wrap xl:flex-nowrap'>
                        <FormLabel id="demo-row-radio-buttons-group-label" className='mx-2 '>(입금)계좌문의 유효시간</FormLabel>
                        <div className='flex flex-row items-center justify-around gap-2 border borderd-1 border-sky-400  rounded-full'>
                          <input type='number' value={1244555} min={0} className='py-2 rounded-full px-1.5 w-full'/>
                          <div className='bg-red-400 h-full rounded-full w-6  text-white flex flex-col items-center justify-center'>
                           원
                          </div>
                        </div>
                    </div>
                    <div className='flex flex-row items-center justify-round mt-5 flex-wrap xl:flex-nowrap'>
                        <FormLabel id="demo-row-radio-buttons-group-label" className='mx-2 '>고객센터 문의 자동삭제 시간</FormLabel>
                        <div className='flex flex-row items-center justify-around gap-2 border borderd-1 border-sky-400  rounded-full'>
                          <input type='number' value={1244555} min={0} className='py-2 rounded-full px-1.5 w-full'/>
                          <div className='bg-red-400 h-full rounded-full w-6  text-white flex flex-col items-center justify-center'>
                           원
                          </div>
                        </div>
                    </div>
                    {Configsettings.map((element:any, index:number ) => {
                        if(index > 23 && index <= 24){
                            return(
                              <div className='flex flex-row items-center justify-round'>
                                <FormLabel id="demo-row-radio-buttons-group-label" className='mx-2 '>{element.name}</FormLabel>
                                <SwitchButton onClick={()=>handleClick(index, `${element.method}`, `${element.method}`)} 
                                  switchState={switchState[`${index}_${element.method}_${element.method}`]} 
                                />
                              </div>
                            )
                        }
                      })
                    }
                    <div className='flex flex-row items-center justify-round mt-5 flex-wrap xl:flex-nowrap'>
                        <FormLabel id="demo-row-radio-buttons-group-label" className='mx-2 '>세션타임아웃</FormLabel>
                        <div className='flex flex-row items-center justify-around gap-2 border borderd-1 border-sky-400  rounded-full'>
                          <input type='number' value={1244555} min={0} className='py-2 rounded-full px-1.5 w-full'/>
                          <div className='bg-red-400 h-full rounded-full w-6  text-white flex flex-col items-center justify-center'>
                           원
                          </div>
                        </div>
                    </div>
                    {Configsettings.map((element:any, index:number ) => {
                        if(index > 24 && index <= 25){
                            return(
                              <div className='flex flex-row items-center justify-round'>
                                <FormLabel id="demo-row-radio-buttons-group-label" className='mx-2 '>{element.name}</FormLabel>
                                <SwitchButton onClick={()=>handleClick(index, `${element.method}`, `${element.method}`)} 
                                  switchState={switchState[`${index}_${element.method}_${element.method}`]} 
                                />
                              </div>
                            )
                        }
                      })
                    }
                    <div className='flex flex-row items-center justify-round mt-5 flex-wrap xl:flex-nowrap'>
                        <FormLabel id="demo-row-radio-buttons-group-label" className='mx-2 '>마지막 로그인 XX일후 자동 휴면처리</FormLabel>
                        <div className='flex flex-row items-center justify-around gap-2 border borderd-1 border-sky-400  rounded-full'>
                          <input type='number' value={1244555} min={0} className='py-2 rounded-full px-1.5 w-full'/>
                          <div className='bg-red-400 h-full rounded-full w-6  text-white flex flex-col items-center justify-center'>
                           원
                          </div>
                        </div>
                    </div>
                    {Configsettings.map((element:any, index:number ) => {
                        if(index > 25 && index <= 32){
                            return(
                              <div className='flex flex-row items-center justify-round'>
                                <FormLabel id="demo-row-radio-buttons-group-label" className='mx-2 '>{element.name}</FormLabel>
                                <SwitchButton onClick={()=>handleClick(index, `${element.method}`, `${element.method}`)} 
                                  switchState={switchState[`${index}_${element.method}_${element.method}`]} 
                                />
                              </div>
                            )
                        }
                      })
                    }
                    <div className='flex flex-row items-center justify-round mt-5 flex-wrap xl:flex-nowrap'>
                        <FormLabel id="demo-row-radio-buttons-group-label" className='mx-2 '>마지막 로그인 XX일후 자동 휴면처리</FormLabel>
                        <div className='flex flex-row items-center justify-around gap-2 border borderd-1 border-sky-400  rounded-full'>
                          <input type='number' value={1244555} min={0} className='py-2 rounded-full px-1.5 w-full'/>
                          <div className='bg-red-400 h-full rounded-full w-6  text-white flex flex-col items-center justify-center'>
                           원
                          </div>
                        </div>
                    </div>
                    {Configsettings.map((element:any, index:number ) => {
                          if(index > 32 && index <= 40){
                              return(
                                <div className='flex flex-row items-center justify-round'>
                                  <FormLabel id="demo-row-radio-buttons-group-label" className='mx-2 '>{element.name}</FormLabel>
                                  <SwitchButton onClick={()=>handleClick(index, `${element.method}`, `${element.method}`)} 
                                    switchState={switchState[`${index}_${element.method}_${element.method}`]} 
                                  />
                                </div>
                              )
                          }
                        })
                    }
                    <div className='flex flex-row items-center justify-round mt-5 flex-wrap xl:flex-nowrap'>
                        <FormLabel id="demo-row-radio-buttons-group-label" className='mx-2 '>마지막 로그인 XX일후 자동 휴면처리</FormLabel>
                        <div className='flex flex-row items-center justify-around gap-2 border borderd-1 border-sky-400  rounded-full'>
                          <input type='number' value={1244555} min={0} className='py-2 rounded-full px-1.5 w-full'/>
                          <div className='bg-red-400 h-full rounded-full w-6  text-white flex flex-col items-center justify-center'>
                           원
                          </div>
                        </div>
                    </div>
                    <div className='flex flex-row items-center justify-round mt-5 flex-wrap xl:flex-nowrap'>
                        <FormLabel id="demo-row-radio-buttons-group-label" className='mx-2 '>마지막 로그인 XX일후 자동 휴면처리</FormLabel>
                        <div className='flex flex-row items-center justify-around gap-2 border borderd-1 border-sky-400  rounded-full'>
                          <input type='number' value={1244555} min={0} className='py-2 rounded-full px-1.5 w-full'/>
                          <div className='bg-red-400 h-full rounded-full w-6  text-white flex flex-col items-center justify-center'>
                           원
                          </div>
                        </div>
                    </div>
                    {Configsettings.map((element:any, index:number ) => {
                          if(index > 40){
                              return(
                                <div className='flex flex-row items-center justify-round'>
                                  <FormLabel id="demo-row-radio-buttons-group-label" className='mx-2 '>{element.name}</FormLabel>
                                  <SwitchButton onClick={()=>handleClick(index, `${element.method}`, `${element.method}`)} 
                                    switchState={switchState[`${index}_${element.method}_${element.method}`]} 
                                  />
                                </div>
                              )
                          }
                        })
                    }
                    <button type='button' className='rounded-full w-1/2 bg-sky-500 mt-5 py-2 text-white'>변경</button>
                  </FormControl>
                </div>
              </Grid>
              <Grid xl={6} lg={6} sm={12} sx={{display:'flex', flexDirection:'column', alignItems:'start', justifyContent:'start', gap:'1rem'}}>
                <div className='flex flex-col itmes-center shadow-md w-full rounded-md pb-3'>
                    <div className='bg-sky-500 text-white px-2 w-full py-1.5 flex flex-row justify-between items-center'>
                      총판환전 제한시간
                      <SwitchButton onClick={()=>handleClick(1, `distributor-currency-exchange-time-limit`, 'distributor-currency-exchange')} 
                        switchState={switchState[`1_distributor-currency-exchange`]} 
                       />
                    </div>
                    <div className='wraper mt-8 px-2 flex flex-col items-center justify-center gap-2'>
                        <div className='flex flex-row items-center justify-start gap-2'>
                            <div className='px-3 min-w-20 max-w-28 py-1 rounded-md border border-1 border-sky-400'>
                            10:00
                            </div>
                            -
                            <div className='px-3 min-w-20 max-w-28 py-1 rounded-md border border-1 border-sky-400'>
                              10:00
                            </div>
                            <div className='px-3 min-w-20 max-w-28 py-1 rounded-md border border-1 border-sky-400'>
                            삭제
                            </div>
                        </div>
                        <div className='w-full border border-1 border-sky-400 px-2 min-h-52 max-h-80'>

                        </div>
                        <button type='button' className='w-3/6 px-4 py-1 bg-sky-600 rounded-full text-white'>삭제</button>
                    </div>
                </div>
                <div className='flex flex-col itmes-center shadow-md w-full rounded-md pb-3'>
                    <div className='bg-sky-500 text-white px-2 w-full py-1.5 flex flex-row justify-between items-center'>
                      유저환전 제한시간
                      <SwitchButton onClick={()=>handleClick(2, `user-currency-exchange`, 'user-currency-exchange')} 
                        switchState={switchState[`2_user-currency-exchange`]} 
                       />
                    </div>
                    <div className='wraper mt-8 px-2 flex flex-col items-center justify-center  gap-2'>
                        <div className='flex flex-row items-center justify-start gap-2'>
                            <div className='px-3 min-w-20 max-w-28 py-1 rounded-md border border-1 border-sky-400'>
                            10:00
                            </div>
                            -
                            <div className='px-3 min-w-20 max-w-28 py-1 rounded-md border border-1 border-sky-400'>
                              10:00
                            </div>
                            <div className='px-3 min-w-20 max-w-28 py-1 rounded-md border border-1 border-sky-400'>
                            삭제
                            </div>
                        </div>
                        <div className='w-full border border-1 border-sky-400 px-2 min-h-52 max-h-80'>

                        </div>
                        <button type='button' className='w-3/6 px-4 py-1 bg-sky-600 rounded-full text-white'>삭제</button>
                    </div>
                </div>
                <div className='flex flex-col itmes-center shadow-md w-full rounded-md pb-3'>
                    <div className='bg-sky-500 text-white px-2 w-full py-1.5 flex flex-row justify-between items-center'>
                      총판충전 제한시간
                      <SwitchButton onClick={()=>handleClick(3, `distributor_recharge_time_limit`, 'distributor_recharge_time_limit')} 
                        switchState={switchState[`3_distributor_recharge_time_limit`]} 
                       />
                    </div>
                    <div className='wraper mt-8 px-2 flex flex-col items-center justify-center  gap-2'>
                        <div className='flex flex-row items-center justify-start gap-2'>
                            <div className='px-3 min-w-20 max-w-28 py-1 rounded-md border border-1 border-sky-400'>
                            10:00
                            </div>
                            -
                            <div className='px-3 min-w-20 max-w-28 py-1 rounded-md border border-1 border-sky-400'>
                              10:00
                            </div>
                            <div className='px-3 min-w-20 max-w-28 py-1 rounded-md border border-1 border-sky-400'>
                            삭제
                            </div>
                        </div>
                        <div className='w-full border border-1 border-sky-400 px-2 min-h-52 max-h-80'>

                        </div>
                        <button type='button' className='w-3/6 px-4 py-1 bg-sky-600 rounded-full text-white'>삭제</button>
                    </div>
                </div>
                <div className='flex flex-col itmes-center shadow-md w-full rounded-md pb-3'>
                    <div className='bg-sky-500 text-white px-2 w-full py-1.5 flex flex-row justify-between items-center'>
                      유저충전 제한시간
                      <SwitchButton onClick={()=>handleClick(3, `user_recharge_time_limit`, 'user_recharge_time_limit')} 
                        switchState={switchState[`3_user_recharge_time_limit`]} 
                       />
                    </div>
                    <div className='wraper mt-8 px-2 flex flex-col items-center justify-center  gap-2'>
                        <div className='flex flex-row items-center justify-start gap-2'>
                            <div className='px-3 min-w-20 max-w-28 py-1 rounded-md border border-1 border-sky-400'>
                            10:00
                            </div>
                            -
                            <div className='px-3 min-w-20 max-w-28 py-1 rounded-md border border-1 border-sky-400'>
                              10:00
                            </div>
                            <div className='px-3 min-w-20 max-w-28 py-1 rounded-md border border-1 border-sky-400'>
                            삭제
                            </div>
                        </div>
                        <div className='w-full border border-1 border-sky-400 px-2 min-h-52 max-h-80'>

                        </div>
                        <button type='button' className='w-3/6 px-4 py-1 bg-sky-600 rounded-full text-white'>삭제</button>
                    </div>
                </div>
              </Grid>
            </Grid>
        </CardContent>
      </Card>
  );
}
