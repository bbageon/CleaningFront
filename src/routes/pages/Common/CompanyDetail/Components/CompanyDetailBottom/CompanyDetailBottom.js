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
                companyService && companyService.services ? (
                    <ServiceList
                        companyService={companyService}
                    />
                ) : null
        },
        {
            label: '리뷰',
            key: '2',
            children:
                companyReview && companyReview.reviews ? (
                    <ReviewList
                        companyReview={companyReview}
                        companyAnswer={companyAnswer}
                    />
                ) : null
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