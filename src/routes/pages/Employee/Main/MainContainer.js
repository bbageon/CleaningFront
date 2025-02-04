import MainPresenter from "./MainPresenter";
import { useEffect, useState } from "react";
import { useAuthStore } from "store";
import { useEmployeeRecentlyRequestClean } from "hooks/RequestCleanHooks";
import { useGetCompanyRequestCleanImage } from 'hooks/RequestCleanImageHooks';
import { useGetOneEmployee } from 'hooks/EmployeeHooks';

const MainContainer = () => {
    /* ===== STATE ===== */
    const [EmployeeRequestList, setEmployeeRequestList] = useState(null);

    /* ===== STORE ===== */
    const employee_id = useAuthStore(state => state.user_id);

    /* ===== QUERY ===== */
    const { data: EmployeeRecentlyRequestListRes, isLoading: EmployeeRecentlyRequestListLoading, isError: EmployeeRecentlyRequestError } = useEmployeeRecentlyRequestClean(employee_id);
    const EmployeeRecentlyRequestLists = EmployeeRecentlyRequestListRes?.data || [];

    const requestCleanId = EmployeeRecentlyRequestLists.request_clean_id;
    
    const { data: requestCleanImagesRes, isLoading: requestCleanImagesLoading, isError: requestCleanImagesError } = useGetCompanyRequestCleanImage(requestCleanId);
    const requestCleanImages = requestCleanImagesRes?.data || [];

    const { data: employeeDataRes, isLoading: employeeDataLoading, isError: employeeError } = useGetOneEmployee(employee_id);
    const employeeData = employeeDataRes?.data || [];

    const isLoading = EmployeeRecentlyRequestListLoading || requestCleanImagesLoading || employeeDataLoading;
    

    /* ===== EFFECT ===== */
    useEffect(() => {
        if (EmployeeRecentlyRequestLists && !EmployeeRecentlyRequestListLoading) {
            const result = EmployeeRecentlyRequestLists?.request_clean;
            setEmployeeRequestList(result);
        }
    }, [EmployeeRecentlyRequestListLoading, EmployeeRecentlyRequestLists]);

    /* ===== RENDER ===== */
    return (
        <MainPresenter
            isLoading={isLoading}
            employeeData={employeeData}
            EmployeeRequestList={EmployeeRequestList}
            requestCleanImages={requestCleanImages}
        />
    );
};

export default MainContainer;