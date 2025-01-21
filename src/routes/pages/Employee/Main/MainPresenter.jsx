import EmployeeMainContents from './Components/Contents/EmployeeMainContents';
import EmployeeHeader from './Components/Header/Header';
import './Main.css';
import { EmployeeMainLayout } from 'components/Layouts';

const MainPresenter = ({
    employeeData,
    isLoading,
    EmployeeRequestList,
    requestCleanImages,
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
                EmployName={employeeData.name}
            />
            <EmployeeMainContents
                EmployeeRequestList={EmployeeRequestList}
                requestCleanImages={requestCleanImages}
            />
        </EmployeeMainLayout>
    );
};

export default MainPresenter;

