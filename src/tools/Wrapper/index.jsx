import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';  // Import createStore from 'redux'
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { AuthProvider } from 'react-auth-kit';
import ru_RU from 'antd/locale/ru_RU';

// Assuming you have a rootReducer for your Redux store
import rootReducer from '../../redux';

// Create the Redux store
const store = createStore(rootReducer);

function Wrapper({ children }) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AuthProvider authName="_auth" authType="cookie" cookieDomain={window.location.hostname} cookieSecure={window.location.protocol === 'https:'} store={store}>
          <ConfigProvider locale={ru_RU}>
            {children}
          </ConfigProvider>
        </AuthProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default Wrapper;
