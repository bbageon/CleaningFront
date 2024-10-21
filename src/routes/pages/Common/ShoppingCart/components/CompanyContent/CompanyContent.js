import { Content } from '../../../../../../components';
import './CompanyContent.css';

const CompanyContent = ({
    
}) => {
    return (
        <Content

        >
            <div className='company-content-container'>
                <div className='company-content-selection'>
                    <div className='company-content-service-name'>
                        <text className='sub-title'>서비스 옵션 1</text>
                    </div>
                    <div className='company-content-service-description'>
                        <text style={{ lineHeight: '1.3rem' }}>이 옵션은 서비스 옵션 1로 김재모의 노하우를 제공합니다</text>
                    </div>
                    <div className='company-content-service-optional'>
                        <text className='info-title'>
                            옵션1
                        </text>
                        <text className='info-title'>
                            옵션2
                        </text>
                        <text className='info-title'>
                            옵션3
                        </text>
                        <text className='info-title'>
                            옵션4
                        </text>
                    </div>
                    <div className='company-content-service-total-price'>
                        <text style={{ fontWeight: 'bold' }}>70,000 원</text>
                    </div>
                </div>
                {/* <div className='company-content-img'>
                    <img src={Crown} />
                </div> */}
            </div>
            <div className='company-content-selection-change'>
                <text style={{ fontSize: "17px" }}>옵션 변경</text>
            </div>

        </Content>
    );
};

export default CompanyContent;