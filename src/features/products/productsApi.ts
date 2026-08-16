import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ProductsResponse } from "../../types/product";

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://dummyjson.com"
    }),
    endpoints: (builder) => ({
        getProducts: builder.query<ProductsResponse, { limit?: number, skip?: number } | void>({
            query: (params) => {
                const limit = params?.limit ?? 10;
                const skip = params?.skip ?? 0;
                return `products?limit=${limit}&skip=${skip}`
            },

            serializeQueryArgs: ({ endpointName }) => endpointName,
            merge: (currentCache, newItems) => {
                if (newItems.skip === 0) {
                    return newItems;
                }
                currentCache.products.push(...newItems.products)
                currentCache.skip = newItems.skip
            },
            forceRefetch: ({ currentArg, previousArg }) =>
                currentArg?.skip != previousArg?.skip,
        })
    })
})

export const { useGetProductsQuery } = productsApi;