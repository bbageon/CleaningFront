import MainPresenter from "./MainPresenter";
import { useEffect, useState } from "react";
import { useAuthStore } from "store";
import { useEmployeeRecentlyRequestClean } from "hooks/RequestCleanHooks";
import { lightFormat } from "date-fns";


const MainContainer = () => {
    const [EmployeeRequestList, setEmployeeRequestList] = useState(null);

    /* ===== STORE ===== */
    const employee_id = useAuthStore(state => state.user_id);

    /* ===== QUERY ===== */
    const { data: EmployeeRecentlyRequestListRes, isLoading: EmployeeRecentlyRequestListLoading, isError: EmployeeRecentlyRequestError } = useEmployeeRecentlyRequestClean(employee_id);
    const EmployeeRecentlyRequestLists = EmployeeRecentlyRequestListRes?.data;
    

    const isLoading = EmployeeRecentlyRequestListLoading;

    /* ===== EFFECTS ===== */
    useEffect(() => {
        if (EmployeeRecentlyRequestLists && !EmployeeRecentlyRequestListLoading) {
            const result = EmployeeRecentlyRequestLists?.request_clean;
            setEmployeeRequestList(result);
        }
    }, [EmployeeRecentlyRequestListLoading, EmployeeRecentlyRequestLists]);


    /* ===== RENDER ===== */
    return (
        <MainPresenter
            employee_id={employee_id}
            isLoading={isLoading}
            EmployeeRequestList={EmployeeRequestList}
        />
    );
};

export default MainContainer;