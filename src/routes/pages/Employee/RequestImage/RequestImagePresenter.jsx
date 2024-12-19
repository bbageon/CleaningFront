import EmployeeImageUpload from './Components/EmployeeImageUpload/EmployeeImageUpload';
import './RequestImage.css';
import { EmployeeMainLayout, Top } from 'components/Layouts';

const RequestImagePresenter = ({

}) => {

    return (
        <EmployeeMainLayout
            footer={true}

            isShowTop={true}
            title={'청소완료 화면'}
            notShowIcon={true}
        >
            <EmployeeImageUpload/>
        </EmployeeMainLayout>
    );
};

export default RequestImagePresenter;