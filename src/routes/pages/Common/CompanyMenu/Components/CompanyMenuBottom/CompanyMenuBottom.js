import { Content, RadioButton } from '../../../../../../components';
import './CompanyMenuBottom.css';

const CompanyMenuBottom = ({
    service,
    serviceType,
    setServiceType,
    setPrice,
}) => {
    return (
        <div className='company-menu-bottom-wrap'>
            <Content
                paddingTop={20}
                paddingBottom={20}
                paddingLeft={16}
                border={true}
            >
                <div className='company-menu-bottom'>
                    <span className='large bold'>선택</span>
                </div>
            </Content>
            <Content
                paddingTop={20}
                gap={30}
            >
                <RadioButton
                    options={
                        [
                            {
                                id: 'AREA', name: '평당', price: service.price_per_meter,
                            },
                            {
                                id: 'TIME', name: '시간당', price: service.price_per_time,
                            }
                        ]
                    }
                    setPrice={setPrice}
                    selected={serviceType}
                    setSelected={setServiceType}
                />
            </Content>

        </div>
    );
};

export default CompanyMenuBottom;