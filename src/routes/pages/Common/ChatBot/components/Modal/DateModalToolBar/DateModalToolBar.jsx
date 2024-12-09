import './DateModalToolBar.css';

export const DateModalToolBar = ({
    date,
    onNavigate,
}) => {
    const navigate = (action) => {
        onNavigate(action);

        const newDate = new Date(date);
        if (action === 'TODAY') {
            newDate.setFullYear(new Date().getFullYear());
            newDate.setMonth(new Date().getMonth());
        } else if (action === 'PREV') {
            newDate.setMonth(newDate.getMonth() - 1);
        } else if (action === 'NEXT') {
            newDate.setMonth(newDate.getMonth() + 1);
        }
    }

    return (
        <div className="custom-rbc-toolbar">
            <button type="button" onClick={navigate.bind(null, 'PREV')}>
                {'<'}
            </button>
            <span className="rbc-toolbar-label">
                {`${date.getMonth() + 1}월`}
            </span>
            <button type="button" onClick={navigate.bind(null, 'NEXT')}>
                {'>'}
            </button>
        </div>
    )
}