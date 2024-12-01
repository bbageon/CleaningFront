import Requestform from './components/Requestform';
import './RequestList.css';
import { EmployeeMainLayout, Top } from 'components/Layouts';

const RequestListPresenter = ({

}) => {

    return (
        <>
            <Top
                title={'청소요청 목록'}
                notShowIcon={true}
            />
            <EmployeeMainLayout
                footer={true}
            >
                <Requestform
                    months={["2024년 11월", "2024년 12월"]}
                    date={"24"}
                    day={"Sun"}
                />

            </EmployeeMainLayout>
        </>
    );
};

export default RequestListPresenter;