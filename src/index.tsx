import React from 'react';
import ReactDOM from 'react-dom';
import Backend from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import './index.css';
import App from './App';
import { AppStateProvider } from './context/index';
ReactDOM.render(
  <DndProvider backend={Backend}>
    <AppStateProvider>
      <App />
    </AppStateProvider>
  </DndProvider>,
  document.getElementById('root')
);
