import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import { WhatWeDo } from './components/what-we-do/what-we-do';
import { Service } from './components/service/service';
import { Project } from './components/project/project';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/wwd' element={<WhatWeDo />} />
        <Route path='/service' element={<Service />} />
        <Route path='/project' element={<Project />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
