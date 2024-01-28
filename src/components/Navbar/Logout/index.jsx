import React from 'react'
import { Modal} from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { switchLogOutVisibility } from '../../../redux/modelSlice'
import { useNavigate } from 'react-router-dom'



const LogOutModal = () => {
  const { logOutVisibility } = useSelector((state)=> state.modal);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const Logout =()=>{
    localStorage.removeItem('token');
    navigate('/login')
  }
  return (
    <Modal
       title='Are you sure?'       
       onCancel={()=>dispatch(switchLogOutVisibility())}
       open={logOutVisibility}
       okText='Log Out'
       onOk={()=> Logout()}
    >
    </Modal>
  )
}

export default LogOutModal;