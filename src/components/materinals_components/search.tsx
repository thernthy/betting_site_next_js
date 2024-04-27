import * as React from 'react';
import { MagnifyingGlass as MagnifyingGlassIcon } from '@phosphor-icons/react/dist/ssr/MagnifyingGlass';

export function SearchComponent(){
    return(
        <div className='flex flex-row items-center gap-2 border border-1 border-sky-400 rounded-full'>
            <input type="text" placeholder='ID/Name' className='px-2 py-3 bg-transparent border-none focus:outline-none outline-none rounded-full'/>
            <div className='py-4 px-4 translate-x-1 bg-sky-400 rounded-full hover:bg-transparent hover:text-sky-400 delay-200 text-white'>
                <MagnifyingGlassIcon />
            </div>
        </div>
    )
}