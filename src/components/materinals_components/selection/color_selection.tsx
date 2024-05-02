import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export interface DynamicSelectionDataProp{
    slectionData:{selection_id:number, selection_title:string}[];
    seleted_data?:string;
}


export const  ColorSelection = ({slectionData, seleted_data}:DynamicSelectionDataProp) => {
  const [selectedLevel, setSeletedLevel] = React.useState<string>(seleted_data ? seleted_data :'color selction')
  const handleChange = (event: SelectChangeEvent) => {
    setSeletedLevel(event.target.value as string);
  };
  return (
    <div>
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120, padding:'0' }}>
        {/* <InputLabel id="demo-simple-select-standard-label">Level</InputLabel> */}
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={selectedLevel ? selectedLevel : ''}
          
          onChange={handleChange}
          label="Level"
          
        >{slectionData?.map((color, index:number)=>{
            return (
                <MenuItem value={color.selection_title} key={index} >
                    {/* <em className='ml-2 text-white'>{color.selection_title}</em> */}
                    <div className='mx-1 w-20 h-4 mt-0.5 rounded-md' style={{backgroundColor:`${color.selection_title}`}}></div>
                </MenuItem>

            )
        })

        }
        </Select>
      </FormControl>
    </div>
  )
} 