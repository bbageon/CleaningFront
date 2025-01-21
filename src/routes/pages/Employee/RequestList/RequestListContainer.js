import RequestListPresenter from "./RequestListPresenter";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEmployeeRequestClean } from "hooks/RequestCleanHooks";
import { useAuthStore } from "store";
import { isLogin } from "util";

const RequestListContainer = () => {

    /* ===== ROUTER ===== */
    const navigate = useNavigate();

    /* ===== STATE ===== */
    const [EmployeeRequestList, setEmployeeRequestList] = useState(null);

    /* ===== STORE ===== */
    const employee_id = useAuthStore(state => state.user_id);

    /* ===== QUERY ===== */
    const { data: EmployeeRequestListRes, isLoading: EmployeeRequestListLoading, isError: EmployeeRequestError } = useEmployeeRequestClean(employee_id);
    const EmployeeRequestLists = EmployeeRequestListRes?.data;

    const isLoading = EmployeeRequestListLoading

    /* ===== FUNCTION ===== */
    const groupDataByYearMonth = (data) => {
        const groupedData = {};
        // 데이터가 없으면 빈 객체 반환
        if (!Array.isArray(data)) return groupedData;

        data.forEach((item) => {
            const startDate = item?.request_clean?.start_clean_date;

            if (startDate) {
                const date = new Date(startDate * 1000);
                const year = date.getFullYear();
                const month = date.getMonth() + 1; // 월은 0부터 시작하므로 +1 필요
                const key = `${year}년 ${month}월`;

                // 그룹화된 객체에 키가 없으면 초기화
                if (!groupedData[key]) {
                    groupedData[key] = [];
                }
                // 해당 키에 데이터 추가
                groupedData[key].push(item);
            }
        });

        return groupedData;
    };

    /* ===== EFFECTS ===== */
    useEffect(() => {
        if (isLogin()) {
            setEmployeeRequestList(groupDataByYearMonth(EmployeeRequestLists));
        } else {
            alert('로그인이 필요한 서비스입니다.');
            navigate('/employee/login');
        }
    }, [EmployeeRequestListLoading, EmployeeRequestLists])

    /* ===== RENDER ===== */
    return (
        <RequestListPresenter
            Lists={EmployeeRequestList}
            isLoading={isLoading}
        />
    );
};

export default RequestListContainer;