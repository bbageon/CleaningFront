import { Content } from '../../../../../../components';
import './WriteReviewTop.css';

const WriteReviewTop = ({
    img,
    company_name = '김재모의 카피바라 청소'
}) => {
    return (
        <Content
            gap={25}
            border={'7px solid var(--divider-color)'}
        >
            <div className='write-review-logo'>
                <img src={img} />
            </div>
            <div>
                <span className='maximum'>{company_name}</span>
            </div>
        </Content>
    );
};

export default WriteReviewTop;