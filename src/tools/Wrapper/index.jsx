
import { Provider } from 'react-redux';
import store from '../../redux'
import { BrowserRouter } from 'react-router-dom';
import ru_RU from 'antd/locale/ru_RU';
import { ConfigProvider } from 'antd';

function Wrapper({children}) {
  return (
    <Provider store={store}>
       <BrowserRouter>
        <ConfigProvider locale={ru_RU}>
           {children}
        </ConfigProvider>
       </BrowserRouter>
     </Provider>
  )
}

export default Wrapper