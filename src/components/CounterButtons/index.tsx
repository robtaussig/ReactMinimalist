import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, selector as counterSelector } from '~store/counter';

export interface CounterButtonsProps {
    
}

export const CounterButtons: FC<CounterButtonsProps> = () => {
    const dispatch = useDispatch();
    const counter = useSelector(counterSelector);

    return (
        <div>
            <button
                onClick={() => dispatch(increment())}
            >
                Increment
            </button>
            <button
                onClick={() => dispatch(decrement())}
                disabled={counter === 0}
            >
                Decrement
            </button>
        </div>
    );
};

export default CounterButtons;
