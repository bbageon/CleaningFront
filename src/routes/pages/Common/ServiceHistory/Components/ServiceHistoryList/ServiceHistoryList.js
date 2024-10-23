import { Content } from '../../../../../../components';
import ServiceHistoryCard from '../ServiceHistoryCard';
import './ServiceHistoryList.css';

const ServiceHistoryList = ({
    userRequestClean,
}) => {
    console.log(userRequestClean)

    return (
        <Content
            paddingTop={10}
            paddingBottom={0}
            paddingRight={0}
            paddingLeft={0}
        >
            {
                userRequestClean.request_cleans.map((request, index) => {
                    return (
                        <ServiceHistoryCard
                            key={index}
                            request={request}
                        />
                    )
                })
            }
        </Content>
    );
};

export default ServiceHistoryList;