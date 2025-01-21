import './RequestList.css';
import Requestform from './Components/Requestform';
import { EmployeeMainLayout, Top } from 'components/Layouts';

const RequestListPresenter = ({
    Lists,
    isLoading,
}) => {

    if (isLoading) {
        return null
    }

    /* ===== RENDER ===== */
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