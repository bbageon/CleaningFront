import { useNavigate } from 'react-router-dom';
import './Link.css';

const Link = ({
    title,
    link,
    fontSize,
}) => {
    const navigate = useNavigate();

    return (
        <div
            className='link-container'
            onClick={() => navigate(link)}
        >
            <span
                style={{
                    fontSize: fontSize,
                }}
            >{title ? title : "error"}</span>
            <span
                style={{
                    color : '#D9D9D9',
                    cursor : 'pointer',
                    fontSize: fontSize,
                }}
            > ⟩ </span>
        </div>
    )
};

export default Link;