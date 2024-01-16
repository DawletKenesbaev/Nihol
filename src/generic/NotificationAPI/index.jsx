import { notification } from 'antd';

const Notifier = (status)=>{
    switch (status) {
        case 400:
            return notification.error({message: "Password is incorrect"})
        case 409:
            return notification.error({message: "User not found"})
        case 404:
            return notification.error({message: "Bad Request"})
        case 'empty':
            return notification.error({message: "Please fill all fields"})
        default:
            return;
    }
}


const useNotificationAPI = () => {
  return Notifier
}

export default useNotificationAPI