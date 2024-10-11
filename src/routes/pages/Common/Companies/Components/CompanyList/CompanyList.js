import { Content } from '../../../../../../components';
import CompanyCard from '../CompanyCard';
import './CompanyList.css';

const CompanyList = ({
    companies,
}) => {
    return (
        <Content
            paddingBottom={0}
            paddingLeft={0}
            paddingRight={0}
        >
            {
                companies.map((company, index) => {
                    return (
                        <CompanyCard
                            key={index}
                            company={company}
                        />
                    );
                })
            }
        </Content>
    );
};

export default CompanyList;