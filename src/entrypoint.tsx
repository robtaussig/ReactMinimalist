import './style.scss';
import React from 'react';
import { render } from 'react-dom';
import { App } from '~components/App';
import {
  RecoilRoot,
} from 'recoil';
import { BrowserRouter } from 'react-router-dom';

render(
  <BrowserRouter>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

if ((module as any).hot) {
  (module as any).hot.accept()
}
