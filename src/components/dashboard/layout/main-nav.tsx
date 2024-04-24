'use client';

import React, { useState, useEffect, useRef } from 'react';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import { Bell as BellIcon } from '@phosphor-icons/react/dist/ssr/Bell';
import { List as ListIcon } from '@phosphor-icons/react/dist/ssr/List';
import { MagnifyingGlass as MagnifyingGlassIcon } from '@phosphor-icons/react/dist/ssr/MagnifyingGlass';
import { Users as UsersIcon } from '@phosphor-icons/react/dist/ssr/Users';
import { ArrowRight as ArrowRightIcon } from '@phosphor-icons/react/dist/ssr/ArrowRight';
import { ArrowLeft as ArrowLeftIcon } from '@phosphor-icons/react/dist/ssr/ArrowLeft';
import { usePopover } from '@/hooks/use-popover';

import { MobileNav } from './mobile-nav';
import { UserPopover } from './user-popover';
import Header_Nave from '../overview/header_nave';

export function MainNav(): React.JSX.Element {
  const [openNav, setOpenNav] = React.useState<boolean>(false);
  const userPopover = usePopover<HTMLDivElement>();
  const optoinWrapper = useRef<HTMLUListElement>(null)
  function haneleScrollLeft(){
    if (optoinWrapper.current) {
      const scrollLeft = optoinWrapper.current.scrollLeft - 150;
      optoinWrapper.current.scrollTo({
        left: scrollLeft,
        behavior: 'smooth' // Smooth scrolling behavior
      });
    }
  }
  function haneleScrollRight(){
    if (optoinWrapper.current) {
      const scrollLeft = optoinWrapper.current.scrollLeft + 150;
      optoinWrapper.current.scrollTo({
        left: scrollLeft,
        behavior: 'smooth' 
      });
    }
    console.log(optoinWrapper)
  }
  return (
    <React.Fragment>
      <Box
        component="header"
        sx={{
          borderBottom: '1px solid var(--mui-palette-divider)',
          backgroundColor: 'var(--mui-palette-background-paper)',
          position: 'sticky',
          display:'flex',
          flexDirection:'row',
          padding:'10px 0',
          justifyContent:'space-between',
          top: 0,
          zIndex: 'var(--mui-zIndex-appBar)',

        }}
      >
        <div className='flex flex-row items-center justify-between w-full '>
          <Stack sx={{ alignItems: 'center' }} direction="row" spacing={2}>
            <IconButton
              onClick={(): void => {
                setOpenNav(true);
              }}
              sx={{ display: { lg: 'none' } }}
            >
              <ListIcon />
            </IconButton>
            <Tooltip title="Search">
              <IconButton>
                <MagnifyingGlassIcon />
              </IconButton>
            </Tooltip>
          </Stack>
            <div className=' px-2 text-sky-400 h-full  flex flex-row items-center  hover:text-white' onClick={haneleScrollLeft}><ArrowLeftIcon /></div>
            <ul className='flex relative flex-row whitespace-nowrap gap-4 overflow-x-auto snap-x snap-mandatory px-3' style={{scrollbarWidth:'none'}} ref={optoinWrapper}>
              <li className='underline px-2 snap-center pt-1 rounded-md'>가상게임%20베팅내역</li>
              <li className='underline px-2 snap-center pt-1 rounded-md'>가상게임%20베팅내역</li>
              <li className='underline px-2 snap-center pt-1 rounded-md'>가상게임%20베팅내역</li>
              <li className='underline px-2 snap-center pt-1 rounded-md'>가상게임%20베팅내역</li>
              <li className='underline px-2 snap-center pt-1 rounded-md'>가상게임%20베팅내역</li>
              <li className='underline px-2 snap-center pt-1 rounded-md'>가상게임%20베팅내역</li>
              <li className='underline px-2 snap-center pt-1 rounded-md'>가상게임%20베팅내역</li>
              <li className='underline px-2 snap-center pt-1 rounded-md'>가상게임%20베팅내역</li>
              <li className='underline px-2 snap-center pt-1 rounded-md'>가상게임%20베팅내역</li>
              <li className='underline px-2 snap-center pt-1 rounded-md'>가상게임%20베팅내역</li>
            </ul>
            <div className=' px-2 text-sky-400 h-full  flex flex-row items-center  hover:text-white' onClick={haneleScrollRight}><ArrowRightIcon /></div>

          <Stack
            direction="row"
            spacing={2}
            sx={{ alignItems: 'center', justifyContent: 'space-between', minHeight: '64px', px: 2 }}
          >
            <Stack sx={{ alignItems: 'center' }} direction="row" spacing={2}>
              <Tooltip title="Contacts">
                <IconButton>
                  <UsersIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Notifications">
                <Badge badgeContent={4} color="success" variant="dot">
                  <IconButton>
                    <BellIcon />
                  </IconButton>
                </Badge>
              </Tooltip>
              <Avatar
                onClick={userPopover.handleOpen}
                ref={userPopover.anchorRef}
                src="/assets/avatar.png"
                sx={{ cursor: 'pointer' }}
              />
            </Stack>
          </Stack>
        </div>
      </Box>

      <UserPopover anchorEl={userPopover.anchorRef.current} onClose={userPopover.handleClose} open={userPopover.open} />
      <MobileNav
        onClose={() => {
          setOpenNav(false);
        }}
        open={openNav}
      />
    </React.Fragment>
  );
}
