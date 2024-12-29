import useSWR, { mutate } from 'swr';

import { fetcher } from "src/utils/axios";


export function useTokensByWallet() {
    const URL = `${process.env.NEXT_PUBLIC_HOST_API_V2}/my-tokens`; 
    const { data, error } = useSWR(URL, fetcher, {
        shouldRetryOnError: false,
        revalidateOnFocus: false,
    });

    return {
        tokens: data,
        isLoading: !error && !data,
        isError: error,
        refetch: () => mutate(URL),
        pageCount: data?.totalPages,

    };
}


// get token id by wallet address
export function useTokenIdByWallet(tokenAddress: string) {
    const URL = `${process.env.NEXT_PUBLIC_HOST_API_V2}/token/${tokenAddress}`;

    const { data, error } = useSWR(URL, fetcher, {
        shouldRetryOnError: false,
        revalidateOnFocus: false,
    });

    return {
        token: data,
        isLoading: !error && !data,
        isError: error,
    };
}

export function useTokenIdOrder(tokenAddress: string) {
    const URL = `${process.env.NEXT_PUBLIC_HOST_API_V2}/tokenOrder/${tokenAddress}`;

    const { data, error } = useSWR(URL, fetcher, {
        shouldRetryOnError: false,
        revalidateOnFocus: false,
    });

    return {
        token: data,
        isLoading: !error && !data,
        isError: error,
    };
}