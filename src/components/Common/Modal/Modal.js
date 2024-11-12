import { useState } from 'react';
import './Modal.css';
import { Button } from 'components/Form';
import useModalStore from 'store/useModalStore';

const Modal = ({
    isOpen,
    title,
    content,

    confirmBtnTitle = '확인',
}) => {

    /* ===== VARIABLES ===== */
    const { onConfirm, closeModal, buttonType } = useModalStore();



    /* ===== FUNCTION ===== */
    if (!isOpen) {
        return null;
    }

    const handleConfirm = () => {
        if (onConfirm) {
            onConfirm();
        }
        closeModal();
    };
    
    
    
    /* ===== RENDER ===== */
    return (
        <div className='modal-container'>
            <div className='modal-box'>
                <div className='modal-title'>
                    <span className='title'>{title}</span>
                </div>
                <div className='modal-content'>
                    <span className='large'>{content}</span>
                </div>
                <div className='modal-button-wrap'>
                    <Button
                        title={confirmBtnTitle}
                        onClick={handleConfirm}
                    />
                    {
                        buttonType === 'double' && (
                            <Button
                                title={'취소'}
                                onClick={closeModal}
                                backgroundColor={'var(--gray1-color'}
                                color={'#FFFFFF'}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Modal;