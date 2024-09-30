import { Content } from '../../../../../../components';
import ServiceHistoryCard from '../ServiceHistoryCard';
import './ServiceHistoryList.css';

const ServiceHistoryList = ({
    data,
}) => {

    return (
        <Content
            paddingTop={10}
            paddingBottom={0}
            paddingRight={0}
            paddingLeft={0}
        >
            {
                data.map((d, i) => {
                    return (
                        <ServiceHistoryCard
                            key={i}
                            data={d}
                        />
                    )
                })
            }
        </Content>
    );
};

export default ServiceHistoryList;