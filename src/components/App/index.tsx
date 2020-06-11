import React, { FC } from 'react';
import Counter from '~components/Counter';
import CounterButtons from '~components/CounterButtons';

interface AppProps {
  children?: any,
}

export const App: FC<AppProps> = () => {
  return (
    <div>
      <Counter/>
      <CounterButtons/>
    </div>
  );
};

export default App;
