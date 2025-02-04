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
    uploadImage: builder.mutation({
      query: (image) => {
        const formData = new FormData();
        formData.append("image", image);

        return {
          url: `https://api.imgbb.com/1/upload?key=ba98601a2c14cae8f49fde94da530d6e`,
          method: "POST",
          body: formData,
          credentials: "omit",
          headers: {
            authorization: undefined,
          },
        };
      },
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
  useUploadImageMutation,
  useAddBicycleMutation,
  useGetAllBicyclesQuery,
  useGetSingleBicycleQuery,
} = bicycleApi;
