'use client';

import * as React from 'react';
import RouterLink from 'next/link';
import { usePathname } from 'next/navigation';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ArrowSquareUpRight as ArrowSquareUpRightIcon } from '@phosphor-icons/react/dist/ssr/ArrowSquareUpRight';
import { CaretUpDown as CaretUpDownIcon } from '@phosphor-icons/react/dist/ssr/CaretUpDown';
import '@/styles/globlestyle/index.css';
import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';
import { isNavItemActive } from '@/lib/is-nav-item-active';
import { Logo } from '@/components/core/logo';
import { ArrowBendDoubleUpRight } from '@phosphor-icons/react/dist/ssr/ArrowBendDoubleUpRight';
import { navItems } from './config';
import { navIcons } from './nav-icons';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { Menues } from '../../../db/menu_db'
import Link from 'next/link';
import { brainColor } from '@/styles/theme/brain_color/color';

export function SideNav(): React.JSX.Element {
  const pathname = usePathname();
  const [openMenuId, setOpenMenuId] = React.useState(null);
  const handleClick = (id:any) => {
    setOpenMenuId(id === openMenuId ? null : id);
  };

  return (
    <Box 
      sx={{
        '--SideNav-background': 'var(--mui-palette-neutral-950)',
        '--SideNav-color': 'var(--mui-palette-common-white)',
        '--NavItem-color': 'var(--mui-palette-neutral-300)',
        '--NavItem-hover-background': 'rgba(255, 255, 255, 0.04)',
        '--NavItem-active-background': 'var(--mui-palette-primary-main)',
        '--NavItem-active-color': 'var(--mui-palette-primary-contrastText)',
        '--NavItem-disabled-color': 'var(--mui-palette-neutral-500)',
        '--NavItem-icon-color': 'var(--mui-palette-neutral-400)',
        '--NavItem-icon-active-color': 'var(--mui-palette-primary-contrastText)',
        '--NavItem-icon-disabled-color': 'var(--mui-palette-neutral-600)',
        // bgcolor: 'var(--SideNav-background)',
        bgcolor: 'rgb(30 41 59)',
        color: 'var(--SideNav-color)',
        display: { xs: 'none', lg: 'flex' },
        flexDirection: 'column',
        height: '100%',
        left: 0,
        maxWidth: '100%',
        position: 'fixed',
        scrollbarWidth: 'none',
        top: 0,
        width: 'var(--SideNav-width)',
        zIndex: 'var(--SideNav-zIndex)',
        '&::-webkit-scrollbar': { display: 'none' },
      }}
    >
      <Stack spacing={2} sx={{ p: 3 }}>
        
        {/* <Box component={RouterLink} href={paths.home} sx={{ display: 'inline-flex' }}>
          <Logo color="light" height={32} width={122} />
        </Box> */}
        <Box
          sx={{
            alignItems: 'center',
            backgroundColor: 'var(--mui-palette-neutral-950)',
            border: '1px solid var(--mui-palette-neutral-700)',
            borderRadius: '12px',
            cursor: 'pointer',
            display: 'flex',
            p: '4px 12px',
          }}
        >
          <Box sx={{ flex: '1 1 auto' }}>
            <Typography color="var(--mui-palette-neutral-400)" variant="body2">
              Admind Dashboard
            </Typography>
            <Typography color="inherit" variant="subtitle1">
              thernthy
            </Typography>
          </Box>
          <CaretUpDownIcon />
        </Box>
      </Stack>
      <Divider sx={{ borderColor: 'var(--mui-palette-neutral-700)' }} />
      <Box component="nav" sx={{ flex: '1 1 auto', }} className='overflow-x-auto navBar_scrollBar'>
        {renderNavItems({ pathname, items: navItems })}
        {Menues?.map((ListingData, index)=>(
          <List
            sx={{ width: '100%', maxWidth: 360, p:0}}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" style={{background:'rgb(51 65 85)'}} id="nested-list-subheader" key={index}>
                {ListingData.main_menu_title}
              </ListSubheader>
            }
            key={index}
          >
            {ListingData.menus_list?.map((submenueList, indexS)=>(
                <React.Fragment key={submenueList.id}>                
                <ListItemButton onClick={()=>handleClick(submenueList.id)} key={submenueList.id}>
                    <ListItemIcon className='text-xl'>
                       {submenueList.submenu_icon}{/* <InboxIcon /> */}
                    </ListItemIcon>
                  <ListItemText className='whitespace-nowrap' primary={submenueList.submenu_title} />
                    {openMenuId === submenueList.id? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={openMenuId === submenueList.id} timeout="auto" unmountOnExit>
                  {submenueList.subMenu_list?.map((menue, index) => (
                      <List component="div" disablePadding key={menue.menue_list_id}>
                          <ListItemButton sx={{ pl:2, background:`${pathname && pathname === menue.menue_list_path? brainColor.BranBgActive : ''}`}} >
                            <ListItemIcon>
                             <ArrowBendDoubleUpRight className='text-md text-sky-400 ml-3' />
                            </ListItemIcon>
                              <Link href={menue.menue_list_path} passHref>
                                  <ListItemText primary={menue.menue_list_title} />
                              </Link>
                          </ListItemButton>
                      </List>
                  ))}
                </Collapse>
                </React.Fragment>
            ))
            }
          </List>
          ))

        }
      </Box>
      <Divider sx={{ borderColor: 'var(--mui-palette-neutral-700)' }} />
      <Stack spacing={2} sx={{ pt: '12px', pl:'10px' }}>
        <div>
          <Typography color="var(--mui-palette-neutral-100)" variant="subtitle2">
          https://comic-001.kotv-001.com
          </Typography>
          <Typography color="var(--mui-palette-neutral-400)" variant="body2">
           desing by: thern thy
          </Typography>
        </div>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box
            component="img"
            alt="Pro version"
            src="/assets/devias-kit-pro.png"
            sx={{ height: 'auto', width: '160px' }}
          />
        </Box>
        {/* <Button
          component="a"
          endIcon={<ArrowSquareUpRightIcon fontSize="var(--icon-fontSize-md)" />}
          fullWidth
          href="https://material-kit-pro-react.devias.io/"
          sx={{ mt: 2 }}
          target="_blank"
          variant="contained"
        >
          Pro version
        </Button> */}
      </Stack>
    </Box>
  );
}

