import { TQueryParam } from "../../../types/global.type";

import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (userInfo) => ({
        url: "/orders/create-order",
        method: "POST",
        body: userInfo,
      }),
    }),
    getAllOrders: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/orders",
          method: "GET",
          params: params,
        };
      },
    }),
    getOrders: builder.query({
      query: () => ({
        url: "/orders",
        method: "GET",
      }),
    }),
    verifyOrder: builder.query({
      query: (order_id) => ({
        url: "/orders/verify",
        params: { order_id },
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetOrdersQuery,
  useVerifyOrderQuery,
  useGetAllOrdersQuery,
} = orderApi;

// getAllOrders: builder.query({
//   query: (args) => {
//     const params = new URLSearchParams();

//     if (args) {
//       args.forEach((item: TQueryParam) => {
//         params.append(item.name, item.value as string);
//       });
//     }

//     return {
//       url: "/orders",
//       method: "GET",
//       params: params,
//     };
//   },
// }),
