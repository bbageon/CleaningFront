import './CompanyTitle.css';
import Crown from '../Crown.png'
import { Content } from 'components';

const CompanyTitle = ({
    company,
    handleNavigateCompany,
}) => {
    return (
        <Content
            paddingBottom={0}
        >
            <div className='company-title-container'>
                <span className='bold large' onClick={handleNavigateCompany}>{company.company_name} ⟩</span>
            </div>
        </Content>
    );
};

export default CompanyTitle;
