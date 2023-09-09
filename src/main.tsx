import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import App from '@/App';
import { reduxApi } from './api';
import './index.css';

export const store = configureStore({
  reducer: { [reduxApi.reducerPath]: reduxApi.reducer },
  middleware: (getDefault) => getDefault().concat(reduxApi.middleware)
});

setupListeners(store.dispatch);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
