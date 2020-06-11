import React, { FC } from 'react';
import Counter from '~components/Counter';
import CounterButtons from '~components/CounterButtons';
import ResetButton from '~components/ResetButton';

interface AppProps {
  children?: any,
}

export const App: FC<AppProps> = () => {
  return (
    <div>
      <Counter/>
      <CounterButtons/>
      <ResetButton/>
    </div>
  );
};

export default App;
