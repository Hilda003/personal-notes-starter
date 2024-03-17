import React from 'react';
import AppNotes from './components/AppNotes'
import { createRoot } from 'react-dom/client';

// import style
import './styles/style.css';


const root = createRoot(document.getElementById('root'));
root.render(<AppNotes/>);