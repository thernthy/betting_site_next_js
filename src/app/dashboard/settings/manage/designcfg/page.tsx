'use client';
import * as React from 'react';
import { usePathname } from 'next/navigation';
import Grid from '@mui/material/Unstable_Grid2';
import { Card, CardContent, CardHeader, Chip, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField} from '@mui/material';
import { filterPathName } from '@/app/meta/metadata';
import { SelectChangeEvent } from '@mui/material/Select';
import { display, minWidth } from '@mui/system';
import { SiteSectionData } from './selectionSite_Data';
import MinHeightTextarea from './textarea';
import SelectionLayer from '@/components/materinals_components/selection/muiltiple_selection_layer';
import { MuiltipleUsersLayer } from '@/db/multiple_layer_users';
import NumberInput from '@/components/materinals_components/inputFilde/inputNumber';
import { SwitchButton } from './switchButton';
import  { Games } from './gameData'
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
          {Games.map((game:any) => (
              <Grid key={game.id} xl={4} lg={3} md={2} sm={12}>
                <div className='flex flex-col items-center justify-center shadow-md rounded-md gap-4 pb-3'>
                  <div className='bg-sky-500 text-white px-2 w-full py-1.5'>
                    {game.name}
                  </div>
                  <FormControl sx={{marginTop:'2rem', display:'flex', flexDirection:'column', alignItems:'start', justifyContent:'space-around', gap:'1rem'}}>
                    {game.setting.map((setting:any, index:number) => (
                      <div key={index} className='flex flex-row items-center justify-round gap-2 px-4'>
                        {setting}
                        <SwitchButton onClick={() => handleClick(game.id, game.name, setting)} 
                            switchState={switchState[`${game.id}_${game.name}_${setting}`]} 
                        />
                      </div>
                    ))}
                  </FormControl>
                  <button type='button' className='w-3/6 px-4 py-1 bg-sky-600 rounded-full text-white'>삭제</button>
                </div>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
  );
}
