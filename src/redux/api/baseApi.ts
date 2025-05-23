/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  fetchBaseQuery,
  createApi,
  BaseQueryFn,
  FetchArgs,
  BaseQueryApi,
  DefinitionType,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { logOut, setUser } from "../features/auth/authSlice";
import { toast } from "sonner";

type ErrorResponse = {
  message: string;
};

const baseQuery = fetchBaseQuery({
  baseUrl: "https://pedal-power.vercel.app/api",
  // baseUrl: "http://localhost:5000/api",
  // baseUrl: "https://pedal-power.vercel.app/api",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set("authorization", token);
    }

    return headers;
  },
});

const baseQueryWithRefreshToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 400) {
    toast.error((result?.error?.data as ErrorResponse).message);
  }

  if (result?.error?.status === 404) {
    toast.error((result?.error?.data as ErrorResponse).message);
  }

  if (result.error?.status === 401) {
    // "https://pedal-power.vercel.app/api/auth/refresh-token"
    // send refresh token
    const res = await fetch(
      "https://pedal-power.vercel.app/api/auth/refresh-token",
      {
        method: "POST",
        credentials: "include",
      }
    );
    const data = await res.json();

    if (data?.data?.accessToken) {
      const user = (api.getState() as RootState).auth.user;

      api.dispatch(
        setUser({
          user,
          token: data.data.accessToken,
        })
      );

      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  tagTypes: ["bicycle", "user"],
  endpoints: () => ({}),
});
