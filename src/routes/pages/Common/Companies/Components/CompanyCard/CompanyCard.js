import { Content } from '../../../../../../components';
import './CompanyCard.css';
import { ReactComponent as Star } from '../../../../../../assets/icons/star.svg';
import { ReactComponent as Clock } from '../../../../../../assets/icons/clock.svg';
import test1 from './test1.jpg';
import test2 from './test2.png';
import formatTime from 'utils/timeUtils';
import { useNavigate } from 'react-router-dom';

const dummy = [
    {
        src: test1,
    },
    {
        src: test2,
    },
    {
        src: test2,
    },
    {
        src: test2,
    }
]

/* ===== COMPONENT ===== */
const CompanyCardImage = ({

}) => {
    return (
        <div className='company-card-image-container'>
            {
                dummy.map((data, index) => {
                    return (
                        <div className='company-card-image-box' key={index}>
                            <img src={data.src} />
                        </div>
                    )
                })
            }
        </div>
    );
};

const CompanyCard = ({
    company,
    designatedCategories,
}) => {

    const navigate = useNavigate();

    return (
        <div className='company-card-wrap' onClick={() => {navigate(`/companydetail/${company?.company_id}`)}}>
            <Content
                border={'7px solid var(--divider-color)'}
            >
                <div className='company-card-info'>
                    <span className='title'>{company.company_name}</span>
                    <div className='company-card-rating'>
                        <div>
                            <Star
                                width={16}
                                height={16}
                            />
                            <span className='rating'>{company.total_rating}.0</span>
                            <span className='review-count'></span>
                        </div>
                        <div>
                            {
                                designatedCategories.map((category, index) => (
                                    <span key={index} className='flagship-service'>{category.company_category.category_name}</span>
                                ))
                            }
                        </div>
                    </div>
                    <div className='company-card-time'>
                        <Clock fill='var(--gray3-color)' width={15} height={15} />
                        <span>{`${formatTime(company.open_time)}~${formatTime(company.close_time)}`}</span>
                        <span className='flagship-service'></span>
                        <span className='flagship-service none'>공휴일 {company?.is_holidays === 0 ? 'X' : 'O'}</span>
                    </div>
                </div>
                <CompanyCardImage
                    
                />
            </Content>
        </div>
    );
};

export default CompanyCard;