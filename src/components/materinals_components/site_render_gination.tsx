import { Card } from '@mui/material';
import * as React from 'react';

export interface siteRenderProp {
    siteDatas:{
        site_id: Number;
        site_name: String;
        site_path: String;
    }[];
    acitve:Number;
    shadow:Boolean;
    handleSiteChange: (site_id: number) => void;
}
export function SiteRender({siteDatas, shadow, acitve, handleSiteChange}:siteRenderProp){
    return(
        <ul className='flex flex-row itmes-center flex-wrap py-1'>
            {siteDatas?.map((element, index)=>(
                <li className={`px-3 py-1 black rounded-full mx-2 cursor-pointer border border-1 border-sky-400 
                    ${shadow? 'shadow-md':''}
                    ${acitve === element.site_id? 'bg-sky-500 text-white' : ''}
                `} onClick={() => handleSiteChange(Number(element.site_id))} key={index}>
                    {element.site_name}
                </li>
            ))}
        </ul>
    )
}