import { TQueryParam } from "../../../types/global.type";
import { baseApi } from "../../api/baseApi";

const customerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCustomer: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: `/users`,
          method: "GET",
          params: params,
        };
      },
      providesTags: ["user"],
    }),
    getACustomer: builder.query({
      query: (email) => {
        return {
          url: `/users/${email}`,
          method: "GET",
        };
      },
    }),
    blockACustomer: builder.mutation({
      query: (email) => {
        return {
          url: `/users/${email}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useGetACustomerQuery,
  useGetAllCustomerQuery,
  useBlockACustomerMutation,
} = customerApi;
