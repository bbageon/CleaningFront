import { useNavigate, useParams } from "react-router-dom";
import RequestInfoPresenter from "./RequestInfoPresenter";
import { useEffect, useState } from "react";
import { useAuthStore } from "store";
import { useEmployeeSingleRequestClean } from "hooks/RequestCleanHooks";
import { createStringLiteral } from "typescript";


const RequestInfoContainer = () => {
    const [EmployeeSingleRequestCleanList, setEmployeeSingleRequestCleanList] = useState(null);
    /* ===== VARIABLES ===== */
    const { request_id } = useParams();
    const employee_id = useAuthStore(state => state.user_id);

    /* ===== QUERY ===== */
    const { data: EmployeeSingleRequestCleanRes, isLoading: EmployeeSingleRequestCleanLoading, isError: EmployeeSingleRequestCleanError } = useEmployeeSingleRequestClean(employee_id, request_id);
    const EmployeeSingleRequestCleanLists = EmployeeSingleRequestCleanRes?.data || [];


    const isLoading = EmployeeSingleRequestCleanLoading;

    /* ===== EFFECT ===== */
    useEffect(() => {
        if (EmployeeSingleRequestCleanLists && !EmployeeSingleRequestCleanLoading) {
            const result = EmployeeSingleRequestCleanLists;
            setEmployeeSingleRequestCleanList(result);
        }
    }, []);

    /* ===== RENDER ===== */
    return (
        <RequestInfoPresenter
            isLoading={isLoading}
            data={EmployeeSingleRequestCleanList}
        />
    );
};

export default RequestInfoContainer;