import { MainLayout, Tab, Top } from '../../../../components';
import ServiceHistoryList from './Components/ServiceHistoryList';
import './ServiceHistory.css';

const ServiceHistoryPresenter = ({
    isLoading,
    requestCleans
}) => {

    if (isLoading) {
        <></>
    };

    const TabItems = [
        {
            label: '전체',
            key: '1',
            children:
                <ServiceHistoryList
                    requestCleans={requestCleans}
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