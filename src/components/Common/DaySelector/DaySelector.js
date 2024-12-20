import './DaySelector.css';
import '../../../routes/pages/Common/ChatBot/components/Modal/DateModal/DateModal.css';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import ko from 'date-fns/locale/ko';
import dayjs from 'dayjs';
import { Button } from 'components/Form';



const DaySelector = ({
    isOpen,
    setIsOpen,
    selectedDay,
    setSelectedDay,
}) => {

    /* ===== VARIABLES ===== */
    const locales = {
        'ko': ko,
    };

    const localizer = dateFnsLocalizer({
        format,
        parse,
        startOfWeek,
        getDay,
        locales,
    });

    const formats = {
        weekdayFormat: (date, culture, localizer) =>
            localizer.format(date, 'EEE', culture), // 'E'는 한 글자 요일 ('월', '화' 등)
    };

    const dayPropGetter = (date) => {
        const today = dayjs().startOf('day'); // 오늘 날짜
        const isPastDate = dayjs(date).isBefore(today, 'day'); // 과거 날짜 확인
        const isSelected = selectedDay && dayjs(date).isSame(dayjs(selectedDay), 'day'); // 선택한 날짜와 비교

        if (isPastDate) {
            return {
                className: 'disabled-date', // 과거 요일에 비활성화 스타일 추가
            };
        }

        if (isSelected) {
            return {
                className: 'selected-date', // 선택한 날짜에 스타일 추가
            };
        }

        return {};
    };

    /* ===== FUNCTION ===== */
    const handleSelectDay = (data) => {
        setSelectedDay(data);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    /* ===== RENDER ===== */
    return (
        <div className='day-selector-modal-container'>

            <div className='day-selector-container'>
                <div className='day-selector-wrap'>
                    <span className='large bold'>날짜를 선택해주세요.</span>
                    <Calendar
                        localizer={localizer}
                        startAccessor='start'
                        endAccessor='end'
                        tooltipAccessor='renderable'
                        culture='ko'
                        formats={formats}
                        views={['month']}
                        draggableAccessor={(event) => true}
                        components={{ toolbar: false }}
                        date={selectedDay}
                        onSelectSlot={handleSelectDay}
                        onNavigate={handleSelectDay}
                        dayPropGetter={dayPropGetter}
                    />
                    <Button
                        title={'확인'}
                        onClick={handleCloseModal}
                    />
                </div>

            </div>
        </div>
    );
};

export default DaySelector;