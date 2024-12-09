import './Slide.css';
import { ReactComponent as Star } from '../../../assets/icons/star.svg';
import { useGetUser } from 'hooks/UserHooks';
import { formatDate } from 'utils';

const SlideCard = ({
    data,
}) => {

    const { data: userRes, isLoading: userLoading, isError: userError } = useGetUser(data.review.user_id);
    const user = userRes?.data || [];

    /* ===== RENDER ===== */
    return (
        <div className='slide-content'>
            <div className='slide-content-img'>
                <img src={data.image_url} />
            </div>
            <div className='slide-content-info-box'>
                <span className='slide-content-date small'>
                    {formatDate(data.updated_at)}
                </span>
                <div className='slide-content-info'>
                    <span>
                        {user.name}
                    </span>
                    <Star width={16} />
                    <span>
                        {Number(data.review.rating).toFixed(1)}
                    </span>
                </div>
            </div>
        </div>
    );
};

const Slide = ({
    title,
    datas,
}) => {

    /* ===== RENDER ===== */
    return (
        <div className='slide-container'>
            <div className='slide-title-box'>
                <span className='slide-title'>
                    {title}
                </span>
                <span className='slide-more'>
                    {/* {title} 보기 {'>'} */}
                </span>
            </div>
            <div className='slide-content-box'>
                {
                    datas?.slice(0, 5).map((data, index) => (
                        <SlideCard
                            key={index}
                            data={data}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Slide;