import './AllowNotification.css';

interface Props {
    onClick(e: any): any,
    title?: string,
    content?: string,
}

const AllowNotification = ({
    onClick,
    title,
    content,
}: Props) => {
    return (
        <div className="allow-popup">
            <div className="allow-box">
                <div className="allow-title">{title}</div>
                <div className="allow-content">{content}</div>
                <div className="allow-buttons">
                    <button
                        className="allow-deny-button"
                        onClick={
                            () => onClick(false)
                        }
                    >
                        허용 안함
                    </button>
                    <button
                        className="allow-button"
                        onClick={
                            () => onClick(true)
                        }
                    >
                        허용
                    </button>
                </div>
            </div>
        </div >
    )
}

export default AllowNotification;