
import type {MuiltipleSeletionDataInterface} from '@/components/materinals_components/selection/muiltiple_selection_layer';
export const  MuiltipleUsersLayer = [
    {
        id:1,
        username:'user name 1',
        children:[
            {
                id:2,
                username:'string 2',
                children:[
                    {
                        id:3,
                        username:'string 3',
                    }
                ]
            }
        ]

    },
    {
        id:4,
        username:'user name 4',
        children:[
            {
                id:5,
                username:'string 5',
                children:[
                    {
                        id:6,
                        username:'string 6',
                        children:[
                            {
                                id:7,
                                username:'string 7',
                            },
                            {
                                id:8,
                                username:'string 8',
                            }
                        ]
                    }
                ]
            },
            {
                id:9,
                username:'user name 9',
            },
            {
                id:10,
                username:'user name 10',
            }
        ]

    },
    {
        id:11,
        username:'user name 11',
        children:[
            {
                id:12,
                username:'user name 12',
            },
            {
                id:13,
                username:'user name 13',
                children:[
                    {
                        id:14,
                        username:'user name 14',
                        children:[
                            {
                                id:15,
                                username:'user name 15',
                                children:[
                                    {
                                        id:16,
                                        username:'user name 16',
                                        children:[
                                            {
                                                id:17,
                                                username:'user name 17',
                                                
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
        ]
    }
] satisfies MuiltipleSeletionDataInterface[];