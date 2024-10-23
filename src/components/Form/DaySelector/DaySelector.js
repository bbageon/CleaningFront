import './DaySelector.css';
import Button from '../Button';

const DaySelector = ({ isOpen, setIsOpen, selectedDays, setSelectedDays }) => {
    /* ===== VARIABLES ===== */
    const days = ['일', '월', '화', '수', '목', '금', '토'];

    /* ===== FUNCTION ===== */
    const handleSelectDays = (day) => {
        if (selectedDays.includes(day)) {
            setSelectedDays(selectedDays.filter((selectedDay) => selectedDay !== day));
        } else {
            setSelectedDays([...selectedDays, day]);
        }
    };

    const handleCloseDaySelector = () => {
        setIsOpen(false);
    };

    /* ===== RENDER ===== */
    return (
        <div className='day-selector-modal-container'>
            <div className={`day-selector-wrap ${isOpen ? 'open' : 'close'}`}>
                <div className='day-selector-container'>
                    <span className='large bold'>요일을 선택해 주세요.</span>
                    <button className='day-selector-cancel' onClick={handleCloseDaySelector}>✕</button>
                    <div className='day-button-container'>
                        {days.map((day, index) => (
                            <button
                                key={index}
                                className={`day-button ${selectedDays.includes(day) ? 'selected' : ''}`}
                                onClick={() => handleSelectDays(day)}
                            >
                                {day}
                            </button>
                        ))}
                    </div>
                    <Button title={'확인'} />
                </div>
            </div>
        </div>
    );
};

export default DaySelector;