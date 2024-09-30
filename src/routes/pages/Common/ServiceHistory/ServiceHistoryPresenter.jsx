import { MainLayout, Tab, Top } from '../../../../components';
import ServiceHistoryList from './Components/ServiceHistoryList';
import './ServiceHistory.css';

// 더미 데이터
const dummy_data = [
    {
        company: '김재모의 카피바라 청소',
        status: 1,
        date: '2024. 09. 03. (화)',
        service: 2,
        address: '부산광역시 사상구 주례로 47',
        detailAddress: '글로벌빌리지 서관 1910호',
        isReview: true,
    },
    {
        company: '최재영의 집 청소',
        status: 2,
        date: '2024. 09. 03. (화)',
        service: 3,
        address: '부산광역시 사상구 주례로 47',
        detailAddress: '글로벌빌리지 서관 1910호',
    },
    {
        company: '허관',
        status: 3,
        date: '2024. 09. 03. (화)',
        service: 4,
        address: '부산광역시 사상구 주례로 47',
        detailAddress: '글로벌빌리지 서관 1910호',
    },
    {
        company: '이정민',
        status: 1,
        date: '2024. 09. 03. (화)',
        service: 5,
        address: '부산광역시 사상구 주례로 47',
        detailAddress: '글로벌빌리지 서관 1910호',
        isReview: true,
    }
];

const ServiceHistoryPresenter = ({

}) => {

    const TabItems = [
        {
            label: '전체',
            key: '1',
            children:
                <ServiceHistoryList
                    data={dummy_data}
                />
        },
        {
            label: '이사/입주 청소',
            key: '2',
            children: 
                <ServiceHistoryList
                
                />
        },
        {
            label: '거주/생활 청소',
            key: '3',
            children:
                <ServiceHistoryList
                
                />
        },
        {
            label: '가전/가구 청소',
            key: '4',
            children:
                <ServiceHistoryList
                
                />
        },
        {
            label: '건물 관리',
            key: '5',
            children:
                <ServiceHistoryList
                
                />
        },
        {
            label: '사업장 청소',
            key: '6',
            children:
                <ServiceHistoryList
                
                />
        },
    ];

    return (
        <MainLayout footer={true}>
            <Top
                title={'서비스 내역'}
                notShowIcon={true}
            />
            <Tab
                items={TabItems}
            />
        </MainLayout>
    );
};

export default ServiceHistoryPresenter;