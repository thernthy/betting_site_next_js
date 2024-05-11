import * as React from 'react';

interface SwitchButtonProps {
    onClick: () => void;
    switchState: boolean; // Corrected prop name
}

export const SwitchButton: React.FC<SwitchButtonProps> = ({ onClick, switchState }) => {
    return (
        <div className={`h-3 w-6 rounded-md ${switchState ? 'bg-sky-400' : ' bg-gray-200'} relative shadow-inner`} onClick={onClick}>
            <div className={`absolute h-3 w-3 shadow-md p-1.5 rounded-full ${switchState ? 'right-0  bg-red-400' : 'left-0 bg-sky-400'}`}>
                {/* Depending on the switch state, move the inner div to left or right */}
            </div>
        </div>
    );
};
