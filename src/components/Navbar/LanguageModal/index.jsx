import React from 'react'
import { Modal,Segmented ,Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux'
import { switchLocaleModal } from '../../../redux/modelSlice'
import { changeLang } from '../../../redux/localeSlice';
import i18 from 'i18next';



const LanguageModal = () => {
  const {localeModalVisibility } = useSelector((state)=> state.modal);
  const { lang } = useSelector((state)=> state.locale);
  const dispatch = useDispatch()
  const alterLanguage =()=>{
      dispatch(switchLocaleModal());
      i18.changeLanguage(lang)
  }
  return (
    <Modal
       title='Change Language'       
       onCancel={()=>dispatch(switchLocaleModal())}
       open={localeModalVisibility}
       okText='Switch'
       onOk={alterLanguage}
    >
        <Segmented
          defaultValue={lang}
          block options={[
              {
                label: (
                  <div style={{ padding: 4 }}>
                    <Avatar src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/255px-Flag_of_the_United_States.svg.png" />
                    <div>English</div>
                  </div>
                ),
                value: 'en',
              },
              {
                label: (
                  <div style={{ padding: 4 }}>
                    <Avatar src='https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/250px-Flag_of_Russia.svg.png' />
                    <div>Russian</div>
                  </div>
                ),
                value: 'ru',
              },
              {
                label: (
                  <div style={{ padding: 4 }}>
                    <Avatar src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/255px-Flag_of_Uzbekistan.svg.png' />
                    <div>Uzbek</div>
                  </div>
                ),
                value: 'uz',
              },
            ]}
         onChange={(e) => dispatch(changeLang(e))}
        />
    </Modal>
  )
}

export default LanguageModal