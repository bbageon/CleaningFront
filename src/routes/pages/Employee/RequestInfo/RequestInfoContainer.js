import RequestInfoPresenter from "./RequestInfoPresenter";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthStore } from "store";
import { useEmployeeSingleRequestClean } from "hooks/RequestCleanHooks";



const RequestInfoContainer = () => {
    /* ===== ROUTER ===== */
    const { request_id } = useParams();

    /* ===== STATE ===== */
    const [EmployeeSingleRequestCleanList, setEmployeeSingleRequestCleanList] = useState(null);
    const [RequestDays, setRequestDays] = useState([]);

    /* ===== STORE ===== */
    // const employee_id = useAuthStore(state => state.user_id);
    const employee_id = 3;

    /* ===== QUERY ===== */
    const { data: EmployeeSingleRequestCleanRes, isLoading: EmployeeSingleRequestCleanLoading, isError: EmployeeSingleRequestCleanError } = useEmployeeSingleRequestClean(employee_id, request_id);
    const EmployeeSingleRequestCleanLists = EmployeeSingleRequestCleanRes?.data || [];

    const isLoading = EmployeeSingleRequestCleanLoading;

    /* ===== EFFECT ===== */
    // useEffect(() => {
    //     if (EmployeeSingleRequestCleanLists && !EmployeeSingleRequestCleanLoading) {
    //         const result = EmployeeSingleRequestCleanLists;
    //         setEmployeeSingleRequestCleanList(result);
    //     }
    // }, [EmployeeSingleRequestCleanLoading, EmployeeSingleRequestCleanLists])
    // console.log(EmployeeSingleRequestCleanList, "List");

    const dummyData = {
        "employee_assignment_id": 5,
        "request_clean_id": 74,
        "employee_id": 3,
        "company_id": 1,
        "request_clean": {
            "request_clean_id": 74,
            "request_date": 1735462218,
            "start_clean_date": 1735484400,
            "expect_end_clean_date": null,
            "end_clean_date": null,
            "request_status": "WAITING",
            "total_price": 900000,
            "requirements": null,
            "unit": null,
            "clean_address": "부산 사상구 주례로 47",
            "clean_address_detail": "부산 사상구 주례동 88",
            "is_write_review": 0,
            "quantity": 20,
            "category": 2,
            "request_period": null,
            "request_clean_period_day": null,
            "user_name": "김건우",
            "created_at": 1735462219,
            "updated_at": 1735556739,
            "user_id": 3,
            "company_id": 1,
        }
    };

    const dummyImages = [
        {
            src: 'https://s3.ap-northeast-2.amazonaws.com/cleaning-image/ãã·ã´ã5.jpg',
        },
        {
            src: 'https://s3.ap-northeast-2.amazonaws.com/cleaning-image/ãã·ã´ã3.jpg',
        },
        {
            src: 'https://s3.ap-northeast-2.amazonaws.com/cleaning-image/ãã·ã´ã2.jpg',
        }
    ]

    /* ===== RENDER ===== */
    return (
        <RequestInfoPresenter
            isLoading={isLoading}
            // data={EmployeeSingleRequestCleanList}
            data={dummyData}
            images={dummyImages}

            RequestDays={RequestDays}
            setRequestDays={setRequestDays}
        />
    );
};

export default RequestInfoContainer;