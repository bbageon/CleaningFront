import { createQueryKeys } from "@lukemorales/query-key-factory";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { API } from "api";

/**
 * [Pay] Query Keys 생성
 * --
 */
export const payQueryKeys = createQueryKeys('pay', {
    getPay: (idx: number, params?: { [key: string]: string | number }) => [
        idx,
        params,
    ],
    getPays: (params?: { [key: string]: string | number }) => [
        params,
    ],
});

/**
 * [Pay] 결제 전체 조회
 * --
 */
export const useGetPays = () => {
    return useQuery({
        queryKey: payQueryKeys.getPays().queryKey,
        queryFn: () => API.getPay(),
    });
};

/**
 * [Pay] 결제 단일 조회
 * --
 */
export const useGetOnePay = (pay_id: number) => {
    return useQuery({
        queryKey: payQueryKeys.getPay(pay_id).queryKey,
        queryFn: () => API.getOnePay(pay_id),
        enabled: !!pay_id,
    });
};

/**
 * [Pay] 고객 결제 조회
 * --
 */
export const useGetUserPay = (user_id: number) => {
    return useQuery({
        queryKey: payQueryKeys.getPay(user_id).queryKey,
        queryFn: () => API.getUserPay(user_id),
        enabled: !!user_id,
    });
};

/**
 * [Pay] 청소업체 결제 조회
 * --
 */
export const useGetCompanyPay = (company_id: number) => {
    return useQuery({
        queryKey: payQueryKeys.getPay(company_id).queryKey,
        queryFn: () => API.getCompanyPay(company_id),
        enabled: !!company_id,
    });
};

/**
 * [Pay] 결제 생성
 * --
 */
export const useCreatePay = (onSuccess?: (data: any) => void, onError?: (error: any) => void) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (body: any) => {
            const response = await API.postPay(body);
            return response.data;
        },
        onSuccess: (data) => {
            console.log('결제 생성 완료: ', data);

            queryClient.invalidateQueries(payQueryKeys.getPays());

            if (onSuccess) {
                onSuccess(data);
            }
        },
        onError: (error) => {
            console.error('결제 생성 실패: ', error);

            if (onError) {
                onError(error);
            }
        },
    });
};

/**
 * [Pay] 결제 수정
 * --
 */
export const useUpdatePay = (onSuccess?: (data: any) => void, onError?: (error: any) => void) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ pay_id, body }: { pay_id: number, body: any }) => {
            const response = await API.putPay(pay_id, body);
            return response.data;
        },
        onSuccess: (data) => {
            console.log('결제 수정 완료: ', data);

            queryClient.invalidateQueries(payQueryKeys.getPays());

            if (onSuccess) {
                onSuccess(data);
            }
        },
        onError: (error) => {
            console.error('결제 수정 실패: ', error);

            if (onError) {
                onError(error);
            }
        },
    });
};

/**
 * [Pay] 결제 삭제
 * --
 */
export const useDeletePay = (onSuccess?: (data: any) => void, onError?: (error: any) => void) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (pay_id: number) => {
            const response = await API.deletePay(pay_id);
            return response.data;
        },
        onSuccess: (data) => {
            console.log('결제 삭제 완료: ', data);

            queryClient.invalidateQueries(payQueryKeys.getPays());

            if (onSuccess) {
                onSuccess(data);
            }
        },
        onError: (error) => {
            console.error('결제 삭제 실패: ', error);

            if (onError) {
                onError(error);
            }
        },
    });
};