import { Content, ReviewList, ServiceList, TabCenter } from '../../../../../../components';
import './CompanyDetailBottom.css';

const CompanyDetailBottom = ({
    company,
    companyService,

    data
}) => {

    const TabItems = [
        {
            label: '청소서비스',
            key: '1',
            children:
                <ServiceList
                    data={data}
                    companyService={companyService}
                />
        },
        {
            label: '리뷰',
            key: '2',
            children:
                <ReviewList
                    company={company}
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