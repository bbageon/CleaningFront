import { useState } from 'react';
import './Modal.css';
import { Button } from 'components/Form';

const Modal = ({
    title,
    content,

    confirmBtnTitle = '확인',

    onClick,
    onClose,
}) => {

    /* ===== STATE ===== */

    /* ===== FUNCTION ===== */

    /* ===== HOOKS ===== */

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
                        onClick={onClick}
                    />
                    <Button
                        title={'취소'}
                        onClick={onClose}
                        backgroundColor={'var(--gray1-color'}
                        color={'#000000'}
                    />
                </div>
            </div>
        </div>
    );
};

export default Modal;