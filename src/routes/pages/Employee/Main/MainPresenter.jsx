import EmployeeHeader from './components/Header/Header';
import EmployeeMainContents from './components/Contents/EmployeeMainContents';
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

