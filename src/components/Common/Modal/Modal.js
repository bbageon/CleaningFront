import { useState } from 'react';
import './Modal.css';
import { Button } from 'components/Form';

const Modal = ({
    isOpen,
    title,
    content,

    confirmBtnTitle = '확인',

    onClick,
    onClose,

    error = false,
}) => {

    /* ===== STATE ===== */

    /* ===== FUNCTION ===== */

    /* ===== HOOKS ===== */

    /* ===== RENDER ===== */

    if (!isOpen) {
        return null;
    }

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
                        onClick={onClick}
                    />
                    {
                        !error && (
                            <Button
                                title={'취소'}
                                onClick={onClose}
                                backgroundColor={'var(--gray1-color'}
                                color={'#000000'}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Modal;