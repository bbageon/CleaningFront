import './CompanyTitle.css';
import Crown from '../Crown.png'

const CompanyTitle = () => {
    return (
        <div className='company-title-container'>
            <div className='company-title-img'>
                <img src={Crown} />
            </div>
            <div className='company-tile-name'>
                <text className='sub-title' style={{fontSize : '18px'}}>김재모의 클린 카피바라</text>
            </div>
            <div className='company-title-navigate'>
                {'>'}
            </div>
        </div>
    )
}

export default CompanyTitle;
