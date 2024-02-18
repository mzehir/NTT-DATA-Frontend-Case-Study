import React from "react";
import ReactSlickComp from "../../core/reactSlick/ReactSlick";
import "./forProductView.css";
import ProductCardSection from "../ProductCard/ProductCard";

const ForProductView = (props) => {
  const { products, favoriteClick, onlyShowFavorites } = props;

  let filteredProducts = products;
  if (onlyShowFavorites) {
    filteredProducts = products.filter((item) => item.favoriteStatus === true);
  }
  
  return (
    <div className="forProductView">
      <ReactSlickComp>
        {filteredProducts.map((item, index) => (
          <ProductCardSection
            key={index.toString()}
            item={item}
            favoriteClick={(item, newStatus) => favoriteClick(item, newStatus)}
          />
        ))}
      </ReactSlickComp>
    </div>
  );
};

export default ForProductView;
