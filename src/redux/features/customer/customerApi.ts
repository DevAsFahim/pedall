import { baseApi } from "../../api/baseApi";

const customerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getACustomer: builder.query({
      query: (email) => {
        console.log(email);
        return {
          url: `/users/${email}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetACustomerQuery } = customerApi;
