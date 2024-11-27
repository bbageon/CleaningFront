import { useNavigate } from 'react-router-dom';
import './Link.css';

const Link = ({
    title,
    link,
}) => {
    const navigate = useNavigate();

    return (
        <div
            className='link-container'
            onClick={() => navigate(link)}
        >
            <span>{title ? title : "error"}</span>
            <span
                style={{color : '#D9D9D9', cursor : 'pointer'}}
            > ⟩ </span>
        </div>
    )
};

export default Link;