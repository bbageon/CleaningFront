import { Content } from '../../../../../../components';
import './WriteReviewTop.css';

const WriteReviewTop = ({
    requestInfo,
}) => {
    return (
        <Content
            gap={25}
            border={'7px solid var(--divider-color)'}
        >
            <div className='write-review-logo'>
                <img src={requestInfo.company.logo_image} />
            </div>
            <div>
                <span className='maximum'>{requestInfo.company.company_name}</span>
            </div>
        </Content>
    );
};

export default WriteReviewTop;