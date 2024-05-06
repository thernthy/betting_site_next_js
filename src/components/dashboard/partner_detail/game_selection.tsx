import * as React from 'react';

export interface GamCategoryPropInterface{
    games_category:{
        category_id:Number,
        category_title:String
    }[];

    selected_category:{
        category_id:Number,
        category_title:String
    }[];

    handleSelection: (selected_category: {
        category_id: Number;
        category_title: String;
    }) => void;
}
export default function GameSelection({games_category, selected_category, handleSelection}:GamCategoryPropInterface){
    return (
        <ul className='flex flex-row items-center gap-1 text-sm'>
            {games_category.map((game, index) => {
                const isSelected = selected_category.some(selected => selected.category_id === game.category_id);
                const className = isSelected ? 'border border-1 border-sky-400 text-black' : 'bg-sky-500 text-white';
                return (
                    <li className={`px-2 cursor-pointer py-2 capitalize rounded-full ${className}`} key={index} onClick={() => handleSelection({ category_id: game.category_id, category_title: game.category_title })}>
                        {game.category_title}{`${game.category_id}`}
                    </li>
                    
                );
            })}
        </ul>
    );
}