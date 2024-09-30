import './Slide.css';
import { ReactComponent as Star } from '../../../assets/icons/star.svg';

const dummyData = [
    {
        id: 1,
        img: '',
        rating: '5.0',
        userName: '브라이언'
    },
    {
        id: 2,
        img: '',
        rating: '4.4',
        userName: '김재모',
    },
    {
        id: 3,
        img: '',
        rating: '4',
        userName: '허관',
    },
    {
        id: 4,
        img: '',
        rating: '3',
        userName: '임주노',
    }
]

const Slide = ({
    title,
    datas = dummyData,
}) => {
    return (
        <div className='slide-container'>
            <div className='slide-title-box'>
                <span className='slide-title'>
                    {title}
                </span>
                <span className='slide-more'>
                    {title} 보기 {'>'}
                </span>
            </div>
            <div className='slide-content-box'>
                {
                    datas.map((data, index) => {
                        return (
                            <div id={index} className='slide-content'>
                                <div className='slide-content-img'>
                                    <img>
                                    </img>
                                </div>
                                <div className='slide-content-info-box'>
                                    <span className='slide-content-date small'>
                                        2024. 08. 21. (수)
                                    </span>
                                    <div className='slide-content-info'>
                                        <span>
                                            작성자: {data.userName}
                                        </span>
                                        <Star width={16} />
                                        <span>
                                            {data.rating}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Slide;