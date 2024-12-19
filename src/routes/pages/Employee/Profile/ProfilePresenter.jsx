import './Profile.css';
import { EmployeeMainLayout, Tab, TabCenter } from 'components/Layouts';
import test from './test.svg';

/**
* 직원 업무 요약
*/
const TaskSummary = () => {
    return (
        <div className='task-container summary'>
            <div className='task-summary bluebar'>
                <span>총 수행 업무</span>
                <span>200</span>
            </div>
            <div className='task-summary yellowbar'>
                <span>진행 업무</span>
                <span>186</span>
            </div>
            <div className='task-summary greenbar'>
                <span>완료 업무</span>
                <span>186</span>
            </div>
        </div>
    )
};

/**
 * 직원 정보
 */
const EmployeeInfo = () => {
    return (
        <div className='employee-profile-header'>
            <img src={test} />
            <span className='employee-name'>이순신</span>
            <span className='employee-email'>cleankong@gmail.com</span>
        </div>
    )
};

/**
 * 청소 내역 필터링
 */

const ProfilePresenter = ({

}) => {
    const Tabitems = [
        {
            label : "진행중",
            key : 0,
        },
        {
            label : "청소 완료",
            key : 1,
        },
    ]

    return (
        <EmployeeMainLayout
            footer={true}

            isShowTop={true}
            title={'프로필'}
            notShowIcon={true}
        >
            <div className='employee-profile-container'>
                <EmployeeInfo/>
                <TaskSummary />
                <TabCenter
                    items={Tabitems}
                />
            </div>

        </EmployeeMainLayout>
    );
};

export default ProfilePresenter;