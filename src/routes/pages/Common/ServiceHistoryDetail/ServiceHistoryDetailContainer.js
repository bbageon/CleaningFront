import { useGetOneRequestClean } from "hooks/RequestCleanHooks";
import ServiceHistoryDetailPresenter from "./ServiceHistoryDetailPresenter"
import { useParams } from "react-router-dom";

const ServiceHistoryDetailContainer = () => {

    const { id: requestId } = useParams();

    const { data: requestDetailRes, isLoading, isError } = useGetOneRequestClean(requestId);
    const requestDetail = requestDetailRes?.data || [];

    if (isLoading) {
        return null;
    }

    /* ===== RENDER ===== */
    return (
        <ServiceHistoryDetailPresenter
            requestDetail={requestDetail}
        />
    );
};

export default ServiceHistoryDetailContainer;