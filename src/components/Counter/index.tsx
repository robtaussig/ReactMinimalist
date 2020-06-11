import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selector as counterSelector, set } from '~store/counter';

export interface CounterProps {
    
}

export const Counter: FC<CounterProps> = () => {
    const counter = useSelector(counterSelector);
    const dispatch = useDispatch();

    return (
        <label>
            Current count:
            <input type={'number'} value={counter} onChange={e => dispatch(set(Number(e.target.value)))}/>
        </label>
    );
};

export default Counter;
