import { Content } from '../../../../../../components';
import ServiceHistoryCard from '../ServiceHistoryCard';
import './ServiceHistoryList.css';

const ServiceHistoryList = ({
    requestCleans,
}) => {

    return (
        <Content
            paddingTop={10}
            paddingBottom={0}
            paddingRight={0}
            paddingLeft={0}
        >
            {
                requestCleans.map((data, index) => {
                    return (
                        <ServiceHistoryCard
                            key={index}
                            data={data}
                        />
                    )
                })
            }
        </Content>
    );
};

export default ServiceHistoryList;