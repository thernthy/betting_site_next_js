'use client'
import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight as ArrowRightIcon } from '@phosphor-icons/react/dist/ssr/ArrowRight';
import { ArrowLeft as ArrowLeftIcon } from '@phosphor-icons/react/dist/ssr/ArrowLeft';
import Button from '@mui/material/Button';
import { Tab } from '@mui/base/Tab';
import { TabsList } from '@mui/base/TabsList';
import { TabPanel } from '@mui/base/TabPanel';
import { Tabs } from '@mui/base/Tabs';
import { Budget } from './budget';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import { Card } from '@mui/material';
import { Box } from '@mui/system';
const bettingHistory = [
    "사이트1",
    "라이브 베팅내역",
    "슬롯 베팅내역",
    "미니게임 베팅내역",
    "스포츠 베팅내역",
    "가상게임 베팅내역",
    "로투스 베팅내역",
    "MGM 베팅내역",
    "터치게임 베팅내역",
    "오늘의 통계",
    "2024-04-23 16:26:57"
];
export default function Header_Nave(){
  const optoinWrapper = useRef<HTMLDivElement>(null)
  function haneleScrollLeft(){
    if (optoinWrapper.current) {
      const scrollLeft = optoinWrapper.current.scrollLeft - 100;
      optoinWrapper.current.scrollTo({
        left: scrollLeft,
        behavior: 'smooth' // Smooth scrolling behavior
      });
    }
  }
  function haneleScrollRight(){
    if (optoinWrapper.current) {
      const scrollLeft = optoinWrapper.current.scrollLeft + 100;
      optoinWrapper.current.scrollTo({
        left: scrollLeft,
        behavior: 'smooth' 
      });
    }
  }

  return (
    <Card style={{ display: "flex", flexDirection: 'row', alignItems: "center", justifyContent: 'space-around' }}>
     <Button endIcon={<ArrowLeftIcon />} onClick={haneleScrollLeft}>
      </Button>
      <div id='menue_contailer' style={{ overflowX: 'auto', whiteSpace: 'nowrap', padding: '15px', scrollbarWidth: 'none' }} 
      className='snap-x snap-mandatory' ref={optoinWrapper}>
        <Tabs defaultValue={1}>
          <TabsList style={{ display: "inline-flex", gap: "10px" }}>
            {bettingHistory?.map((emelent, index) => (
              <Tab key={index} value={index} 
              className='bg-sky-500 border border-x-2 border-white px-3 pt-2 pb-1 rounded-full flex flex-row items-center snap-center'
              >
                <Link href={`/dashboard/${emelent}`} style={{ color: 'white' }}>
                  {emelent}
                </Link>
              </Tab>
            ))}
          </TabsList>
        </Tabs>
      </div>
     <Button endIcon={<ArrowRightIcon />} onClick={haneleScrollRight}>

     </Button>
    </Card>
  );
}

