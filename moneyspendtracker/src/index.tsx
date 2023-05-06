import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NewExpanse from "./newexpanse/NewExpanse";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <NewExpanse />
  </React.StrictMode>
);
