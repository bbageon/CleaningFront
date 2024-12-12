import EmployeeMainContents from './Components/Contents/EmployeeMainContents';
import EmployeeHeader from './Components/Header/Header';
import './Main.css';
import { EmployeeMainLayout } from 'components/Layouts';

const MainPresenter = ({

}) => {

    return (
        <EmployeeMainLayout
            footer={true}
            gap={"20px"}
        >
            <EmployeeHeader
                EmployName={"김건우"}
            />
            <EmployeeMainContents
                ClientName={"김건우"}
            />

        </EmployeeMainLayout>
    );
};

export default MainPresenter;

