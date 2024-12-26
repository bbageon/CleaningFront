import EmployeeMainContents from './components/Contents/EmployeeMainContents';
import EmployeeHeader from './components/Header/Header';
import './Main.css';
import { EmployeeMainLayout } from 'components/Layouts';

const MainPresenter = ({
    employee_id,
    isLoading,
    EmployeeRequestList,
}) => {
    if (isLoading) {
        return null;
    }
    
    return (
        <EmployeeMainLayout
            footer={true}
            gap={"20px"}
        >
            <EmployeeHeader
                EmployName={employee_id}
            />
            <EmployeeMainContents
                EmployeeRequestList={EmployeeRequestList}
            />

        </EmployeeMainLayout>
    );
};

export default MainPresenter;

