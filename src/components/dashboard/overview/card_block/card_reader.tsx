"use client"

import * as React from 'react';
import CustomCardcomponent from './card';


export function Cardreader(): React.JSX.Element {
//   const TrendIcon = trend === 'up' ? ArrowUpIcon : ArrowDownIcon;
//   const trendColor = trend === 'up' ? 'var(--mui-palette-success-main)' : 'var(--mui-palette-error-main)';

  return (
    <div className='flex flex-row items-center md:justify-start lg:justify-between gap-2 flex-wrap'>
        <CustomCardcomponent  
        main_title="Membership amount"
        total_amount={100}
        data={[{subitlte:'Member Points', subData:'8,500 P'}, {subitlte:'Member Rolling', subData:'1,289 won'},]}
        />
        <CustomCardcomponent  
        main_title="Distributor holding amount"
        total_amount={100}
        data={[{subitlte:'Member Points', subData:'8,500 P'}]}
        />
        <CustomCardcomponent  
        main_title="Distributor Losing"
        total_amount={100}
        data={[{subitlte:'Member Points', subData:'8,500 P'}]}
        />
        <CustomCardcomponent  
        main_title="Bet amount"
        total_amount={100}
        data={[{subitlte:'Member Points', subData:'8,500 P'}]}
        />
    </div>
  );
}
