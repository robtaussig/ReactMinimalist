import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { reset } from '~store/app';

export interface ResetButtonProps {
    
}

export const ResetButton: FC<ResetButtonProps> = () => {
    const dispatch = useDispatch();

    return (
        <button
            onClick={() => dispatch(reset())}
        >
            Reset state
        </button>
    );
};

export default ResetButton;
