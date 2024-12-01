import './RequestCard.css';
import time from './time.svg';
import location from './location.svg';


const RequestCard = ({
    category,
    date,
    day,
}) => {
    return (
        <div className='request-card-container'>
            <div className='request-date'>
                    <span style={{fontSize : '1.4rem', fontWeight : '400'}}>{date} 일</span>
                    <span style={{fontSize : '1.1rem', fontWeight : '400', color : '#797979'}}>{day}</span>
            </div>
            <div className='request-card'>
                <div className='request-category'>
                    {category.map((item, idx) => (
                        <div key={idx} className='category-item'>
                            <span className='category-content'>{item}</span>
                        </div>
                    ))}
                </div>
                <div className='request-time'>
                    <img src={time} />
                    <span>11 Am - 12 Pm</span>
                </div>
                <div className='request-address'>
                    <img src={location} />
                    <span>부산광역시 사상구 주례로 49</span>
                </div>
            </div>
        </div>
    )
}

export default RequestCard; 