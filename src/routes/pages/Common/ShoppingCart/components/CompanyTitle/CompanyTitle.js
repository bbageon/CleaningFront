import './CompanyTitle.css';
import { Content } from 'components';
import { useNavigate } from 'react-router-dom';

const CompanyTitle = ({
    company,
    handleNavigateCompany,

    address,
    address_detail
}) => {

    /* ===== VARIABLES ===== */
    const navigate = useNavigate();

    /* ===== RENDER ===== */
    return (
        <Content
            paddingBottom={0}
        >
            <div className='company-title-container'>
                <span className='bold large' onClick={handleNavigateCompany}>{company.company_name} ⟩</span>
            </div>
            <div
                className='company-title-address'
                onClick={() => navigate('/addressregistration')}
            >
                <span>{address} ⟩</span>
                <span className='gray1'>({address_detail})</span>
            </div>
        </Content>
    );
};

export default CompanyTitle;
