import './CompanyDetailTop.css';
import { Content, Top } from "../../../../../../components";
import { ReactComponent as Star } from '../../../../../../assets/icons/Star.svg';
import test from './test.png';

const CompanyDetailTop = ({

}) => {
    return (
        <Content
            paddingLeft={0}
            paddingRight={0}
            paddingBottom={0}
            paddingTop={0}
            border={'10px solid var(--divider-color)'}
        >
            <div className='company-detail-top-images'>
                <Top
                    iconColor={'#ffffff'}
                    absolute={true}
                />
                <img src={test} />

            </div>
            <div className='company-detail-top-box1'>
                <span className='title'>김재모의 클린 카피바라</span>
                <div className='company-detail-top-info1'>
                    <Star
                        width={16}
                        height={16}
                    />
                    <span className='rating'>5.0</span>
                    <span className='review-count'>(100+)</span>
                </div>
                <div className='company-detail-top-info2'>
                    <span className='flagship-service'>이사/입주청소</span>
                    <span className='flagship-service'>거주/생활청소</span>
                </div>
            </div>

            <div className='company-detail-top-box2'>
                <div className='company-detail-top-info3'>
                    <span className='info-title'>시계</span>
                    <span>09:00~20:00</span>
                </div>
                <div className='company-detail-top-info3'>
                    <span className='info-title'>공휴일</span>
                    <span>X</span>
                </div>
                <div className='company-detail-top-info3'>
                    <span className='info-title'>평당 최소가격</span>
                    <span>10,000원~20,000원</span>
                </div>
                <div className='company-detail-top-info3'>
                    <span className='info-title'>시간당 최소가격</span>
                    <span>10,000원~20,000원</span>
                </div>
            </div>
        </Content>
    );
};

export default CompanyDetailTop;