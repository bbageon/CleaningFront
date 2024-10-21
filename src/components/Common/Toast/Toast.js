import useToastStore from 'store/useToastStore';
import './Toast.css';
import { useEffect } from 'react';

const Toast = ({

}) => {

    const { message, isVisible, hideToast } = useToastStore();

    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                hideToast();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [isVisible, hideToast]);

    if (!isVisible) return null;

    return (
        <div className='toast-container'>
            {message}
        </div>
    );
};

export default Toast;