import './i18next';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './styles/tailwind.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Loading from './components/common/loading';

ReactDOM.render(
  <Suspense fallback={<Loading />}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Suspense>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
