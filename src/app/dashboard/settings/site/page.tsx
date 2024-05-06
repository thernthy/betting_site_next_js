'use client';
import * as React from 'react';
import { usePathname } from 'next/navigation';
import Grid from '@mui/material/Unstable_Grid2';
import { Card, CardContent, CardHeader, Chip, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField} from '@mui/material';
import { filterPathName } from '@/app/meta/metadata';
import { SelectChangeEvent } from '@mui/material/Select';
import { minWidth } from '@mui/system';
import { SiteSectionData } from './selectionSite_Data';
import MinHeightTextarea from './textarea';
import SelectionLayer from '@/components/materinals_components/selection/muiltiple_selection_layer';
import { MuiltipleUsersLayer } from '@/db/multiple_layer_users';
import NumberInput from '@/components/materinals_components/inputFilde/inputNumber';
import { SwitchButton } from './switchButton';

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
    // Define an object to map type_request to switch state
    const switchStateByType: Record<string, boolean> = {
        'distributor-currency-exchange': true,
        'user-currency-exchange': true,
        'distributor_recharge_time_limit': true,
        'user_recharge_time_limit': true,
    };

    if (switchStateByType[type_request] !== undefined) {
        setSwitchState(prevState => ({
          ...prevState,
          [`${index}_${type_request}`] : !prevState[`${index}_${type_request}`]
      }));

        const requ_type = switchStateByType[type_request] ? 'set_' : 'unset_'; // Determine request type based on type_request
        alert(requ_type + ' ' + status_requt + ' ' + type_request);
    }
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
              <Grid xl={4} lg={6} sm={12}  >
                <div className='flex flex-col itmes-center shadow-md  rounded-md pb-3'>
                 <div className='bg-sky-500 text-white px-2 w-full py-1.5'>
                  기본 설정
                 </div>
                 <FormControl sx={{marginTop:'2rem', display:'flex', flexDirection:'column', alignItems:'start', justifyContent:'space-around', gap:'1rem'}}>
                    <div className='flex flex-row items-center justify-round'>
                     <FormLabel id="demo-row-radio-buttons-group-label" className='mx-2 '>사이트 점검</FormLabel>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                        <FormControlLabel value="female" control={<Radio />} label="점검중" />
                        <FormControlLabel value="male" control={<Radio />} label="정상동작중" />
                      </RadioGroup>
                    </div>
                    <div className='flex flew-row items-center justify-around gap-2'>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectionSetting}
                        onChange={handleChange}
                        sx={{minWidth:'250px'}}
                        className='ml-20 mt-2'
                        >
                        <MenuItem value={'Selection1'}>selection 1</MenuItem>
                        <MenuItem value={'Selection2'}>selection 2</MenuItem>
                        <MenuItem value={'Selection3'}>selection 3</MenuItem>
                      </Select>
                    </div>
                    <ul className='flex flex-row items-center justify-start mt-3 flex-wrap '>
                      {SiteSectionData.map((site, siteIndex:number) => {
                        return (
                          <li className={`px-2 py-1.5  mt-1 bg-sky-400 cursor-pointer text-white 
                           ${selectedSite.includes(site.site_name) ? 'bg-sky-600':''}`} 
                            key={site.id}
                            onClick={()=>handleSiteSelection(site.site_name)}
                            >
                            {site.site_name}
                          </li>
                        )
                      })
                      }
                    </ul>
                    <div className='flex flex-row items-center justify-round'>
                      <FormLabel id="demo-row-radio-buttons-group-label" className='mx-2 '>점검제목</FormLabel>
                      <TextField id="standard-basic"  value={'점검공지'} />
                    </div>
                    <div className='flex flex-row items-center justify-round mt-5'>
                      <FormLabel id="demo-row-radio-buttons-group-label" className='mx-2 '>점검제목</FormLabel>
                      <MinHeightTextarea aria-label="minimum height"   />
                    </div>
                    <div className='flex flex-row items-center justify-round mt-5'>
                      <FormLabel id="demo-row-radio-buttons-group-label" className='mx-2 '>점검제목</FormLabel>
                       <SelectionLayer data={MuiltipleUsersLayer} onSelect={handleOnselected} />
                    </div>
                    <div className='flex flex-row items-center justify-round mt-5'>
                      <FormLabel id="demo-row-radio-buttons-group-label" className='mx-2 '>기본 도메인</FormLabel>
                      <TextField id="standard-basic"  value={5} />
                    </div>
                    <div className='flex flex-row items-center justify-round mt-5'>
                      <FormLabel id="demo-row-radio-buttons-group-label" className='mx-2 '>전화번호</FormLabel>
                      <TextField id="standard-basic"  value={1345} />
                    </div>
                    <div className='flex flex-row items-center justify-round mt-5'>
                      <FormLabel id="demo-row-radio-buttons-group-label" className='mx-2 '>텔레그램</FormLabel>
                      <TextField id="standard-basic"  value={'고객센터 문의'} />
                    </div>
                    <div className='flex flex-row items-center justify-round mt-5'>
                      <FormLabel id="demo-row-radio-buttons-group-label" className='mx-2 '>카카오톡</FormLabel>
                      <TextField id="standard-basic"  value={'고객센터 문의'} />
                    </div>
                    <div className='flex flex-row items-center justify-round mt-5'>
                      <FormLabel id="demo-row-radio-buttons-group-label" className='mx-2 '>롤링 전환 최소금액</FormLabel>
                      <TextField id="standard-basic"  value={'50,000'} />
                    </div>
                    <div className='flex flex-row items-center justify-round mt-5'>
                      <FormLabel id="demo-row-radio-buttons-group-label" className='mx-2 '>롤링 전환 1일 횟수 제한</FormLabel>
                      <TextField id="standard-basic"  value={'0'} />
                    </div>
                    <div className='flex flex-row items-center justify-round mt-5'>
                      <FormLabel id="demo-row-radio-buttons-group-label" className='mx-2 '>롤링 전환 1일 금액 제한</FormLabel>
                      <TextField id="standard-basic"  value={'0'} />
                    </div>
                    <div className='flex flex-row items-center justify-round mt-5'>
                      <FormLabel id="demo-row-radio-buttons-group-label" className='mx-2 '>환전완료후 재신청 대기시간</FormLabel>
                      <NumberInput />
                    </div>
                    <div className='flex flex-row items-center justify-round mt-5'>
                      <FormLabel id="demo-row-radio-buttons-group-label" className='mx-2 '>충전완료후 환전신청 대기시간</FormLabel>
                      <NumberInput />
                    </div>
                    <div className='flex flex-row items-center justify-round mt-5 flex-wrap xl:flex-nowrap'>
                      <FormLabel id="demo-row-radio-buttons-group-label" className='mx-2 '>당일 x회이상 환전시 시간제한</FormLabel>
                      <div className='flex flex-row items-center justify-around'>
                        <input type='number' value={0} min={0} className=' min-w-6 max-w-36 border borderd-1 border-sky-400 rounded-full py-2 px-1.5'/>
                        <div className='text-sm whitespace-normal'>
                         이상 환전시 제한시간
                        </div>
                        <input type='number' value={0} min={0} className=' min-w-6 max-w-36 border borderd-1 border-sky-400 rounded-full py-2 px-1.5'/>
                      </div>
                    </div>
                    <div className='flex flex-row items-center justify-round mt-5 flex-wrap xl:flex-nowrap'>
                        <FormLabel id="demo-row-radio-buttons-group-label" className='mx-2 '>베팅내역 삭감 최대금액</FormLabel>
                        <input type='number' value={0} min={0} className=' border borderd-1 border-sky-400 rounded-full py-2 px-1.5'/>
                    </div>
                    <div className='flex flex-row items-center justify-round mt-5 flex-wrap xl:flex-nowrap'>
                        <FormLabel id="demo-row-radio-buttons-group-label" className='mx-2 '>베팅내역 삭감 최대금액</FormLabel>
                        <div className='flex flex-row items-center justify-around gap-2 border borderd-1 border-sky-400  rounded-full py-1.5 px-1.5'>
                          <input type='number' value={0} min={0} className='py-2 rounded-full px-1.5 w-full'/>
                          <div className='bg-red-400 rounded-full w-6 h-6 text-white flex flex-col items-center justify-center'>
                            %
                          </div>
                        </div>
                    </div>
                    <button type='button' className='rounded-full w-1/2 bg-sky-500 mt-5 py-2 text-white'>변경</button>
                  </FormControl>
                </div>
              </Grid>
              <Grid xl={4} lg={6} sm={12} sx={{display:'flex', flexDirection:'column', alignItems:'start', justifyContent:'start', gap:'1rem'}}>
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
              <Grid xl={4} lg={12}  sm={12} sx={{display:'flex', flexDirection:'column', alignItems:'start', justifyContent:'start', gap:'1rem'}}>
                <div className='flex flex-col itmes-center shadow-md w-full rounded-md pb-3'>
                    <div className='bg-sky-500 text-white px-2 w-full py-1.5 flex flex-row justify-between items-center'>
                      디자인4 - WIN
                      <SwitchButton onClick={()=>handleClick(1, `distributor-currency-exchange-time-limit`, 'distributor-currency-exchange')} 
                        switchState={switchState[`1_distributor-currency-exchange`]} 
                       />
                    </div>
                    <div className='wraper mt-8 px-2 flex flex-col items-center justify-center gap-2'>
                        <div className='flex flex-row items-center justify-start gap-2'>
                            <input type='text' placeholder='domain.com...'  className="px-3 py-1 rounded-md border border-1 border-sky-400 focus:border-transparent"/>
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
                      디자인5 - SPORTS
                      <SwitchButton onClick={()=>handleClick(1, `distributor-currency-exchange-time-limit`, 'distributor-currency-exchange')} 
                        switchState={switchState[`1_distributor-currency-exchange`]} 
                       />
                    </div>
                    <div className='wraper mt-8 px-2 flex flex-col items-center justify-center gap-2'>
                        <div className='flex flex-row items-center justify-start gap-2'>
                            <input type='text' placeholder='domain.com...'  className="px-3 py-1 rounded-md border border-1 border-sky-400 focus:border-transparent"/>
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
                      디자인6 - CUP
                      <SwitchButton onClick={()=>handleClick(1, `distributor-currency-exchange-time-limit`, 'distributor-currency-exchange')} 
                        switchState={switchState[`1_distributor-currency-exchange`]} 
                       />
                    </div>
                    <div className='wraper mt-8 px-2 flex flex-col items-center justify-center gap-2'>
                        <div className='flex flex-row items-center justify-start gap-2'>
                            <input type='text' placeholder='domain.com...'  className="px-3 py-1 rounded-md border border-1 border-sky-400 focus:border-transparent"/>
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
                      디자인7 - OLEBET
                      <SwitchButton onClick={()=>handleClick(1, `distributor-currency-exchange-time-limit`, 'distributor-currency-exchange')} 
                        switchState={switchState[`1_distributor-currency-exchange`]} 
                       />
                    </div>
                    <div className='wraper mt-8 px-2 flex flex-col items-center justify-center gap-2'>
                        <div className='flex flex-row items-center justify-start gap-2'>
                            <input type='text' placeholder='domain.com...'  className="px-3 py-1 rounded-md border border-1 border-sky-400 focus:border-transparent"/>
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
                      디자인8 - SOUL
                      <SwitchButton onClick={()=>handleClick(1, `distributor-currency-exchange-time-limit`, 'distributor-currency-exchange')} 
                        switchState={switchState[`1_distributor-currency-exchange`]} 
                       />
                    </div>
                    <div className='wraper mt-8 px-2 flex flex-col items-center justify-center gap-2'>
                        <div className='flex flex-row items-center justify-start gap-2'>
                            <input type='text' placeholder='domain.com...'  className="px-3 py-1 rounded-md border border-1 border-sky-400 focus:border-transparent"/>
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
                      디자인9 - DNINE
                      <SwitchButton onClick={()=>handleClick(1, `distributor-currency-exchange-time-limit`, 'distributor-currency-exchange')} 
                        switchState={switchState[`1_distributor-currency-exchange`]} 
                       />
                    </div>
                    <div className='wraper mt-8 px-2 flex flex-col items-center justify-center gap-2'>
                        <div className='flex flex-row items-center justify-start gap-2'>
                            <input type='text' placeholder='domain.com...'  className="px-3 py-1 rounded-md border border-1 border-sky-400 focus:border-transparent"/>
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
                      디자인10 - CHOCO
                      <SwitchButton onClick={()=>handleClick(1, `distributor-currency-exchange-time-limit`, 'distributor-currency-exchange')} 
                        switchState={switchState[`1_distributor-currency-exchange`]} 
                       />
                    </div>
                    <div className='wraper mt-8 px-2 flex flex-col items-center justify-center gap-2'>
                        <div className='flex flex-row items-center justify-start gap-2'>
                            <input type='text' placeholder='domain.com...'  className="px-3 py-1 rounded-md border border-1 border-sky-400 focus:border-transparent"/>
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
                      디자인11 - COK
                      <SwitchButton onClick={()=>handleClick(1, `distributor-currency-exchange-time-limit`, 'distributor-currency-exchange')} 
                        switchState={switchState[`1_distributor-currency-exchange`]} 
                       />
                    </div>
                    <div className='wraper mt-8 px-2 flex flex-col items-center justify-center gap-2'>
                        <div className='flex flex-row items-center justify-start gap-2'>
                            <input type='text' placeholder='domain.com...'  className="px-3 py-1 rounded-md border border-1 border-sky-400 focus:border-transparent"/>
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
                    디자인12 - OSAKA
                      <SwitchButton onClick={()=>handleClick(1, `distributor-currency-exchange-time-limit`, 'distributor-currency-exchange')} 
                        switchState={switchState[`1_distributor-currency-exchange`]} 
                       />
                    </div>
                    <div className='wraper mt-8 px-2 flex flex-col items-center justify-center gap-2'>
                        <div className='flex flex-row items-center justify-start gap-2'>
                            <input type='text' placeholder='domain.com...'  className="px-3 py-1 rounded-md border border-1 border-sky-400 focus:border-transparent"/>
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
                     디자인13 - BELLY
                      <SwitchButton onClick={()=>handleClick(1, `distributor-currency-exchange-time-limit`, 'distributor-currency-exchange')} 
                        switchState={switchState[`1_distributor-currency-exchange`]} 
                       />
                    </div>
                    <div className='wraper mt-8 px-2 flex flex-col items-center justify-center gap-2'>
                        <div className='flex flex-row items-center justify-start gap-2'>
                            <input type='text' placeholder='domain.com...'  className="px-3 py-1 rounded-md border border-1 border-sky-400 focus:border-transparent"/>
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
                    디자인14 - HOUSE
                      <SwitchButton onClick={()=>handleClick(1, `distributor-currency-exchange-time-limit`, 'distributor-currency-exchange')} 
                        switchState={switchState[`1_distributor-currency-exchange`]} 
                       />
                    </div>
                    <div className='wraper mt-8 px-2 flex flex-col items-center justify-center gap-2'>
                        <div className='flex flex-row items-center justify-start gap-2'>
                            <input type='text' placeholder='domain.com...'  className="px-3 py-1 rounded-md border border-1 border-sky-400 focus:border-transparent"/>
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
                      디자인15 - KBET
                      <SwitchButton onClick={()=>handleClick(1, `distributor-currency-exchange-time-limit`, 'distributor-currency-exchange')} 
                        switchState={switchState[`1_distributor-currency-exchange`]} 
                       />
                    </div>
                    <div className='wraper mt-8 px-2 flex flex-col items-center justify-center gap-2'>
                        <div className='flex flex-row items-center justify-start gap-2'>
                            <input type='text' placeholder='domain.com...'  className="px-3 py-1 rounded-md border border-1 border-sky-400 focus:border-transparent"/>
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
