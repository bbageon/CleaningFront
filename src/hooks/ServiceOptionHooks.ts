import { createQueryKeys } from "@lukemorales/query-key-factory";
import { useQuery } from "@tanstack/react-query";
import { API } from "api";

/**
 * [ServiceOption] Query Key 생성
 * --
 */
export const serviceOptionQueryKeys = createQueryKeys('serviceOption', {
    getServiceOption: (idx: number, params?: { [key: string]: string | number }) => [
        idx,
        params,
    ],
    getServiceOptions: (params?: { [key: string] : string | number }) => [
        params,
    ],
});

// /**
//  * [ServiceOption] 서비스 옵션 전체 조회
//  * --
//  */
// export const useGetServiceOptions = () => {
//     return useQuery({
//         queryKey: serviceOptionQueryKeys.getServiceOptions().queryKey,
//         queryFn: () => API.getServiceOption(),
//     });
// };

// /**
//  * [ServiceOption] 서비스 옵션 단일 조회
//  * --
//  */
// export const useGetServiceOption = (service_option_id: number) => {
//     return useQuery({
//         queryKey: serviceOptionQueryKeys.getServiceOption(service_option_id).queryKey,
//         queryFn: () => API.getOneServiceOption(service_option_id),
//         enabled: !!service_option_id,
//     });
// };

// /**
//  * [ServiceOption] 청소업체 서비스 옵션 조회
//  * --
//  */
// // export const useGetCompanyServiceOption