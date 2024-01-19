import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { AuthProvider } from 'react-auth-kit';
import ru_RU from 'antd/locale/ru_RU';
import store from '../../redux'
// Assuming you have a rootReducer for your Redux store
// Create the Redux store

function Wrapper({ children }) {
  return (
    <Provider  store={store}>
      <BrowserRouter>
          <ConfigProvider locale={ru_RU}>
            {children}
          </ConfigProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default Wrapper;
