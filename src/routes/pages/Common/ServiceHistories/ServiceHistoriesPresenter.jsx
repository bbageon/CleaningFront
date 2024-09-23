import { MainLayout, Top } from '../../../../components';
import './ServiceHistories.css';

const ServiceHistoriesPresenter = ({

}) => {
    return (
        <MainLayout>
            <Top
                title={'서비스 내역'}
                notShowIcon={true}
            />
        </MainLayout>
    );
};

export default ServiceHistoriesPresenter;