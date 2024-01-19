import React from 'react'
import { Modal,Input,Avatar } from 'antd'
import { SettingText } from './style';
import { useDispatch,useSelector } from 'react-redux'
import { switchProfileModal } from '../../../redux/modelSlice';
const SettingModal = () => {
  const {profilModalVisibility } = useSelector((state)=> state.modal);
  let dispatch = useDispatch();
  return (
    <Modal
        title='Profile'
        open={profilModalVisibility}
        okButtonProps={{disabled:true}}
        onCancel={()=> dispatch(switchProfileModal())}
    >
       <Avatar 
        style={{
           width: "80px",
           height: "80px",
           borderRadius:" 50%",
           display: "flex",
           alignItems: "center",
           background: "orange",
           margin: "auto"
        }}
        >
          D
       </Avatar>
       <SettingText>Name:</SettingText>
       <Input disabled />
       <SettingText>Surname:</SettingText>
       <Input disabled />
    </Modal>
  )
}

export default SettingModal