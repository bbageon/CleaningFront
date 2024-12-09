import React from "react";
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import ko from 'date-fns/locale/ko';
import { DateModalToolBar } from "../DateModalToolBar/DateModalToolBar";

import './DateModal.css';

export const DateModal = ({
    showSelectDateModal,
    onSelectDate,
    selectedDate,
}) => {
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

    return (
        <div className="date-modal-container">
            <div
                className="date-modal-background"
                onClick={() => showSelectDateModal()}
            ></div>
            <div className="date-modal">
                <div className="modal-title">날짜를 선택해 주세요.</div>
                <Calendar
                    backgroundColor={'#fff'}
                    localizer={localizer}
                    startAccessor='start'
                    endAccessor='end'
                    tooltipAccessor='renderable'
                    culture='ko'
                    formats={formats}
                    views={['month']}
                    draggableAccessor={(event) => true}
                    components={{
                        toolbar: (props) =>
                            <DateModalToolBar
                                {...props}
                            />
                    }}
                    date={selectedDate}
                    onNavigate={onSelectDate}
                    onSelectSlot={onSelectDate}
                />
            </div>
        </div>
    )
}