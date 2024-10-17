import Content from '../Content';
import ServiceCard from '../ServiceCard';
import './ServiceList.css';

const ServiceList = ({
    data,
    companyService,
}) => {

    return (
        <Content
            paddingRight={0}
            paddingLeft={0}
            paddingTop={0}
        >
            {
                companyService.services.map((service, index) => {
                    return (
                        <ServiceCard
                            key={index}
                            service={service}
                        />
                    )
                })
            }
            {/* {
                companyService.map((service, index) => (
                    <ServiceCard
                        key={index}
                        companyService={service}
                    />
                ))
            } */}
        </Content>
    );
};

export default ServiceList;