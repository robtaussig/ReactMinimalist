import React, { FC } from 'react';
import Counter from '~components/Counter';
import CounterButtons from '~components/CounterButtons';
import { Route, Switch, Link } from 'react-router-dom';

interface AppProps {
  children?: any,
}

export const App: FC<AppProps> = () => {
  return (
    <Switch>
      <Route path="/1">
        <div>
          <Counter/>
          <CounterButtons/>
          <Link to="/2">2</Link>
        </div>
      </Route>
      <Route path="/2">
        <div>
          <Counter/>
          <CounterButtons/>
          <Link to="/1">1</Link>
        </div>
      </Route>
      <Route path="*">
        <div>
          <Counter/>
          <CounterButtons/>
          <Link to="/1">1</Link>
        </div>
      </Route>
    </Switch>
  );
};

export default App;
