import Content from '../Content';
import ServiceCard from '../ServiceCard';
import './ServiceList.css';

const ServiceList = ({
    data
}) => {
    
    return (
        <Content
            paddingRight={0}
            paddingLeft={0}
            paddingTop={0}
        >
            {
                data.map((d, i) => {
                    return (
                        <ServiceCard
                            data={d}
                        />
                    )
                })
            }
        </Content>
    );
};

export default ServiceList;