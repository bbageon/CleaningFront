import { Content, ServiceCard, Top } from '../../../../../../components';
import './CompanyMenuTop.css';

import test from './test.jpg';

const CompanyMenuTop = ({

}) => {
    return (
        <div className='company-menu-top-wrap'>
            <Top
                absolute={true}
                iconColor={'#FFFFFF'}
            />
            <div className='company-menu-top'>
                <img src={test} />
            </div>
            <ServiceCard
                menuPage={true}
            />
        </div>
    );
};

export default CompanyMenuTop;