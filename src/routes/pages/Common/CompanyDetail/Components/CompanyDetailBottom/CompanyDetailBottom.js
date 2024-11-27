import { Content, ReviewList, ServiceList, TabCenter } from '../../../../../../components';
import './CompanyDetailBottom.css';

const CompanyDetailBottom = ({
    companyReview,
    companyAnswer,

    companyService,
}) => {

    const TabItems = [
        {
            label: '청소서비스',
            key: '1',
            children:
                <ServiceList
                    companyService={companyService}
                />
        },
        {
            label: '리뷰',
            key: '2',
            children:
                <ReviewList
                    reviews={companyReview}
                    answers={companyAnswer}
                />
        },
    ]

    return (
        <>
            <Content
                paddingTop={0}
                paddingLeft={0}
                paddingRight={0}
            >
                <TabCenter
                    items={TabItems}
                />
            </Content>
        </>
    );
};

export default CompanyDetailBottom;