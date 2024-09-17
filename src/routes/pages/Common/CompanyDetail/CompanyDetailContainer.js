import CompanyDetailPresenter from "./CompanyDetailPresenter"

const CompanyDetailContainer = () => {

    const testList = [
        {
            service_id: 1,
            service_name: '서비스 옵션1',
            service_info: '이 청소는 서비스 옵션1로 김재모의 노하우를 제공합니다.',
            service_price: 10000,
            review_count: 13,
        },
        {
            service_id: 1,
            service_name: '서비스 옵션1',
            service_info: '이 청소는 서비스 옵션1로 김재모의 노하우를 제공합니다.',
            service_price: 10000,
            review_count: 13,
        },
        {
            service_id: 1,
            service_name: '서비스 옵션1',
            service_info: '이 청소는 서비스 옵션1로 김재모의 노하우를 제공합니다.',
            service_price: 10000,
            review_count: 13,
        },
    ];

    return (
        <CompanyDetailPresenter
            data={testList}
        />
    );
};

export default CompanyDetailContainer;