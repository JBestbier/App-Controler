import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


//create root
const root = ReactDOM.createRoot(document.getElementById('root'));


//render of App.js content in root
root.render(
    
    <BrowserRouter>
        <Routes>
            <Route exact path = '' element={<App/>} />
        </Routes>
    </BrowserRouter>

);
