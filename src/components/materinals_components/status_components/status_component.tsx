import * as React from 'react';


export interface StatusInsterfaceProp{
    Status_text:String;
    tailwind_class_desing:String[];
    text_size:Number;
}

export function StatusComponent({Status_text, tailwind_class_desing, text_size}:StatusInsterfaceProp){
    return(
            <span className={`${tailwind_class_desing.map(styleOf => styleOf).join(' ')}`} style={{fontSize:`${text_size}px`}}>
                {Status_text}
            </span>
    )
}