import './style.scss';
import React from 'react';
import { render } from 'react-dom';
import { App } from '~components/App';
import {
  RecoilRoot,
} from 'recoil';

render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,
  document.getElementById('root')
);

if ((module as any).hot) {
  (module as any).hot.accept()
}
