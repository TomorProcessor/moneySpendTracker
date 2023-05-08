import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NewExpanse from "./newexpanse/NewExpanse";
import store from "./StoreReducer";
import { Provider } from "react-redux";
import Expenses from "./expenses/Expenses";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <NewExpanse />
          <Expenses />
      </Provider>
  </React.StrictMode>
);
