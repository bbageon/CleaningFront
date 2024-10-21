import './CompanyTitle.css';
import Crown from '../Crown.png'
import { Content } from 'components';

const CompanyTitle = ({

}) => {
    return (
        <Content
            paddingBottom={0}
        >
            <div className='company-title-container'>
                <span className='bold large'>청소업체 이름 ⟩</span>
            </div>
        </Content>
    );
};

export default CompanyTitle;
