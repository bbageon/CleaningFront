import { Content } from '../../../../../../components';
import './CompanyCard.css';
import { ReactComponent as Star } from '../../../../../../assets/icons/star.svg';
import { ReactComponent as Clock } from '../../../../../../assets/icons/clock.svg';
import test1 from './test1.jpg';
import test2 from './test2.png';
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
}) => {
    /* TEST NAVIGATE */
    const navigate = useNavigate();

    return (
        <div className='company-card-wrap' onClick={() => {navigate(`/companydetail/${company.company_id}`)}}>
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
                            <span className='rating'>5.0</span>
                            <span className='review-count'>(100+)</span>
                        </div>
                        <div>
                            <span className='flagship-service'>이사/입주청소</span>
                            <span className='flagship-service'>거주/생활청소</span>
                        </div>
                    </div>
                    <div className='company-card-time'>
                        <Clock fill='var(--gray3-color)' width={15} height={15} />
                        <span>09:00~20:00</span>
                        <span className='flagship-service'></span>
                        <span className='flagship-service none'>공휴일 X</span>
                    </div>
                </div>
                <CompanyCardImage
                
                />
            </Content>
        </div>
    );
};

export default CompanyCard;