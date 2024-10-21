import Content from '../Content';
import ServiceCard from '../ServiceCard';
import './ServiceList.css';

const ServiceList = ({
    companyService,
}) => {
    
    /* ===== RENDER ===== */
    return (
        <Content
            paddingRight={0}
            paddingLeft={0}
            paddingTop={0}
        >
            {
                companyService && companyService.services && companyService.services.length > 0 ? (
                    companyService.services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            service={service}
                        />
                    ))
                ) : (
                    <Content><span className='gray1 medium'>등록된 서비스가 없습니다.</span></Content>
                )
            }
        </Content>
    );
};

export default ServiceList;