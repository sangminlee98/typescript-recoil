import React, {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {RecoilRoot} from 'recoil';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { darkTheme } from './theme';

const rootElem = document.getElementById('root')!;
const root = createRoot(rootElem);

root.render(
  <StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={darkTheme}>
        <App/>
      </ThemeProvider>
    </RecoilRoot>
  </StrictMode>
)