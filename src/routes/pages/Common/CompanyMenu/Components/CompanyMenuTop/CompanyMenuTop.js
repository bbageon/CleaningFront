import { Content, ServiceCard, Top } from '../../../../../../components';
import './CompanyMenuTop.css';

import test from './test.jpg';

const CompanyMenuTop = ({
    service,
}) => {
    return (
        <div className='company-menu-top-wrap'>
            <Top
                absolute={true}
                iconColor={'#FFFFFF'}
            />
            <div className='company-menu-top'>
                <img src={service.service_image} />
                {/* <img src={service.service_image} alt='service_image' /> */}
            </div>
            <ServiceCard
                service={service}
                isMenuPage={true}
            />
        </div>
    );
};

export default CompanyMenuTop;