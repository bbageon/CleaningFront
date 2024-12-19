import RequestCard from './RequestCard';
import './Requestform.css';

const Requestform = ({
    Lists,
}) => {
    const ColorCategories = [
        'rgba(0, 123, 255, 0.2)',
        'rgba(98, 0, 255, 0.2)',
        'rgba(111, 255, 0, 0.2)',
        'rgba(255, 0, 0, 0.2)',
        'rgba(0, 255, 115, 0.2)',
    ];

    if (!Lists) {
        return (
            <div>데이터가 없습니다.</div> // 데이터가 없을 때의 처리
        )
    } else {
        return (
            <div className='request-form-container'>
                {/* 각 년의 월 마다 map */}
                {Object.keys(Lists).map((key, idx) => {
                    const monthData = Lists[key];

                    return (
                        <>
                            <div className='request-month'>
                                <span>{key}</span>
                            </div>
                            {Array.isArray(monthData) &&
                                monthData.map((data, idx) => (
                                    <RequestCard
                                        List={data}
                                        Color={ColorCategories[idx % 5]}
                                    />
                                ))
                            }
                        </>
                    )
                })}
            </div>
        )
    }
}

export default Requestform;



