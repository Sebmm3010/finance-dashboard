import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IKpi, IProduct, ITransactions } from '@/interfaces';

export const reduxApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: 'main',
  tagTypes: ['Kpis', 'Products', 'Transactions'],
  endpoints: (build) => ({
    getKpis: build.query<IKpi[], any>({
      query: () => '/kpis',
      providesTags: ['Kpis']
    }),
    getProducts: build.query<IProduct[], any>({
      query: () => '/products',
      providesTags: ['Products']
    }),
    getTransactions: build.query<ITransactions[], any>({
      query: () => '/transactions',
      providesTags: ['Transactions']
    })
  })
});

export const { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } =
  reduxApi;
