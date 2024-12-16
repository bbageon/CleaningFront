import { createQueryKeys } from "@lukemorales/query-key-factory";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { API } from "api";

/**
 * [CartList] Query Key 생성
 * --
 */
export const cartListQueryKeys = createQueryKeys('cartList', {
    getCartList: (idx: number, params?: { [key: string]: string | number }) => [
        idx,
        params,
    ],
    getCartLists: (params?: { [key: string]: string | number }) => [
        params,
    ],
});

/**
 * [CartList] 장바구니 목록 전체 조회
 * --
 */
export const useGetCartList = () => {
    return useQuery({
        queryKey: cartListQueryKeys.getCartLists().queryKey,
        queryFn: () => API.getCartList(),
    });
};

/**
 * [CartList] 장바구니 목록 단일 조회
 * --
 * @param cart_list_id
 */
export const useGetOneCartList = (cart_list_id: number) => {
    return useQuery({
        queryKey: cartListQueryKeys.getCartList(cart_list_id).queryKey,
        queryFn: () => API.getOneCartList(cart_list_id),
        enabled: !!cart_list_id,
    });
};

/**
 * [CartList] 장바구니의 장바구니 목록 조회
 * --
 * @param cart_id
 */
export const useGetCompanyCartList = (cart_id: number) => {
    return useQuery({
        queryKey: cartListQueryKeys.getCartList(cart_id).queryKey,
        queryFn: () => API.getCompanyCartList(cart_id),
        enabled: !!cart_id,
    });
};

/**
 * [CartList] 장바구니 목록 서비스 조회
 * --
 * @param service_id
 */
export const useGetServiceCartList = (service_id: number) => {
    return useQuery({
        queryKey: cartListQueryKeys.getCartList(service_id).queryKey,
        queryFn: () => API.getServiceCartList(service_id),
        enabled: !!service_id,
    });
};

/**
 * [CartList] 회원 장바구니 목록 조회
 * --
 * @param user_id
 */
export const useGetUserCartServiceList = (user_id: number) => {
    return useQuery({
        queryKey: cartListQueryKeys.getCartList(user_id).queryKey,
        queryFn: () => API.getUserServiceCartList(user_id),
        enabled: !!user_id,
    });
};


/**
 * [CartList] 장바구니 목록 생성
 * --
 */
export const useCreateCartList = (onSuccess?: (data: any) => void, onError?: (error: any) => void) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (body: any) => {
            const response = await API.postCartList(body);
            return response.data;
        },
        onSuccess: (data) => {
            // console.log('장바구니 목록 생성 완료: ', data);

            queryClient.invalidateQueries(cartListQueryKeys.getCartLists());

            if (onSuccess) {
                onSuccess(data);
            }
        },
        onError: (error) => {
            // console.error('장바구니 목록 생성 실패: ', error);

            if (onError) {
                onError(error);
            }
        },
    });
};

/**
 * [CartList] 장바구니 목록 수정
 * --
 */
export const useUpdateCartList = (onSuccess?: (data: any) => void, onError?: (error: any) => void) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ cart_list_id, body }: { cart_list_id: number, body: any }) => {
            const response = await API.putCartList(body);
            return response.data;
        },
        onSuccess: (data) => {
            // console.log('장바구니 목록 수정 완료: ', data);

            queryClient.invalidateQueries(cartListQueryKeys.getCartLists());

            if (onSuccess) {
                onSuccess(data);
            }
        },
        onError: (error) => {
            // console.error('장바구니 목록 수정 실패: ', error);

            if (onError) {
                onError(error);
            }
        },
    });
}

/**
 * [CartList] 장바구니 목록 삭제
 * --
 */
export const useDeleteCartList = (onSuccess?: (data: any) => void, onError?: (error: any) => void) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ cart_list_id, cart_id }: { cart_list_id: number, cart_id: number }) => {
            const response = await API.deleteCartList(cart_list_id);
            return response.data;
        },
        onMutate: async ({ cart_list_id, cart_id }: { cart_list_id: number, cart_id: number }) => {

            const previousData = queryClient.getQueryData(cartListQueryKeys.getCartList(cart_id).queryKey);
            // console.log('previousData', previousData);

            queryClient.setQueryData(cartListQueryKeys.getCartList(cart_id).queryKey, (oldData: any) => {
                // console.log('oldData', oldData.data);
                if (!oldData?.data?.cart_lists) return oldData;
                return {
                    ...oldData,
                    data: {
                        ...oldData.data,
                        cart_lists: oldData.data.cart_lists.filter((item: any) => item.cart_list_id !== cart_list_id),
                    }
                };
            });

            return { previousData };
        },
        onSuccess: (data) => {
            // console.log('장바구니 목록 삭제 완료: ', data);

            queryClient.invalidateQueries(cartListQueryKeys.getCartLists());

            if (onSuccess) {
                onSuccess(data);
            }
        },
        onError: (error, variables, context) => {
            // console.error('장바구니 목록 삭제 실패: ', error);

            if (context?.previousData) {
                queryClient.setQueryData(cartListQueryKeys.getCartLists().queryKey, context.previousData);
            }

            if (onError) {
                onError(error);
            }
        },
        onSettled: () => {
            queryClient.invalidateQueries(cartListQueryKeys.getCartLists());
        }
    });
};