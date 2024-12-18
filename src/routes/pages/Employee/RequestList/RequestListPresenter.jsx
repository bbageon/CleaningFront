import Requestform from './components/Requestform';
import './RequestList.css';
import { EmployeeMainLayout, Top } from 'components/Layouts';

const RequestListPresenter = ({
    Lists,
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
                    months={[]}
                    date={"24"}
                    day={"Sun"}
                    Lists={Lists}
                />

            </EmployeeMainLayout>
        </>
    );
};

export default RequestListPresenter;