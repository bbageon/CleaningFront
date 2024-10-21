import { Content } from '../../../../../../components';
import CompanyCard from '../CompanyCard';
import './CompanyList.css';

const CompanyList = ({
    companies,
    designateCompanyCategory,
}) => {

    return (


        <Content
            paddingBottom={0}
            paddingLeft={0}
            paddingRight={0}
        >
            {
                companies.map((company, index) => {

                    const companyData = company.company ? company.company : company;

                    const designatedCategories = designateCompanyCategory.filter(category => category.company_id === companyData.company_id);

                    return (
                        <CompanyCard
                            key={index}
                            company={companyData}
                            designatedCategories={designatedCategories}
                        />
                    );
                })
            }
        </Content>
    );
};

export default CompanyList;