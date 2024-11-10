import { Content } from '../../../../../../components';
import ServiceHistoryCard from '../ServiceHistoryCard';
import './ServiceHistoryList.css';

const ServiceHistoryList = ({ userRequestClean }) => {
    return (
        <Content paddingTop={10} paddingBottom={0} paddingRight={0} paddingLeft={0}>
            {
                userRequestClean.length ? (
                    userRequestClean.map((request, index) => (
                        <ServiceHistoryCard key={index} request={request} />
                    ))
                ) : (
                    <span
                        className='large gray1'
                        style={{
                            paddingTop: '16px'
                        }}
                    >내역이 없습니다.</span>
                )
            }
        </Content>
    );
};

export default ServiceHistoryList;