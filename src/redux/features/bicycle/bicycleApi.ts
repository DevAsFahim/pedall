import { TQueryParam } from "../../../types/global.type";
import { baseApi } from "../../api/baseApi";

const bicycleApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addBicycle: builder.mutation({
      query: (data) => ({
        url: "/products/create-bicycle",
        method: "POST",
        body: data,
      }),
    }),
    getAllBicycles: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/products",
          method: "GET",
          params: params,
        };
      },
    }),
    getSingleBicycle: builder.query({
      query: (id) => {
        return {
          url: `/products/${id}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useAddBicycleMutation,
  useGetAllBicyclesQuery,
  useGetSingleBicycleQuery,
} = bicycleApi;
