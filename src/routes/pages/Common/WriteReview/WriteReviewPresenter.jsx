import { BottomButton, MainLayout, Top } from '../../../../components';
import WriteReviewBottom from './components/WriteReviewBottom';
import WriteReviewTop from './components/WriteReviewTop/WriteReviewTop';

const WriteReviewPresenter = ({
    requestInfo,

    reviewContent,

    handleReviewContent,

    setRating,

    uploadedImages,
    setUploadedImages,

    handleSubmit
}) => {

    return (
        <MainLayout>
            <Top
                notShowIcon={true}
            />
            <WriteReviewTop
                requestInfo={requestInfo}
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