import { useNavigate } from "react-router-dom";
import RequestListPresenter from "./RequestListPresenter";
import { useEffect, useState } from "react";
import { useEmployeeRequestClean } from "hooks/RequestCleanHooks";
import { useAuthStore } from "store";


const RequestListContainer = () => {
    const [EmployeeRequestList, setEmployeeRequestList] = useState(null);

    /* ===== STORE ===== */
    const employee_id = useAuthStore(state => state.user_id);

    const { data: EmployeeRequestListRes, isLoading: EmployeeRequestListLoading, isError: EmployeeRequestError } = useEmployeeRequestClean(employee_id);
    const EmployeeRequestLists = EmployeeRequestListRes?.data;

    const groupDataByYearMonth = (data) => {
        const groupedData = {};
        // 데이터가 없으면 빈 객체 반환
        if (!data) return groupedData;
    
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

    useEffect (() => {
        setEmployeeRequestList(groupDataByYearMonth(EmployeeRequestLists))
    }, [])

    // /** 날짜 추출 (중복 제거) */
    // const employeeRequestDate = [
    //     ...new Set(
    //         EmployeeRequestLists?.map(request => {
    //             if (request.request_clean.start_clean_date) {
    //                 const date = new Date(request.request_clean.start_clean_date * 1000);
    //                 const year = date.getFullYear();
    //                 const month = date.getMonth() + 1; // getMonth는 0부터 시작하므로 +1 필요
    //                 return `${year}년 ${month}월`;
    //             }
    //             return null; // date가 없는 경우
    //         }).filter(dateStr => dateStr !== null) // null 제거
    //     )
    // ];
    const isLoading = EmployeeRequestListLoading

    /* ===== RENDER ===== */
    return (
        <RequestListPresenter
            Lists={EmployeeRequestList}
        />
    );
};

export default RequestListContainer;