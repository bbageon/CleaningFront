import { Content, RadioButton } from '../../../../../../components';
import './CompanyMenuBottom.css';

const CompanyMenuBottom = ({

}) => {
    return (
        <div className='company-menu-bottom-wrap'>
            <Content
                paddingTop={20}
                paddingBottom={20}
                paddingLeft={16}
                border={true}
            >
                <div className='company-menu-bottom'>
                    <span className='large bold'>큰 카테고리</span>
                </div>
            </Content>
            <Content
                paddingTop={20}
                gap={30}
            >
                <RadioButton

                />
            </Content>

        </div>
    );
};

export default CompanyMenuBottom;