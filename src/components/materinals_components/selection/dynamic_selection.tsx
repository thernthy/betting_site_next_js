import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export interface DynamicSelectionDataProp{
    slectionData:{selection_id:number, selection_title:string}[];
    seleted_data?:string;
}


export const  DynamicSelection = ({slectionData, seleted_data}:DynamicSelectionDataProp) => {
  const [selectedLevel, setSeletedLevel] = React.useState<string>('select_level')
  const handleChange = () =>{
    return alert('notings!')
  }
  return (
    <div>
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120, padding:'0' }}>
        <InputLabel id="demo-simple-select-standard-label">Level</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={selectedLevel}
          onChange={handleChange}
          label="Level"
        >{slectionData?.map((level, index:number)=>{
            return (
                <MenuItem value={level.selection_id} key={index} >
                    <em>{level.selection_title}</em>
                </MenuItem>
            )
        })

        }
        </Select>
      </FormControl>
    </div>
  )
} 