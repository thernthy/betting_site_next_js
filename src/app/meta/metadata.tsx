
import type { Metadata as  Metadatas} from 'next';
import { config } from '@/config';
import { Menues } from '@/db/menu_db';
import Link from 'next/link';

export function filterPathName(currentPath: string) {
    
    let pageTitle = '';
    let pathDection = '';
    Menues.forEach(list => {
        list.menus_list.forEach(sub => {
            sub.subMenu_list.forEach(element => {
                if (currentPath === element.menue_list_path) {
                    pageTitle = element.menue_list_title;
                    pathDection = list.main_menu_title
                }
            });
        });
    });

   return (`Dashboard|${pathDection}|${pageTitle}`)
}