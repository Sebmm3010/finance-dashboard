import { IKpi, IProduct } from '@/interfaces';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const reduxApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: 'main',
  tagTypes: ['Kpis', 'Products'],
  endpoints: (build) => ({
    getKpis: build.query<IKpi[], any>({
      query: () => '/kpis',
      providesTags: ['Kpis']
    }),
    getProducts: build.query<IProduct[], any>({
      query: () => '/products',
      providesTags: ['Products']
    })
  })
});

export const { useGetKpisQuery, useGetProductsQuery } = reduxApi;
