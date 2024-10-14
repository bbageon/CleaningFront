import useHistoryStore from "store/useHistoryStore";
import ServiceHistoryDetailPresenter from "./ServiceHistoryDetailPresenter"
import { useParams } from "react-router-dom";
import { useState } from "react";

const ServiceHistoryDetailContainer = () => {

    const { requestCleans } = useHistoryStore();
    const { id: requestId } = useParams();

    const requestDetail = requestCleans.find(request => request.request_clean_id === Number(requestId));

    /* ===== STATE ===== */

    /* ===== VARIABLES ===== */

    /* ===== FUNCTION ===== */

    /* ===== HOOKS ===== */

    /* ===== RENDER ===== */
    return (
        <ServiceHistoryDetailPresenter
            requestDetail={requestDetail}
        />
    );
};

export default ServiceHistoryDetailContainer;