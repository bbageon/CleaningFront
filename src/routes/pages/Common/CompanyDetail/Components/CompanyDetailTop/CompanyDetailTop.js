import './CompanyDetailTop.css';
import { Content, Top } from "../../../../../../components";
import { ReactComponent as Star } from '../../../../../../assets/icons/star.svg';
const CompanyDetailTop = ({
    company,
    designateCompanyCategory,
    
}) => {

    /* ===== RENDER ===== */
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
                <img src={company.logo_image} />
            </div>
            <div className='company-detail-top-box1'>
                <span className='title'>{company.company_name}</span>
                <div className='company-detail-top-info1'>
                    <Star
                        width={16}
                        height={16}
                    />
                    <span className='rating'>{company.total_rating.toFixed(1)}</span>
                    <span className='review-count'>{company.total_review_count >= 100 ? '(100+)' : `(${company.total_review_count})`}</span>
                </div>
                <div className='company-detail-top-info2'>
                    {
                        designateCompanyCategory.designateCategories.map((category, index) => (
                            <span key={index} className='flagship-service'>{category.company_category.category_name}</span>
                        ))
                    }
                </div>
            </div>

            <div className='company-detail-top-box2'>
                <div className='company-detail-top-info3'>
                    <span className='info-title'>영업 시간</span>
                    <span>{company.open_time}~{company.close_time}</span>
                </div>
                <div className='company-detail-top-info3'>
                    <span className='info-title'>공휴일</span>
                    <span>{company.is_holidays ? 'O' : 'X'}</span>
                </div>
                <div className='company-detail-top-info3'>
                    <span className='info-title'>휴무일</span>
                    <span>{company.is_holidays ? 'O' : 'X'}</span>
                </div>
                {/* <div className='company-detail-top-info3'>
                    <span className='info-title'>평당 최소가격</span>
                    <span>10,000원~20,000원</span>
                </div>
                <div className='company-detail-top-info3'>
                    <span className='info-title'>시간당 최소가격</span>
                    <span>10,000원~20,000원</span>
                </div> */}
            </div>
        </Content>
    );
};

export default CompanyDetailTop;