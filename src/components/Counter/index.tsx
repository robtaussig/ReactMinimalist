import React, { FC } from 'react';
import { useRecoilState } from 'recoil';
import { counter } from '~state/counter';

export interface CounterProps {
    
}

export const Counter: FC<CounterProps> = () => {
    const [count, setCounter] = useRecoilState(counter);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCounter(Math.max(0,Number(e.target.value)));
    };

    return (
        <div>
            <label>
                Current count:
                <input type={'number'} value={count} onChange={handleChange}/>
            </label>
        </div>
    );
};

export default Counter;
