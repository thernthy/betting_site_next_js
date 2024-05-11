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
              <Grid xl={8} lg={8} md={12} sm={12}>
                  <div className='py-2 px-2 bg-sky-600 text-white w-full'>
                    1레벨 설정
                    </div>
                    <form className='flex text-sm xl:text-xs flex-col items-start justify-start gap-4 shadow-md px-3 py-2'>

                      <table className='w-full'>
                        <tbody>
                          <tr className='border border-spacing-3 border-gray-200'>
                            <td className='py-2 px-3' align='left'>
                              <label htmlFor=''>출석체크가능 금일충전금액</label>
                            </td>
                            <td className='py-2 px-3' align='left'>
                              <SwitchButton onClick={() => handleClick('membership_registration_status', 0)} 
                                switchState={switchState['membership_registration_status']} />
                            </td>
                          </tr>
                          <tr className='border border-spacing-3 border-gray-200'>
                            <td className='py-2 px-3' align='left'>
                              <label htmlFor=''>회원가입 중복체크</label>
                            </td>
                            <td className='py-2 px-3' align='left'>
                              <div className='w-32 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                                <select className='w-full py-2 rounded-md'>
                                  <option>핸드폰 + 계좌번호</option>
                                  <option>계좌번호</option>
                                  <option>핸드폰</option>
                                  <option>중복체크(X)</option>
                                </select>
                              </div>
                            </td>
                          </tr>

                          <tr className='border border-spacing-3 border-gray-200'>
                            <td className='py-2 px-3' align='left'>
                              <label htmlFor=''>회원가입시 회원레벨</label>
                            </td>
                            <td className='py-2 px-3' align='left'>
                              <div className='w-32 border border-spacing-2 border-gray-300 flex flex-row items-center justify-start rounded-md'>
                                <select className='w-full py-2 rounded-md'>
                                  { RenderLevels() }
                                </select>
                              </div>
                            </td>
                          </tr>
                          <tr className='border border-spacing-3 border-gray-200'>
                            <td className='py-2 px-3' align='left'>
                              <label htmlFor=''>회원가입시 포인트</label>
                            </td>
                            <td className='py-2 px-3' align='left'>
                               <input type='number' className='px-3 py-2 rounded-md border border-spacing-3' />
                            </td>
                          </tr>
                          <tr className='border border-spacing-3 border-gray-200'>
                            <td className='py-2 px-3' align='left'>
                              <label htmlFor=''>회원가입시 메세지	</label>
                            </td>
                            <td className='py-2 px-3' align='left'>
                               <input type='text' className='px-3 py-2 rounded-md border border-spacing-3' />
                            </td>
                          </tr>
                          <tr className='border border-spacing-3 border-gray-200'>
                            <td className='py-2 px-3' align='left'>
                              <label htmlFor=''>회원가입시 쪽지 제목</label>
                            </td>
                            <td className='py-2 px-3' align='left'>
                               <input type='text' className='px-3 py-2 rounded-md border border-spacing-3' />
                            </td>
                          </tr>
                          <tr className='border border-spacing-3 border-gray-200'>
                            <td className='py-2 px-3' align='left'>
                              <label htmlFor=''>회원가입시 쪽지 내용</label>
                            </td>
                            <td className='py-2 px-3' align='left'>
                               <textarea rows={4} className='w-full border border-spacing-3'></textarea>
                            </td>
                          </tr>
                          <tr className='border border-spacing-3 border-gray-200'>
                            <td className='py-2 px-3' align='left'>
                              <label htmlFor=''>회원가입후 회원상태</label>
                            </td>
                            <td className='py-2 px-3' align='left'>
                                <select className='w-full py-2 px-3 rounded-md border border-spacing-2'>
                                  <option>정상 이용가능</option>
                                  <option>승인대기중</option>
                                </select>
                            </td>
                          </tr>
                          <tr className='border border-spacing-3 border-gray-200'>
                            <td className='py-2 px-3' align='left'>
                              <label htmlFor=''>회원가입후 회원/총판설정</label>
                            </td>
                            <td className='py-2 px-3' align='left'>
                                <select className='w-full py-2 px-3 rounded-md border border-spacing-2'>
                                  <option>회원</option>
                                  <option>총판</option>
                                </select>
                            </td>
                          </tr>
                          <tr className='border border-spacing-3 border-gray-200'>
                            <td className='py-2 px-3' align='left'>
                              <label htmlFor=''>회원가입 비밀번호 복잡도</label>
                            </td>
                            <td className='py-2 px-3' align='left'>
                              <div className='w-full flex flex-col justify-start items-start gap-2'>
                                <select className='w-full py-2 px-3 rounded-md border border-spacing-2'>
                                  <option>사용 안함</option>
                                  <option>사용</option>
                                </select>
                               <p>* 비밀번호 복잡도 사용시 7자리 이상 숫자 2자리 포함되어야 가능</p>
                              </div>
                            </td>
                          </tr>
                          <tr className='border border-spacing-3 border-gray-200'>
                            <td className='py-2 px-3' align='left'>
                              <label htmlFor=''>가입폼에 주민등록번호(앞자리) 입력칸 추가	</label>
                            </td>
                            <td className='py-2 px-3' align='left'>
                                <SwitchButton onClick={() => handleClick('to_registration_form', 0)} 
                                switchState={switchState['to_registration_form']} />
                            </td>
                          </tr>
                          <tr className='border border-spacing-3 border-gray-200'>
                            <td className='py-2 px-3' align='left'>
                              <label htmlFor=''>회원가입시 SMS인증</label>
                            </td>
                            <td className='py-2 px-3' align='left'>
                                <SwitchButton onClick={() => handleClick('registering_as_a_member', 0)} 
                                switchState={switchState['registering_as_a_member']} />
                            </td>
                          </tr>
                          <tr className='border border-spacing-3 border-gray-200'>
                            <td className='py-2 px-3' align='left'>
                              <label htmlFor=''>동일IP회원가능 여부</label>
                            </td>
                            <td className='py-2 px-3' align='left'>
                                <SwitchButton onClick={() => handleClick('is_same_ip_membership_possible', 0)} 
                                switchState={switchState['is_same_ip_membership_possible']} />
                            </td>
                          </tr>
                          <tr className='border border-spacing-3 border-gray-200'>
                            <td className='py-2 px-3' align='left'>
                              <label htmlFor=''>동일 IP회원가능 시간 (분단위)</label>
                            </td>
                            <td className='py-2 px-3' align='left'>
                              <div className='w-full flex flex-col justify-start items-start gap-2'>
                                <input type='text' className='px-3 py-2 rounded-md border border-spacing-3' />
                                <p>* 비밀번호 복잡도 사용시 7자리 이상 숫자 2자리 포함되어야 가능</p>
                              </div>
                            </td>
                          </tr>
                          <tr className='border border-spacing-3 border-gray-200'>
                            <td className='py-2 px-3' align='left'>
                              <label htmlFor=''>오프라인총판에서 회원등록후 회원상태	</label>
                            </td>
                            <td className='py-2 px-3' align='left'>
                                <select className='w-full py-2 px-3 rounded-md border border-spacing-2'>
                                  <option>승인대기중</option>
                                  <option>정상 이용가능</option>
                                </select>
                            </td>
                          </tr>
                          <tr className='border border-spacing-3 border-gray-200'>
                            <td className='py-2 px-3' align='left'>
                              <label htmlFor=''>총판 등록/가입 중복체크</label>
                            </td>
                            <td className='py-2 px-3' align='left'>
                                <select className='w-full py-2 px-3 rounded-md border border-spacing-2'>
                                  <option>중복체크(X)</option>
                                  <option>핸드폰</option>
                                  <option>계좌번호</option>
                                  <option>핸드폰 + 계좌번호</option>
                                </select>
                            </td>
                          </tr>
                          <tr className='border border-spacing-3 border-gray-200'>
                            <td className='py-2 px-3' align='left'>
                              <label htmlFor=''>총판 등록/가입시 레벨</label>
                            </td>
                            <td className='py-2 px-3' align='left'>
                                <select className='w-full py-2 px-3 rounded-md border border-spacing-2'>
                                  {RenderLevels()}
                                </select>
                            </td>
                          </tr>
                          <tr className='border border-spacing-3 border-gray-200'>
                            <td className='py-2 px-3' align='left'>
                              <label htmlFor=''>총판 가입후 상태</label>
                            </td>
                            <td className='py-2 px-3' align='left'>
                                <select className='w-full py-2 px-3 rounded-md border border-spacing-2'>
                                  <option>정상이용가능</option>
                                  <option>승인대기중</option>
                                </select>
                            </td>
                          </tr>
                          <tr className='border border-spacing-3 border-gray-200'>
                            <td className='py-2 px-3' align='left'>
                              <label htmlFor=''>회원가입시 출석체크 사용</label>
                            </td>
                            <td className='py-2 px-3' align='left'>
                                <SwitchButton onClick={() => handleClick('use_attendance_check_when_registering_as_a_member', 0)} 
                                switchState={switchState['use_attendance_check_when_registering_as_a_member']} />
                            </td>
                          </tr>
                          <tr className='border border-spacing-3 border-gray-200'>
                            <td className='py-2 px-3' align='left'>
                              <label htmlFor=''>회원가입시 룰렛 사용</label>
                            </td>
                            <td className='py-2 px-3' align='left'>
                                <SwitchButton onClick={() => handleClick('use_roulette_when_signing_up_for_membership', 0)} 
                                switchState={switchState['use_roulette_when_signing_up_for_membership']} />
                            </td>
                          </tr>
                          <tr className='border border-spacing-3 border-gray-200'>
                            <td className='py-2 px-3' align='left'>
                              <label htmlFor=''>회원가입시 Gold사용 설정</label>
                            </td>
                            <td className='py-2 px-3' align='left'>
                                <SwitchButton onClick={() => handleClick('gold_usage_setting_when_registering_as_a_member', 0)} 
                                switchState={switchState['gold_usage_setting_when_registering_as_a_member']} />
                            </td>
                          </tr>
                          <tr className='border border-spacing-3 border-gray-200'>
                            <td className='py-2 px-3' align='left'>
                              <label htmlFor=''>회원가입시 가상계좌 사용</label>
                            </td>
                            <td className='py-2 px-3' align='left'>
                                <SwitchButton onClick={() => handleClick('use_a_virtual_account_when_registering_as_a_member', 0)} 
                                switchState={switchState['use_a_virtual_account_when_registering_as_a_member']} />
                            </td>
                          </tr>
                          <tr className='border border-spacing-3 border-gray-200'>
                            <td className='py-2 px-3' align='left'>
                              <label htmlFor=''>회원가입시 롤링자동승인 설정</label>
                            </td>
                            <td className='py-2 px-3' align='left'>
                                <SwitchButton onClick={() => handleClick('setting_up_rolling_automatic_approval_when_registering_as_a_member', 0)} 
                                switchState={switchState['setting_up_rolling_automatic_approval_when_registering_as_a_member']} />
                            </td>
                          </tr>
                          <tr className='border border-spacing-3 border-gray-200'>
                            <td className='py-2 px-3' align='left'>
                              <label htmlFor=''>회원가입시 가입코드 설정</label>
                            </td>
                            <td className='py-2 px-3' align='left'>
                                <SwitchButton onClick={() => handleClick('set_registration_code_when_registering_as_a_member', 0)} 
                                switchState={switchState['set_registration_code_when_registering_as_a_member']} />
                            </td>
                          </tr>
                          <tr className='border border-spacing-3 border-gray-200'>
                            <td className='py-2 px-3' align='left'>
                              <label htmlFor=''>회원가입시 초기롤링% (상위보다 클 경우 0으로 처리)</label>
                            </td>
                            <td className='py-2 px-3' align='left'>
                                <div className='w-full flex flex-col items-start justify-start gap-3'> 
                                  <div className='flex flex-row items-center justify-start gap-3'>
                                    <div className='w-full flex flex-col items-center justify-start'>
                                      <label htmlFor=''>라이브</label>
                                      <input type='number' step={0.1} className='px-3 py-2 border border-spacing-2 border-gray-200 rounded-md' />
                                    </div>
                                    <div className='w-full flex flex-col items-center justify-start'>
                                      <label htmlFor=''>라이브</label>
                                      <input type='number' step={0.1} className='px-3 py-2 border border-spacing-2 border-gray-200 rounded-md' />
                                    </div>
                                  </div>
                                  <div className='flex flex-row items-center justify-start gap-3'>
                                    <div className='w-full flex flex-col items-center justify-start'>
                                      <label htmlFor=''>스포츠 단폴</label>
                                      <input type='number' step={0.1} className='px-3 py-2 border border-spacing-2 border-gray-200 rounded-md' />
                                    </div>
                                    <div className='w-full flex flex-col items-center justify-start'>
                                      <label htmlFor=''>스포츠 두폴</label>
                                      <input type='number' step={0.1} className='px-3 py-2 border border-spacing-2 border-gray-200 rounded-md' />
                                    </div>
                                    <div className='w-full flex flex-col items-center justify-start'>
                                      <label htmlFor=''>스포츠 3폴</label>
                                      <input type='number' step={0.1} className='px-3 py-2 border border-spacing-2 border-gray-200 rounded-md' />
                                    </div>
                                  </div>
                                  <div className='flex flex-row items-center justify-start gap-3'>
                                    <div className='w-full flex flex-col items-center justify-start'>
                                      <label htmlFor=''>스포츠 4폴</label>
                                      <input type='number' step={0.1} className='px-3 py-2 border border-spacing-2 border-gray-200 rounded-md' />
                                    </div>
                                    <div className='w-full flex flex-col items-center justify-start'>
                                      <label htmlFor=''>스포츠 5폴</label>
                                      <input type='number' step={0.1} className='px-3 py-2 border border-spacing-2 border-gray-200 rounded-md' />
                                    </div>
                                    <div className='w-full flex flex-col items-center justify-start'>
                                      <label htmlFor=''>스포츠 다폴</label>
                                      <input type='number' step={0.1} className='px-3 py-2 border border-spacing-2 border-gray-200 rounded-md' />
                                    </div>
                                  </div>
                                  <div className='flex flex-row items-center justify-start gap-3'>
                                    <div className='w-full flex flex-col items-center justify-start'>
                                      <label htmlFor=''>MGM 홀짝</label>
                                      <input type='number' step={0.1} className='px-3 py-2 border border-spacing-2 border-gray-200 rounded-md' />
                                    </div>
                                    <div className='w-full flex flex-col items-center justify-start'>
                                      <label htmlFor=''>MGM 바카라</label>
                                      <input type='number' step={0.1} className='px-3 py-2 border border-spacing-2 border-gray-200 rounded-md' />
                                    </div>
                                    <div className='w-full flex flex-col items-center justify-start'>
                                      <label htmlFor=''>MGM 고스톱</label>
                                      <input type='number' step={0.1} className='px-3 py-2 border border-spacing-2 border-gray-200 rounded-md' />
                                    </div>
                                  </div>
                                  <div className='flex flex-row items-center justify-start gap-3'>
                                    <div className='w-full flex flex-col items-center justify-start'>
                                      <label htmlFor=''>주사위-Green</label>
                                      <input type='number' step={0.1} className='px-3 py-2 border border-spacing-2 border-gray-200 rounded-md' />
                                    </div>
                                    <div className='w-full flex flex-col items-center justify-start'>
                                      <label htmlFor=''>주사위-Red</label>
                                      <input type='number' step={0.1} className='px-3 py-2 border border-spacing-2 border-gray-200 rounded-md' />
                                    </div>
                                    <div className='w-full flex flex-col items-center justify-start'>
                                      <label htmlFor=''>주사위-Blue</label>
                                      <input type='number' step={0.1} className='px-3 py-2 border border-spacing-2 border-gray-200 rounded-md' />
                                    </div>
                                  </div>
                                  <div className='flex flex-row items-center justify-start gap-3'>
                                    <div className='w-full flex flex-col items-center justify-start'>
                                      <label htmlFor=''>터치게임-카드</label>
                                      <input type='number' step={0.1} className='px-3 py-2 border border-spacing-2 border-gray-200 rounded-md' />
                                    </div>
                                  </div>
                                </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className='flex flex-row items-center justify-center gap-2 w-full'>
                        <button className='px-3 py-1.5 text-white bg-sky-700 border border-spacing-2 rounded-md'>변경</button>
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

const RenderLevels = () => {
  const Levels = [];
  for(let l = 0; l < 12; l++){
    Levels.push(
      <option value={l+1}>{l+1}레벨</option>
    )
  }
  Levels.push(<option value={'vip1'}>Vip1</option>)
  Levels.push( <option value={'vip1'}>Vip2</option>)
  Levels.push( <option value={'premium'}>premium</option>)

  return Levels;
}