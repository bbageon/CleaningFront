import Requestform from './Components/Requestform';
import './RequestList.css';
import { EmployeeMainLayout, Top } from 'components/Layouts';

const RequestListPresenter = ({
    Lists,
    isLoading,
}) => { 
    if (isLoading) {
        return null
    }

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
                    Lists={Lists}
                />

            </EmployeeMainLayout>
        </>
    );
};

export default RequestListPresenter;