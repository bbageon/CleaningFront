import { useNavigate } from 'react-router-dom';
import { Content } from '../Layouts';
import './Button.css';
import Vector from './Vector.png';

const Button = ({
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingBottom,
    gap,
    border,
    flexDirection,
    Link
}) => {
    const navigate = useNavigate()

    const LinkClick = () => {
        if(Link) {
            navigate(Link);
        }
    }

    return (
        <Content>
            <div 
                className='button-container'
                style={{
                    flexDirection: flexDirection == 'row' ? 'row' : 'column',
                    paddingLeft: `${paddingLeft}px`,
                    paddingRight: `${paddingRight}px`,
                    paddingTop: `${paddingTop}px`,
                    paddingBottom: `${paddingBottom}px`,
                    gap: `${gap}px`,
                    borderBottom: border ? border : 'none',
                }}
                onClick={LinkClick}
            >
                <text className='button-text'>24,000원</text>
                <img src={Vector}/>
                <text className='button-text'>결제하기</text>
            </div>
        </Content>
        
    )
}


export default Button;