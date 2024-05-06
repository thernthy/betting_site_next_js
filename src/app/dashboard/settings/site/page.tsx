'use client';
import * as React from 'react';
import { usePathname } from 'next/navigation';
import Grid from '@mui/material/Unstable_Grid2';
import { Card, CardContent, CardHeader, Chip, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select } from '@mui/material';
import { filterPathName } from '@/app/meta/metadata';
import { SelectChangeEvent } from '@mui/material/Select';
import { minWidth } from '@mui/system';
import { SiteSectionData } from './selectionSite_Data';

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
            <Grid container spacing={3}>
              <Grid lg={6} sm={12} >
                <div className='flex flex-row itmes-center'>
                <FormControl>
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
                  </FormControl>
                </div>
              </Grid>
              <Grid lg={6} sm={12}>
                
              </Grid>
            </Grid>
        </CardContent>
      </Card>
  );
}
