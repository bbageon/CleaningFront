import Requestform from './components/Requestform';
import './RequestList.css';
import { EmployeeMainLayout, Top } from 'components/Layouts';

const RequestListPresenter = ({
    Date,
    List,
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
                    months={Date}
                    date={"24"}
                    day={"Sun"}
                    List={List}
                />

            </EmployeeMainLayout>
        </>
    );
};

export default RequestListPresenter;