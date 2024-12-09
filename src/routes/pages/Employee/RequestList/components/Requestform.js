import RequestCard from './RequestCard';
import './Requestform.css';

const Requestform = ({
    months,
    date,
    day,
}) => {
    const categories = ['살균 청소', '방역 청소', '화장실 청소', '변기', '빠른 방문', '허관']

    return (
        <div className='request-form-container'>
            {/* 각 년의 월 마다 map */}
            {months.map((month, idx) => (
                <>
                    <div className='request-month'>
                        <span>{month}</span>
                    </div>

                    <RequestCard
                        category={categories}
                        date={date}
                        day={day}
                    />
                </>
            ))}
        </div>
    )
}

export default Requestform;