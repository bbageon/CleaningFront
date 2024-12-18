import './RequestCard.css';
import time from './time.svg';
import location from './location.svg';


const RequestCard = ({
    List,
    Color,
}) => {
    console.log(Color, "색 상");
    console.log(List)
    const ServiceCategory = ['이사/입주 청소', '생활/거주 청소', '가전/가구 청소', '전문/특수 청소', '사업장 청소', '건물 관리'];
    const daysofWeek = ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat'];

    const StartDates = new Date(List.request_clean.start_clean_date * 1000);
    const endDate = new Date(List.request_clean.expect_end_clean_date * 1000);

    const date = daysofWeek[StartDates.getDay()];
    const day = StartDates.getDate();

    const category = [ServiceCategory[List.request_clean.category]];

    const RequestLocation = List.request_clean.clean_address
    const RequestLocationDetail = List.request_clean.clean_address_detail


    const FormatTime = (Times) => {
        const Hours = Times.getHours();
        const Minutues = Times.getMinutes();
        const Time =  `${Hours.toString().padStart(2, '0')}:${Minutues.toString().padStart(2, '0')}`;
        return Time;
    }

    const StartTime = FormatTime(StartDates);
    const EndTime = FormatTime(endDate);

    return (
        <div className='request-card-container'>
            <div className='request-date'>
                    <span style={{fontSize : '1.4rem', fontWeight : '400'}}>{day} 일</span>
                    <span style={{fontSize : '1.1rem', fontWeight : '400', color : '#797979'}}>{date}</span>
            </div>
            <div className='request-card'
                style={{'backgroundColor' : Color}}
            >
                <div className='request-category'>
                    {category.map((item, idx) => (
                        <div key={idx} className='category-item'>
                            <span className='category-content'>{item}</span>
                        </div>
                    ))}
                </div>
                <div className='request-time'>
                    <img src={time} />
                    <span>{StartTime} - {EndTime}</span>
                </div>
                <div className='request-address'>
                    <img src={location} />
                    <span>{RequestLocation} {RequestLocationDetail}</span>
                </div>
            </div>
        </div>
    )
}

export default RequestCard; 