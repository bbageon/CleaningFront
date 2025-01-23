import { useNavigate } from "react-router-dom";
import ProfilePresenter from "./ProfilePresenter";
import { useEffect, useState } from "react";
import { useEmployeeRequestClean } from "hooks/RequestCleanHooks";
import { useAuthStore } from "store";
import { ColumnHeightOutlined } from "@ant-design/icons";


const ProfileContainer = () => {
    /* ===== VARIABLE ===== */
    const [EmployeeRequestList, setEmployeeRequestList] = useState(null);
    const [requestFinished, setRequestFinished] = useState([]);
    const [requestInProgress, setRequestInProgress] = useState([]);


    /* ===== STORE ===== */
    const employee_id = useAuthStore(state => state.user_id);

    /* ===== QUERY ===== */
    const { data : EmployeeRequestListRes, isLoading : EmployeeRequestListLoading, isError : EmployeeRequestError } = useEmployeeRequestClean(employee_id);

    const isLoading = EmployeeRequestListLoading;

    /* ===== EFFECT ===== */
    useEffect(() => {
        if (EmployeeRequestListRes && !EmployeeRequestListLoading) {
            // const result = EmployeeRequestListRes?.data;
            const result = Array.isArray(EmployeeRequestListRes?.data)
                ? EmployeeRequestListRes?.data
                : [EmployeeRequestListRes?.data];

            setEmployeeRequestList(result);


            const finished = result?.filter(item => 
                item.request_clean.request_status === 'DONE' ||
                item.request_clean.request_status === 'PAY_WAITING'
            );

            const inProgress = result?.filter(item => 
                item.request_clean.request_status === 'CLEANING' ||
                item.request_clean.request_status === 'WAITING'
            );

            setRequestFinished(finished);
            setRequestInProgress(inProgress);
        }
    }, [EmployeeRequestListRes, EmployeeRequestListLoading])

    console.log(EmployeeRequestList, requestFinished, requestInProgress);

    /* ===== RENDER ===== */
    return (
        <ProfilePresenter
            total={EmployeeRequestList} 
            finish={requestFinished}
            inProgress={requestInProgress}
            isLoading={isLoading}
        />
    );
};

export default ProfileContainer;