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

            </EmployeeMainLayout>
        </>
    );
};

export default RequestListPresenter;