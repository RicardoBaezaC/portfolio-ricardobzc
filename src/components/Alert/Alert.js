import './Alert.css'
import iconSuccess from '../../assets/img/success.svg';
import iconFailure from '../../assets/img/failure.svg';
import { useCallback, useEffect } from 'react';


export const Alert = ({type, message, alertIsVisible, setAlertIsVisible}) => {

    const deleteAlert = useCallback(() => {
        setAlertIsVisible(false)
    }, [setAlertIsVisible])

    useEffect(() => {  

        const alert = setInterval( deleteAlert, 5000)

        return () => {
            clearInterval(alert)
        }

    },[setAlertIsVisible, deleteAlert])

    return (
        <div className={`alert-container ${type} ${alertIsVisible ? 'start' : 'finish'}`} onClick={deleteAlert}>
            <img className="icon-alert" src={type === "success" ? iconSuccess : iconFailure} alt="icon-alert"/>
            <p className="alert-message">{message}</p>
        </div>
    )
}