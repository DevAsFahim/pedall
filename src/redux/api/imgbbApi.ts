import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const imgbbApi = createApi({
  reducerPath: "imgbbApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.imgbb.com/1/" }),
  endpoints: (builder) => ({
    uploadImage: builder.mutation({
      query: (image) => {
        const formData = new FormData();
        formData.append("image", image);

        return {
          url: `upload?key=ba98601a2c14cae8f49fde94da530d6e`,
          method: "POST",
          body: formData,
        };
      },
    }),
  }),
});

export const { useUploadImageMutation } = imgbbApi;
