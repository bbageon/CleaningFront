import { createQueryKeys } from "@lukemorales/query-key-factory";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { API } from "api";

/**
 * [Review] Query Keys 생성
 * --
 */
export const reviewQueryKeys = createQueryKeys('review', {
    getReview: (idx: number, params?: { [key: string]: string | number }) => [
        idx,
        params,
    ],
    getReviews: (params?: { [key: string]: string | number }) => [
        params,
    ],
});

/**
 * [Review] 리뷰 전체 조회
 * --
 */
export const useGetReviews = () => {
    return useQuery({
        queryKey: reviewQueryKeys.getReviews().queryKey,
        queryFn: () => API.getReview(),
    });
};

/**
 * [Review] 리뷰 단일 조회
 * --
 */
export const useGetOneReview = (review_id: number) => {
    return useQuery({
        queryKey: reviewQueryKeys.getReview(review_id).queryKey,
        queryFn: () => API.getOneReview(review_id),
        enabled: !!review_id,
    });
};

/**
 * [Review] 고객 작성 리뷰 조회
 * --
 */
export const useGetUserReview = (user_id: number) => {
    return useQuery({
        queryKey: reviewQueryKeys.getReview(user_id).queryKey,
        queryFn: () => API.getUserReview(user_id),
        enabled: !!user_id,
    });
};

/**
 * [Review] 청소업체 작성된 리뷰 조회
 * --
 */
export const useGetCompanyReview = (company_id: number) => {
    return useQuery({
        queryKey: reviewQueryKeys.getReview(company_id).queryKey,
        queryFn: () => API.getCompanyReview(company_id),
        enabled: !!company_id,
    });
};

/**
 * [Review] 리뷰 생성
 * --
 */
export const useCreateReview = (onSuccess?: (data: any) => void, onError?: (error: any) => void) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (body: any) => {
            const response = await API.postReview(body);
            return response.data;
        },
        onSuccess: (data) => {
            console.log('리뷰 생성 완료: ', data);

            queryClient.invalidateQueries(reviewQueryKeys.getReviews());

            if (onSuccess) {
                onSuccess(data);
            }
        },
        onError: (error) => {
            console.error('리뷰 생성 실패: ', error);

            if (onError) {
                onError(error);
            }
        },
    });
};

/**
 * [Review] 리뷰 수정
 * --
 */
export const useUpdateReview = (onSuccess?: (data: any) => void, onError?: (error: any) => void) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ review_id, body }: { review_id: Number, body: any }) => {
            const response = await API.putReview(review_id, body);
            return response.data;
        },
        onSuccess: (data) => {
            // console.log('리뷰 수정 완료: ', data);

            queryClient.invalidateQueries(reviewQueryKeys.getReviews());

            if (onSuccess) {
                onSuccess(data);
            }
        },
        onError: (error) => {
            // console.error('리뷰 수정 실패: ', error);

            if (onError) {
                onError(error);
            }
        },
    });
};

/**
 * [Review] 리뷰 삭제
 * --
 */
export const useDeleteReview = (onSuccess?: (data: any) => void, onError?: (error: any) => void) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ review_id, user_id }: { review_id: number, user_id: number }) => {
            const response = await API.deleteReview(review_id);
            return response.data;
        },
        onMutate: async ({ review_id, user_id }: { review_id: number, user_id: number }) => {

            const previousData = queryClient.getQueryData(reviewQueryKeys.getReview(user_id).queryKey);

            queryClient.setQueryData(reviewQueryKeys.getReview(user_id).queryKey, (oldData: any) => {
                if (!Array.isArray(oldData?.data?.reviews)) return oldData;
                return {
                    ...oldData,
                    data: {
                        ...oldData.data,
                        reviews: oldData.data.reviews.filter((item: any) => item.review_id !== review_id),
                    }
                };
            });

            return { previousData };
        },
        onSuccess: (data, { user_id }) => {
            // console.log('리뷰 삭제 완료: ', data);

            queryClient.invalidateQueries(reviewQueryKeys.getReview(user_id));

            if (onSuccess) {
                onSuccess(data);
            }
        },
        onError: (error, variables, context) => {
            // console.error('리뷰 삭제 실패: ', error);

            if (context?.previousData) {
                queryClient.setQueryData(reviewQueryKeys.getReview(variables.user_id).queryKey, context.previousData);
            }

            if (onError) {
                onError(error);
            }
        },
        onSettled: ({ user_id }) => {
            queryClient.invalidateQueries(reviewQueryKeys.getReview(user_id));
        }
    })
};