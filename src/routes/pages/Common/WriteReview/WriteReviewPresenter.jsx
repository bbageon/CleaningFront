import { useState } from 'react';
import { BottomButton, MainLayout, Modal, Top } from '../../../../components';
import WriteReviewBottom from './components/WriteReviewBottom';
import WriteReviewTop from './components/WriteReviewTop/WriteReviewTop';

const WriteReviewPresenter = ({
    reviewContent,

    handleReviewContent,

    setRating,

    uploadedImages,
    setUploadedImages,

    handleSubmit = { handleSubmit }
}) => {

    return (
        <MainLayout>
            <Top
                notShowIcon={true}
            />
            <WriteReviewTop

            />
            <WriteReviewBottom
                handleReviewContent={handleReviewContent}
                reviewContent={reviewContent}

                setRating={setRating}

                uploadedImages={uploadedImages}
                setUploadedImages={setUploadedImages}
            />
            <BottomButton
                title={'완료'}
                onClick={handleSubmit}
            />

        </MainLayout>
    );
};

export default WriteReviewPresenter;