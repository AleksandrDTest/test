import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type TCurrency = {
  id: string;
  name: string;
  min_size: number;
};

interface ICurrencyData {
  data: TCurrency[];
}

export const coinbaseApi = createApi({
  reducerPath: "coinbaseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.coinbase.com",
    headers: {
      "Content-Type": "application/json",
    },
  }),
  endpoints: (builder) => ({
    getCurrencies: builder.query<ICurrencyData[], void>({
      query: () => "/v2/currencies",
    }),
  }),
});

export const { useGetCurrenciesQuery } = coinbaseApi;
