import { Calculator as CalculatorIcon } from '@phosphor-icons/react/dist/ssr/Calculator';
import { Money as MoneyIcon } from '@phosphor-icons/react/dist/ssr/Money';
import { UserList as UserListIcon } from '@phosphor-icons/react/dist/ssr/UserList';
import { FolderUser as FolderUserIcon } from '@phosphor-icons/react/dist/ssr/FolderUser';
import { UserCircleGear as UserCircleGearIcon } from '@phosphor-icons/react/dist/ssr/UserCircleGear';
import { GearSix as GearSixIcon } from '@phosphor-icons/react/dist/ssr/GearSix';
import { GameController } from '@phosphor-icons/react/dist/ssr/GameController';
import { Note } from '@phosphor-icons/react/dist/ssr/Note';
import { Article, ChatDots, PaperPlaneRight } from '@phosphor-icons/react';
import { paths } from '@/paths';

export const Menues = [
    {
        id:1,
        main_menu_title:'Manage',
        menus_list:[
            {   id:1,
                submenu_title:'정산관리',
                submenu_icon:<CalculatorIcon className='text-1xl text-white' />,
                subMenu_list:[
                    { menue_list_id:1, menue_list_title: '롤링 전환내역(총판)', menue_list_path:`${paths.dashboard.manage.calc}/rolling_partner_req`,},
                    { menue_list_id:2, menue_list_title: '롤링 전환내역(회원)', menue_list_path: `${paths.dashboard.manage.calc}/rolling_req`,},
                    { menue_list_id:3, menue_list_title: '전체 포인트 내역 ', menue_list_path: `${paths.dashboard.manage.calc}/points`,},
                    { menue_list_id:4, menue_list_title: '전체 쿠폰 내역', menue_list_path: `${paths.dashboard.manage.calc}/pcoupon`,},
                    { menue_list_id:5, menue_list_title: '롤링 적립내역', menue_list_path: `${paths.dashboard.manage.calc}/rollings`,},
                    { menue_list_id:6 , menue_list_title: '루징 적립내역', menue_list_path: `${paths.dashboard.manage.calc}/losings`,},
                    { menue_list_id:7 , menue_list_title: '루징 정산내역', menue_list_path: `${paths.dashboard.manage.calc}/list`,},
                    { menue_list_id:8 , menue_list_title: '총판 정산통계(간략)', menue_list_path: `${paths.dashboard.manage.calc}/partner_simple`,},
                    { menue_list_id:9 , menue_list_title: '총판 정산통계(상세)', menue_list_path: `${paths.dashboard.manage.calc}/partner_detail`,},
                ]
            },
            {   id:2,
                submenu_title:'머니관리',
                submenu_icon:<MoneyIcon className='text-1xl text-white'/>,
                subMenu_list:[
                    { menue_list_id:10, menue_list_title: '총판 입금/출금 내역', menue_list_path: `${paths.dashboard.manage.cash}/partner_list`,},
                    { menue_list_id:11, menue_list_title: '회원 입금/출금 내역', menue_list_path: `${paths.dashboard.manage.cash}/user_list`,},
                    { menue_list_id:12, menue_list_title: '총판 머니이동 내역', menue_list_path: `${paths.dashboard.manage.cash}/partner_cash`,},
                    { menue_list_id:13, menue_list_title: '회원 머니이동 내역', menue_list_path: `${paths.dashboard.manage.cash}/user_cash`,},
                    { menue_list_id:14, menue_list_title: '통합 머니이동 내역', menue_list_path: `${paths.dashboard.manage.cash}/total`,},
                ]
            },
            {   id:3,
                submenu_title:'총판관리',
                submenu_icon:<UserListIcon className='text-1xl text-white' />,
                subMenu_list:[
                    { menue_list_id:15, menue_list_title: '총판 리스트', menue_list_path: `${paths.dashboard.manage.partner}/list`,},
                    { menue_list_id:16, menue_list_title: '총판 접속현황', menue_list_path: `${paths.dashboard.manage.partner}/online`,},
                    { menue_list_id:17, menue_list_title: '도메인 관리', menue_list_path: `${paths.dashboard.manage.partner}/domain`,},
                ]
            },
            {   id:4,
                submenu_title:'회원관리',
                submenu_icon:<FolderUserIcon className='text-1xl text-white' />,
                subMenu_list:[
                    { menue_list_id:18, menue_list_title: '회원 리스트', menue_list_path: `${paths.dashboard.manage.users}/list`,},
                    { menue_list_id:19, menue_list_title: '가입 승인대기', menue_list_path: `${paths.dashboard.manage.users}/waiting`,},
                    { menue_list_id:20, menue_list_title: '회원 접속현황', menue_list_path: `${paths.dashboard.manage.users}/online`,},
                    { menue_list_id:21, menue_list_title: '당일올인쿠폰', menue_list_path: `${paths.dashboard.manage.users}/allin`,},
                    { menue_list_id:22, menue_list_title: '로그인차단 회원', menue_list_path: `${paths.dashboard.manage.users}/ban`,},
                    { menue_list_id:23, menue_list_title: '페이백내역', menue_list_path: `${paths.dashboard.manage.users}/payback`,},
                    { menue_list_id:24, menue_list_title: '회원 활동내역', menue_list_path: `${paths.dashboard.manage.users}/log`,},
                ]
            },
            {   id:5,
                submenu_title:'관리자',
                submenu_icon:<UserCircleGearIcon className='text-1xl text-white' />,
                subMenu_list:[
                    { menue_list_id:25, menue_list_title: '관리자 리스트', menue_list_path: `${paths.dashboard.manage.manage}/list`,},
                    { menue_list_id:26, menue_list_title: '관리자 접속현황', menue_list_path: `${paths.dashboard.manage.manage}/online`,},
                    { menue_list_id:27, menue_list_title: '관리자 로그', menue_list_path: `${paths.dashboard.manage.manage}/log`,},
                ]
            },
            {   id:6,
                submenu_title:'설정',
                submenu_icon:<GearSixIcon className='text-1xl text-white' />,
                subMenu_list:[
                    { menue_list_id:28, menue_list_title: '사이트 설정', menue_list_path: '/setting/site',},
                    { menue_list_id:29, menue_list_title: '디자인 설정', menue_list_path: '/manage/setting/designcfg',},
                    { menue_list_id:30, menue_list_title: '도메인 설정', menue_list_path: '/manage/setting/domain',},
                    { menue_list_id:31, menue_list_title: '전역 설정', menue_list_path: '/manage/setting/config',},
                    { menue_list_id:32, menue_list_title: 'IP 설정', menue_list_path: '/manage/setting/ip',},
                    { menue_list_id:33, menue_list_title: '알람음 설정', menue_list_path: '/manage/setting/alarm',},
                    { menue_list_id:35, menue_list_title: '팝업 설정', menue_list_path: '/manage/setting/popup',},
                    { menue_list_id:36, menue_list_title: '화면공지 설정', menue_list_path: '/manage/setting/inline_notice',},
                    { menue_list_id:37, menue_list_title: '은행 설정', menue_list_path: '/manage/setting/bank',},
                    { menue_list_id:38, menue_list_title: '계좌 설정', menue_list_path: '/manage/setting/bank_guide',},
                    { menue_list_id:39, menue_list_title: '레벨별 설정', menue_list_path: '/manage/setting/charge',},
                    { menue_list_id:40, menue_list_title: '출석체크 / 룰렛 설정', menue_list_path: '/manage/setting/attendance',},
                    { menue_list_id:41, menue_list_title: '회원가입 설정', menue_list_path: '/manage/setting/join',},
                    { menue_list_id:42, menue_list_title: '파트너단계 관리', menue_list_path: '/manage/setting/partner_depth',},
                    { menue_list_id:43, menue_list_title: '알상태 관리', menue_list_path: '/manage/setting/api_family',},
                    { menue_list_id:45, menue_list_title: '가상계좌 API 관리', menue_list_path: '/manage/setting/coin_api',},
                    { menue_list_id:46, menue_list_title: 'FAKE 입금/출금', menue_list_path: '/manage/setting/fake',},
                ]
            },
            
        ]
    },
    {
        id:2,
        main_menu_title:'GAME',
        menus_list:[
            {   id:7,
                submenu_title:'카지노게임관리',
                submenu_icon:<GameController className='text-1xt text-white'/>,
                subMenu_list:[
                    { menue_list_id:47, menue_list_title: '라이브 게임 설정', menue_list_path: '/game/casino/live',},
                    { menue_list_id:48, menue_list_title: '슬롯 게임 설정', menue_list_path: '/game/casino/slot',},
                ]
            },
            {   id:8,
                submenu_title:'게임API관리',
                submenu_icon:<GameController className='text-1xt text-white'/>,
                subMenu_list:[
                    { menue_list_id:49, menue_list_title: 'Honor링크', menue_list_path: '/game/api/honor',},
                    { menue_list_id:50, menue_list_title: 'Swix', menue_list_path: '/game/api/swix',},
                    { menue_list_id:51, menue_list_title: 'KHAN', menue_list_path: '/game/api/khan',},
                    { menue_list_id:52, menue_list_title: 'Gold슬롯 V2', menue_list_path: '/game/api/goldlink_slot2',},
                    { menue_list_id:53, menue_list_title: 'DRAGON', menue_list_path: '/game/api/dragon',},
                ]
            },
            {   id:9,
                submenu_title:'미니게임관리',
                submenu_icon:<GameController className='text-1xt text-white'/>,
                subMenu_list:[
                    { menue_list_id:54, menue_list_title: '미니게임관리', menue_list_path: '/game/mini/list',},
                    { menue_list_id:55, menue_list_title: '미니게임API관리', menue_list_path: '/game/mini/api_list',},
                ]
            },
        ]
    },
    {
        id:3,
        main_menu_title:'BOARD',
        menus_list:[
            {   id:10,
                submenu_title:'게시판관리',
                submenu_icon:<Note className='text-1xl text-white'/>,
                subMenu_list:[
                    { menue_list_id:54, menue_list_title: '공지사항게시판', menue_list_path: '/board/notice/list',},
                    { menue_list_id:55, menue_list_title: '이벤트게시판', menue_list_path: '/board/notice/event',},
                    { menue_list_id:56, menue_list_title: '자유게시판', menue_list_path: '/board/bulletin',},
                ]
            },
            {   id:12,
                submenu_title:'고객센터',
                submenu_icon:<ChatDots className='text-1xl text-white'/>,
                subMenu_list:[
                    { menue_list_id:57, menue_list_title: '고객센터', menue_list_path: '/board/qna/list',},
                    { menue_list_id:58, menue_list_title: '고객센터 샘플답변', menue_list_path: '/board/qna/sample',},
                ]
            },
            {   id:13,
                submenu_title:'쪽지관리',
                submenu_icon:<PaperPlaneRight className='text-1xl text-white' />,
                subMenu_list:[
                    { menue_list_id:59, menue_list_title: '쪽지 리스트', menue_list_path: '/board/letter/list',},
                    { menue_list_id:60, menue_list_title: '단체쪽지 리스트', menue_list_path: '/board/letter/group',},
                    { menue_list_id:61, menue_list_title: '샘플 쪽지', menue_list_path: '/board/letter/sample',},
                ]
            },
            {   id:14,
                submenu_title:'통계관리',
                submenu_icon:<Article className='text-1xl text-white' />,
                subMenu_list:[
                    { menue_list_id:59, menue_list_title: '쪽지 리스트', menue_list_path: '/board/letter/list',},
                    { menue_list_id:60, menue_list_title: '단체쪽지 리스트', menue_list_path: '/board/letter/group',},
                    { menue_list_id:61, menue_list_title: '샘플 쪽지', menue_list_path: '/board/letter/sample',},
                ]
            },
        ]
    },

]