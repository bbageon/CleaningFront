    import './Profile.css';
    import { EmployeeMainLayout, Tab, TabCenter } from 'components/Layouts';
    import test from './test.svg';
    import { Children } from 'react';
import { ColumnHeightOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

/**
 * 직원 업무 요약
 * --
 */
const TaskSummary = ({
    total,
    finish,
    inProgress,
    employeeData,
}) => {
    return (
        <div className='task-container summary'>
            <div className='task-summary bluebar'>
                <span>총 수행 업무</span>
                {/* <span>{total?.length}</span> */}
                <span>{employeeData.total_tasks}</span>
            </div>
            <div className='task-summary yellowbar'>
                <span>진행 업무</span>
                {/* <span>{inProgress?.length}</span> */}
                <span>{employeeData.in_progress_tasks}</span>
            </div>
            <div className='task-summary greenbar'>
                <span>완료 업무</span>
                {/* <span>{finish?.length}</span> */}
                <span>{employeeData.completed_tasks}</span>
            </div>
        </div>
    )
};

/**
 * 직원 정보
 * --
 */
const EmployeeInfo = ({
    employeeData,
}) => {
    return (
        <div className='employee-profile-header'>
            <img src={employeeData.image} />
            <span className='employee-name'>{employeeData.name}</span>
            <span className='employee-email'>{employeeData.email}</span>
        </div>
    )
};

    /**
     * 청소 내역 필터링
     */

    const ProfilePresenter = ({
        total,
        finish,
        inProgress,
        isLoading,
    }) => {
        const navigate = useNavigate();
        
        const ProfileRequestForm = ({data}) => {
            return (
                <div className='profile-request-form-wrap'>
                    {data?.length > 0 ? (
                        <div className='profile-request-form-list'>
                            {data.map((item, idx) => (
                                
                                <div className='profile-request-form'
                                    onClick={()=>{navigate(`/employee/requestinfo/${item?.request_clean.request_clean_id}`)}}
                                >
                                    <p className='profile-request-name'>{item?.request_clean.user_name ? item?.request_clean.user_name : "이름 없음"} 님</p>
                                    <p>
                                        {item?.request_clean.clean_address ? item?.request_clean.clean_address : "주소없음"}
                                        {" "} 
                                        {item?.request_clean.clean_address_detail ? item?.request_clean.clean_address_detail : "상세 주소없음"} 
                                    </p>

                                </div>
                            ))}
                        </div>
                    ) : (
                        <div>요청 기록이 없습니다.</div>
                    )}
                    
                </div>
            )
        }
        const Tabitems = [
            {
                label: "진행중",
                key: 0,
                children: <ProfileRequestForm
                    data={inProgress}
                />,
            },
            {
                label: "청소 완료",
                key: 1,
                children: <ProfileRequestForm
                    data={finish}
                />,
            },
        ]

        if (isLoading) {
            return null;
        }

    /* ===== RENDER ===== */
    return (
        <EmployeeMainLayout
            footer={true}
            isShowTop={true}
            title={'프로필'}
            notShowIcon={true}
        >
            <div className='employee-profile-container'>
                <EmployeeInfo
                    employeeData={employeeData}
                />
                <TaskSummary
                    employeeData={employeeData}
                    total={total}
                    finish={finish}
                    inProgress={inProgress}
                />
                <TabCenter
                    items={Tabitems}
                    finish={finish}
                    inProgress={inProgress}
                />
            </div>
        </EmployeeMainLayout>
    );
};

    export default ProfilePresenter;