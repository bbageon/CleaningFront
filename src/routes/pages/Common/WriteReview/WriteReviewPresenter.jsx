import { useState } from 'react';
import { BottomButton, MainLayout, Modal, Top } from '../../../../components';
import WriteReviewBottom from './WriteReviewBottom';
import WriteReviewTop from './WriteReviewTop/WriteReviewTop';

const WriteReviewPresenter = ({

}) => {

    /* ===== STATE ===== */
    const [isModalOpen, setIsModalOpen] = useState(false);

    /* ===== FUNCTION ===== */
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <MainLayout>
            <Top
                notShowIcon={true}
            />
            <WriteReviewTop

            />
            <WriteReviewBottom

            />
            <>
                <BottomButton
                    title={'완료'}
                    onClick={openModal}
                />
                {
                    isModalOpen && (
                        <Modal
                            title='리뷰 작성'
                            content='리뷰를 제출하시겠습니까?'
                            onClick={closeModal}
                            onClose={closeModal}
                        />
                    )
                }
            </>

        </MainLayout>
    );
};

export default WriteReviewPresenter;