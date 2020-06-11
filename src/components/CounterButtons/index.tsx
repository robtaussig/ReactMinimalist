import React, { FC } from 'react';
import { useRecoilState } from 'recoil';
import { counter } from '~state/counter';

export interface CounterButtonsProps {
    
}

export const CounterButtons: FC<CounterButtonsProps> = () => {
    const [count, setCounter] = useRecoilState(counter);

    const adjust = (amount: number) => () => {
        setCounter(prev => prev + amount);
    };

    return (
        <div>
            <button onClick={adjust(1)}>Increment</button>
            <button onClick={adjust(-1)} disabled={count === 0}>Decrement</button>
        </div>
    );
};

export default CounterButtons;
