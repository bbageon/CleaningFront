import './CompanyCard.css';
import { useNavigate } from 'react-router-dom';
import { Content } from '../../../../../../components';
import { useGetCompanyServiceImages } from 'hooks/CompanyHooks';
import { ReactComponent as Star } from '../../../../../../assets/icons/star.svg';
import { ReactComponent as Clock } from '../../../../../../assets/icons/clock.svg';

/**
 * 청소업체 카드 이미지 컴포넌트
 * --
 */
const CompanyCardImage = ({
    images,
    maxImages,
}) => {
    return (
        <div className='company-card-image-container'>
            {images.slice(0, maxImages).map((image, index) => {
                return (
                    <div className='company-card-image-box' key={index}>
                        <img src={image.service_image} />
                    </div>
                );
            })}
        </div>
    );
};



/**
 * 청소업체 카드 컴포넌트
 * --
 */
const CompanyCard = ({
    company,
    designatedCategories,
}) => {

    /* ===== ROUTE ===== */
    const navigate = useNavigate();



    /* ===== QUERY ===== */
    const { data: companyServicesImages, isLoading: companyServicesImagesLoading, isError: companyServicesImagesError } = useGetCompanyServiceImages(company.company_id);

    const isLoading = companyServicesImagesLoading;



    /* ===== RENDER ===== */
    if (isLoading) return null;

    return (
        <div className='company-card-wrap' onClick={() => { navigate(`/companydetail/${company?.company_id}`) }}>
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
                            <span className='rating'>{company.total_rating.toFixed(1)}</span>
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
                        {company.open_time && company.close_time ? (
                            <span>{company.open_time}~{company.close_time}</span>
                        ) : (
                            <span className='gray1'>X</span>
                        )}
                        <span className='flagship-service'></span>
                        <span className='flagship-service none'>공휴일 {company?.is_holidays === 0 ? 'X' : 'O'}</span>
                    </div>
                </div>
                <CompanyCardImage
                    images={companyServicesImages}
                    maxImages={5}
                />
            </Content>
        </div>
    );
};

export default CompanyCard;