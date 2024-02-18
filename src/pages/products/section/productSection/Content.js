import React from "react";
import { useSelector } from "react-redux";
import { productsPageState } from "../../../../redux/slices/productSlice";
import ProductCardSection from "../../../../components/custom/ProductCard/ProductCard";
import GridComp from "../../../../components/core/Grid";

const ContentSection = ({ products, onlyShowFavorites, favoriteClick }) => {
  const { numberOfProductsToShow } = useSelector(productsPageState);

  let filteredProducts = products;
  if (onlyShowFavorites) {
    filteredProducts = products.filter((item) => item.favoriteStatus === true);
  }
  if (numberOfProductsToShow) {
    filteredProducts = filteredProducts.slice(0, numberOfProductsToShow);
  }

  return (
    <GridComp container spacing={3}>
      {filteredProducts.map((item, index) => (
        <GridComp
          key={index.toString()}
          item
          xs={12}
          sm={3}
          md={3}
          lg={3}
          xl={2}
        >
          <ProductCardSection
            key={index.toString()}
            item={item}
            favoriteClick={(item, newStatus) => favoriteClick(item, newStatus)}
          />
        </GridComp>
      ))}
    </GridComp>
  );
};

export default ContentSection;
