import * as React from 'react';


export interface StatusInsterfaceProp{
    Status_text:String;
    tailwind_class_desing:String[];
    text_size?:Number;
    bgColorName?:string;
}

export function StatusComponent({Status_text, tailwind_class_desing, text_size, bgColorName}:StatusInsterfaceProp){
    const styles = {
        fontSize: text_size ? `${text_size}px` : '',
        backgroundColor: bgColorName ? `${bgColorName}` : '',
    }
    return(
            <span className={`${tailwind_class_desing.map(styleOf => styleOf).join(' ')}`} style={styles}>
                {Status_text}
            </span>
    )
}