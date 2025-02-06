import { TQueryParam } from "../../../types/global.type";
import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // addBicycle: builder.mutation({
    //   query: (data) => ({
    //     url: "/products/create-bicycle",
    //     method: "POST",
    //     body: data,
    //   }),
    // }),
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
  }),
});

export const { useGetAllOrdersQuery } = orderApi;
