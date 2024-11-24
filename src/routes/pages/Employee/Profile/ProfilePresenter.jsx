import './Profile.css';
import { EmployeeMainLayout } from 'components/Layouts';

const ProfilePresenter = ({

}) => {

    return (
        <EmployeeMainLayout
            footer={true}

            isShowTop={true}
            title={'프로필'}
            notShowIcon={true}
        >

        </EmployeeMainLayout>
    );
};

export default ProfilePresenter;