import { BottomButton, MainLayout, Top } from '../../../../components';
import WriteReviewBottom from './WriteReviewBottom';
import WriteReviewTop from './WriteReviewTop/WriteReviewTop';

const WriteReviewPresenter = ({

}) => {
    return (
        <MainLayout>
            <Top
                notShowIcon={true}
            />
            <WriteReviewTop

            />
            <WriteReviewBottom

            />
            <BottomButton
                title={'완료'}
            />
        </MainLayout>
    );
};

export default WriteReviewPresenter;