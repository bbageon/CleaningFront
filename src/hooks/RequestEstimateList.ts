import { createQueryKeys } from "@lukemorales/query-key-factory";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { API } from "api";

/**
 * [RequestEstimateList] Query key 생성
 * --
 */
export const requestEstimateListQueryKeys = createQueryKeys('requestEstimateList', {
    getRequestEstimateList: (idx: number, params?: { [key: string]: string | number }) => [
        idx,
        params,
    ],
    getRequestEstimateLists: (params?: { [key: string]: string | number }) => [
        params,
    ],
});

/**
 * [RequestEstimateList] 견적서 요청 목록 전체 조회
 * --
 */
export const useGetRequestEstimateList = () => {
    return useQuery({
        queryKey: requestEstimateListQueryKeys.getRequestEstimateLists().queryKey,
        queryFn: () => API.getRequestEstimateList(),
    });
};

/**
 * [RequestEstimateList] 견적서 요청 목록 단일 조회
 * --
 */
export const useGetOneRequestEstimateList = (request_estimate_list_id: number) => {
    return useQuery({
        queryKey: requestEstimateListQueryKeys.getRequestEstimateList(request_estimate_list_id).queryKey,
        queryFn: () => API.getOneRequestEstimateList(request_estimate_list_id),
        enabled: !!request_estimate_list_id,
    });
};

/**
 * [RequestEstimateList] 청소업체 견적서 요청 목록 조회
 * --
 */
export const useGetCompanyRequestEstimateList = (company_id: number) => {
    return useQuery({
        queryKey: requestEstimateListQueryKeys.getRequestEstimateList(company_id).queryKey,
        queryFn: () => API.getCompanyRequestEstimateList(company_id),
        enabled: !!company_id,
    });
};

/**
 * [RequestEstimateList] 견적서 요청에 관한 목록 전체 조회
 * --
 */
export const useGetEstimateRequestEstimateList = (request_estimate_id: number) => {
    return useQuery({
        queryKey: requestEstimateListQueryKeys.getRequestEstimateList(request_estimate_id).queryKey,
        queryFn: () => API.getEstimateRequestEstimateList(request_estimate_id),
        enabled: !!request_estimate_id,
    });
};

/**
 * [RequestEstimateList] 견적서 요청 목록 생성
 * --
 */
export const useCreateRequestEstimateList = (onSuccess?: (data: any) => void, onError?: (error: any) => void) => {
    const queryClient = useQueryClient(); // invalidateQueries를 위해 선언

    return useMutation({
        mutationFn: async (body: any) => {
            const response = await API.postRequestEstimateList(body);
            return response.data;
        },
        onSuccess: (data) => {
            console.log('견적서 요청 목록 생성 완료: ', data);

            queryClient.invalidateQueries(requestEstimateListQueryKeys.getRequestEstimateLists());

            if (onSuccess) {
                onSuccess(data);
            }
        },
        onError: (error) => {
            console.error('견적서 요청 목록 생성 실패: ', error);

            if (onError) {
                onError(error);
            }
        },
    });
};

/**
 * [RequestEstimateList] 견적서 요청 목록 정보 수정
 * --
 */
export const useUpdateRequestEstimateList = (onSuccess?: (data: any) => void, onError?: (error: any) => void) => {
    const queryClient = useQueryClient();
    
    return useMutation({
        mutationFn: async ({ request_estimate_list_id, body }: { request_estimate_list_id: number, body: any }) => {
            const response = await API.putRequestEstimateList(request_estimate_list_id, body);
            return response.data;
        },
        onSuccess: (data) => {
            console.log('견적서 요청 목록 수정 완료: ', data);

            queryClient.invalidateQueries(requestEstimateListQueryKeys.getRequestEstimateLists());

            if (onSuccess) {
                onSuccess(data);
            }
        },
        onError: (error) => {
            console.error('견적서 요청 목록 수정 실패: ', error);

            if (onError) {
                onError(error);
            }
        },
    });
};

/**
 * [RequestEstimateList] 견적서 요청 목록 삭제
 * --
 */
export const useDeleteRequestEstimateList = (onSuccess?: (data: any) => void, onError?: (error:any) => void) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (request_estimate_list_id: number) => {
            const response = await API.deleteRequestEstimateList(request_estimate_list_id);
            return response.data;
        },
        onSuccess: (data) => {
            console.log('견적서 요청 목록 삭제 완료: ', data)

            queryClient.invalidateQueries(requestEstimateListQueryKeys.getRequestEstimateLists());

            if (onSuccess) {
                onSuccess(data);
            }
        },
        onError: (error) => {
            console.error('견적서 요청 목록 삭제 실패: ', error);

            if (onError) {
                onError(error);
            }
        }
    });
};