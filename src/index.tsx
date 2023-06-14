import React from 'react';
import  ReactDOM  from 'react-dom/client';
import './index.css';
import App from './App';
import { readConfigFile } from 'typescript';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
        );
        
root.render(<App />)
