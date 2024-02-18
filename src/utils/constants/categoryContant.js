export const CATEGORIES = {
  DATA: { value: "DATA", label: "Data" },
  CATEGORY_ONE: { value: "CATEGORY_ONE", label: "Category Name" },
  CATEGORY_TWO: { value: "CATEGORY_TWO", label: "Category Name" },
  CATEGORY_THREE: { value: "CATEGORY_THREE", label: "Category Name" },
  CATEGORY_FOUR: { value: "CATEGORY_FOUR", label: "Category Name" },
};

export const getCategoriesEnumsAsArray = () => {
  let result = Object.values(CATEGORIES);
  return result;
};