function renderNavItems({ items = [], pathname }: { items?: NavItemConfig[]; pathname: string }): React.JSX.Element {
  const children = items.reduce((acc: React.ReactNode[], curr: NavItemConfig): React.ReactNode[] => {
    const { key, ...item } = curr;

    acc.push(<NavItem key={key} pathname={pathname} {...item} />);

    return acc;
  }, []);

  return (
    <Stack component="ul" spacing={1} sx={{ listStyle: 'none', m: 0, p: 0 }}>
      {children}
    </Stack>
  );
}

interface NavItemProps extends Omit<NavItemConfig, 'items'> {
  pathname: string;
}




function NavItem({ disabled, external, href, icon, matcher, pathname, title }: NavItemProps): React.JSX.Element {
  const active = isNavItemActive({ disabled, external, href, matcher, pathname });
  const Icon = icon ? navIcons[icon] : null;
  return (
    <List
      sx={{ width: '100%', maxWidth: 360, p:0}}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
      <ListItemButton
        component={href ? (external ? 'a' : RouterLink) : 'div'}
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer' : undefined}
        disabled={disabled}
        sx={{
          alignItems: 'center',
          color: 'var(--NavItem-color)',
          cursor: 'pointer',
          display: 'flex',
          flex: '0 0 auto',
          gap: 3,
          position: 'relative',
          textDecoration: 'none',
          whiteSpace: 'nowrap',
          ...(disabled && {
            bgcolor: 'var(--NavItem-disabled-background)',
            color: 'var(--NavItem-disabled-color)',
            cursor: 'not-allowed',
          }),
          ...(active && { bgcolor: 'var(--NavItem-active-background)', color: 'var(--NavItem-active-color)' }),
        }}
      >
        <Box sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center', flex: '0 0 auto' }}>
          {Icon ? (
            <Icon
              fill={active ? 'var(--NavItem-icon-active-color)' : 'var(--NavItem-icon-color)'}
              fontSize="var(--icon-fontSize-md)"
              weight={active ? 'fill' : undefined}
            />
          ) : null}
        </Box>

        <Box sx={{ flex: '1 1 auto' }}>
          <Typography
            component="span"
            sx={{ color: 'inherit', fontSize: '0.875rem', fontWeight: 500, lineHeight: '28px' }}
          >
            {title}
          </Typography>
        </Box>
      </ListItemButton>
    </List>
  );
}
