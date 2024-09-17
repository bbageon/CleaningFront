import Content from '../../Content';
import './ServiceCard.css';
import test from './test.jpg';

const ServiceCard = ({
    data
}) => {
    return (
        <Content
            paddingTop={20}
            paddingBottom={20}
            flexDirection={'row'}
            border={true}
            gap={'10'}
        >
            <div className='service-card-info-wrap'>
                <div style={{marginBottom: '0.5rem'}}>
                    <span className='sub-title'>서비스 옵션1</span>
                </div>
                <div style={{marginBottom: '0.5rem'}}>
                    <p className='info' style={{lineHeight: 'normal'}}>이 청소는 서비스 옵션1로 김재모의 노하우를 제공합니다.</p>
                </div>
                <div style={{marginBottom: '0.5rem'}}>
                    <span style={{fontWeight: '600'}}>평당 10,000원</span>
                </div>
                <div>
                    <p className='info' style={{color: '#5B5B5B'}}>리뷰: 13개</p>
                </div>
            </div>
            <div className='service-card-img-box'>
                <img src={test} />
            </div>

        </Content>
    );
};

export default ServiceCard;