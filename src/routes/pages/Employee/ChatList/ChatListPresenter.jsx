import './ChatList.css';
import { EmployeeMainLayout } from 'components/Layouts';

const ChatListPresenter = ({

}) => {

    return (
        <EmployeeMainLayout
            footer={true}

            isShowTop={true}
            title={'대화방 목록'}
            notShowIcon={true}
        >

        </EmployeeMainLayout>
    );
};

export default ChatListPresenter;