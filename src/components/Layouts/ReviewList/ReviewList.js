import Content from '../Content';
import ReviewCard from '../ReviewCard';

import './ReviewList.css';

const ReviewList = ({
    company,
}) => {
    return (
        <Content
            paddingRight={0}
            paddingLeft={0}
            paddingTop={0}
        >
            <ReviewCard
                company={company}
            />
        </Content>
    );
};

export default ReviewList;