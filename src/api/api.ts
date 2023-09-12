import { IKpi } from '@/interfaces';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const reduxApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: 'main',
  tagTypes: ['Kpis'],
  endpoints: (build) => ({
    getKpis: build.query<IKpi[], any>({
      query: () => '/kpis',
      providesTags: ['Kpis']
    })
  })
});

export const { useGetKpisQuery } = reduxApi;
