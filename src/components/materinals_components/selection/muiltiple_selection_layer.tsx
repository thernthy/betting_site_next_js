import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import '@/styles/theme/scroll_bar_style/scroll_bar_sm.css'

export interface MuiltipleSeletionDataInterface {
  id: number;
  username: string;
  children?: MuiltipleSeletionDataInterface[];
}

interface SelectionProps {
  data: MuiltipleSeletionDataInterface[];
  onSelect: (id: string) => void;
}

const SelectionLayer = ({ data, onSelect }:SelectionProps) => {
  const [openNodes, setOpenNodes] = React.useState<string[]>([]);
  const [selectedValue, setSelectedValue] = React.useState<string>('user name 1');
  const [handleSlectionData, setHandleSelctionData] = React.useState<boolean>(false)

  const handleSelect = (username: string) => {
    setSelectedValue(username);
    onSelect(username);
  };
  
  const selctionDataHandling = () =>{
    setHandleSelctionData(!handleSlectionData)
  }

  const toggleNode = (id: string) => {
    setOpenNodes((prevOpenNodes) =>
      prevOpenNodes.includes(id)
        ? prevOpenNodes.filter((nodeId) => nodeId !== id)
        : [...prevOpenNodes, id]
    );
  };

  const renderTree = (nodes: MuiltipleSeletionDataInterface[], depth: number = 0) => {
    return nodes.map((node) => (
      <React.Fragment key={node.id}>
        <MenuItem value={node.username} style={{ marginLeft: `${depth * 10}px` }} onClick={() => handleSelect(node.username)}>
          <IconButton>
           <DoubleArrowIcon />
          </IconButton>
          {node.username}
          {node.children && (
            <IconButton className=' z-10'
              size="small"
              onClick={() => toggleNode(node.id.toString())}
              aria-label={openNodes.includes(node.id.toString()) ? 'Collapse' : 'Expand'}
            >
              {openNodes.includes(node.id.toString()) ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
            </IconButton>
          )}
        </MenuItem>
        {node.children && openNodes.includes(node.id.toString()) && renderTree(node.children, depth + 1)}
      </React.Fragment>
    ));
  };

  return (
    <FormControl variant="standard" sx={{ m: 1,  minWidth: 120, padding:'0', position:'relative'}}>
      <MenuItem value={selectedValue} onClick={selctionDataHandling} sx={{borderBottom:'1px solid rgb(56 189 248)'}}>
        {selectedValue}
        <IconButton 
              size="small"
            >
           {handleSlectionData? <ArrowDropDownIcon /> : <ArrowRightIcon />} 
        </IconButton>
      </MenuItem>
      <div className={`scrollBar_sm absolute top-10 rounded-md z-10 max-h-80 bg-sky-400  overflow-x-auto ${!handleSlectionData? 'hidden' : ''}`}>
        { renderTree(data) }
      </div>
    </FormControl>
  );
};

export default SelectionLayer;
