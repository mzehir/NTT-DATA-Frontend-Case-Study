export const HTTP_TYPE = {
  POST: { key: "post" },
  GET: { key: "get" },
  DELETE: { key: "delete" },
  PUT: { key: "put" },
};

export const API_PATH = {
  GET_PRODUCTS: {
    path: "products",
    httpType: HTTP_TYPE.GET.key,
  },

  GET_PRODUCT_DETAIL: {
    path: "products",
    httpType: HTTP_TYPE.GET.key,
  },
};
