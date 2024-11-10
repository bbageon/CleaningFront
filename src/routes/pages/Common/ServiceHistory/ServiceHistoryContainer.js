import dayjs from "dayjs";
import ServiceHistoryPresenter from "./ServiceHistoryPresenter"
import { useGetUserRequestClean } from "hooks/RequestCleanHooks";
import { useEffect, useState } from "react";
import useAuthStore from "store/useAuthStore";

const ServiceHistoryContainer = () => {

    /* ===== VARIABLES ===== */
    /* ===== STATE ===== */
    const [tabKey, setTabKey] = useState(0);
    const [filteredHistories, setFilteredHistories] = useState([]);

    /* ===== STORE ===== */
    const userId = useAuthStore(state => state.user_id);

    /* ===== QUERY ===== */
    const { data: userRequestCleanRes, isLoading: userRequestCleanLoading, isError: userRequestCleanError } = useGetUserRequestClean(userId);
    const userRequestClean = userRequestCleanRes?.data || [];

    const isLoading = userRequestCleanLoading;


    /* ===== FUNCTION ===== */

    /* ===== EFFECTS ===== */
    useEffect(() => {
        if (!isLoading && userRequestClean) {
            const filteredServiceHistory = userRequestClean.request_cleans
                .filter(request => tabKey === 0 || request.category === tabKey)
                .sort((a, b) => dayjs.unix(b.request_date).valueOf() - dayjs.unix(a.request_date).valueOf());

            setFilteredHistories(filteredServiceHistory);
        }
    }, [tabKey, userRequestClean, isLoading]);


    /* ===== RENDER ===== */
    return (
        <ServiceHistoryPresenter
            isLoading={isLoading}

            // Tab
            setTabKey={setTabKey}

            userRequestClean={filteredHistories}
        />
    );
};

export default ServiceHistoryContainer;