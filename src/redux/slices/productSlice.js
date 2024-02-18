import { createSlice } from "@reduxjs/toolkit";

import { httpRequest } from "./apiSlice";
import { API_PATH } from "../../utils/constants/apiConstant";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    favoriteProductCount: 0,
    numberOfProductsToShow: 4,
  },
  reducers: {
    addProducts: (state, action) => {
      const updatedProducts = action.payload.map((product) => ({
        ...product,
        favoriteStatus: false,
      }));

      state.products = updatedProducts;
    },

    updateProductFavoriteStatus: (state, action) => {
      const { id, newStatus } = action.payload;
      let favoriteProductCount = 0;

      const updatedProducts = state.products.map((product) => {
        if (product.id === id) {
          product.favoriteStatus = newStatus;
        }

        if (product.favoriteStatus) {
          favoriteProductCount++;
        }

        return product;
      });

      state.products = updatedProducts;
      state.favoriteProductCount = favoriteProductCount;
    },

    incrementNumberOfProductsToShow: (state) => {
      state.numberOfProductsToShow += 4;
    },
  },
});

export const {
  addProducts,
  updateProductFavoriteStatus,
  incrementNumberOfProductsToShow,
} = productSlice.actions;

export const getProducts = () => async (dispatch) => {
  const response = await dispatch(
    httpRequest(API_PATH.GET_PRODUCTS.httpType, API_PATH.GET_PRODUCTS.path)
  );

  dispatch(addProducts(response));
};

export const productsPageState = (state) => state.product;

export default productSlice.reducer;
