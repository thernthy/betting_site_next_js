import { brainColor } from '@/styles/theme/brain_color/color';
import * as React from 'react';

export interface HandleCategoryProp{
    category:{id:Number, title:String}[];
    acitve_category:Number;
    handleCategoryChage:(site_id: Number) => void
}

export default function  RenderCategory({category, acitve_category, handleCategoryChage}:HandleCategoryProp){
    return(
        <ul className='flex flex-row bg-sky-500 flex-wrap items-center justify-start gap-2 py-2  px-2 transition-all delay-150'>
            {
                category?.map((item, index)=>{
                    return <li className={`px-3 py-1.5 transition-all delay-150 cursor-pointer hover:border border-1  rounded-md text-white ${acitve_category && acitve_category === item.id? 'border border-1' : 'bg-sky-400'}`} 
                          onClick={()=>handleCategoryChage(item.id)} key={index+1}>
                        {item.title}
                    </li>
                })
            }
        </ul>
    )
}