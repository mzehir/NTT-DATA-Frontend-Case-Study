import { createSlice } from "@reduxjs/toolkit";
import axios from "../../service/axios";

export const apiSlice = createSlice({
  name: "api",
  initialState: {
    loading: false,
    error: null,
    errorMessage: "",
  },
  reducers: {
    requestStart(state) {
      state.loading = true;
      state.error = null;
    },
    requestSuccess(state) {
      state.loading = false;
    },
    requestError(state) {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { requestStart, requestSuccess, requestError } = apiSlice.actions;

export const httpRequest =
  (
    method,
    path,
    data = {},
    options = {
      showLoading: true,
    }
  ) =>
  async (dispatch) => {
    let response;
    try {
      dispatch(requestStart());
      response = await axios[method](path, data, { headers: options.headers });
      if (response.status) {
        dispatch(requestSuccess());
      }
    } catch (error) {
      dispatch(requestError());
    } finally {
      return response.data;
    }
  };

export const apiState = (state) => state.api;

export default apiSlice.reducer;
