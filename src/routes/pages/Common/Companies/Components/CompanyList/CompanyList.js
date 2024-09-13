import { Content } from '../../../../../../components';
import './CompanyList.css';

const CompanyList = ({

}) => {
    return (
        <div className='company-card-container'>
            <div className='company-card-logo'>
                <div>
                </div>
            </div>
            <div className='company-card-info'>
                <span className='company-card-title'>김재모의 클린 카피바라</span>
                <div className='company-card-info-box1'>
                    <span className='company-card-rating'>별5.0</span>
                    <span className='company-card-count'>(100+)</span>
                    <span className='company-card-service'>이사/입주청소</span>
                    <span className='company-card-service'>거주/생활청소</span>
                </div>
                <div className='company-card-info-box2'>
                    <span className='company-card-time'>시간 09:00~20:00</span>
                    <span className='company-card-off'>공휴일 X</span>
                </div>
                <div className='company-card-info-box3'>
                    <div>
                        <span>평당 최소가격</span>
                        <span>10,000~20,000원</span>
                    </div>
                    <div>
                        <span>시간당 최소가격</span>
                        <span>10,000~20,000원</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyList;