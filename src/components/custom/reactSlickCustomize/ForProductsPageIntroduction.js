import React from "react";
import styled from "@emotion/styled";
import BoxComp from "../../core/Box";
import ReactSlickComp from "../../core/reactSlick/ReactSlick";
import "./forProductsPageIntroduction.css";

const AppendDotsWrapper = styled(BoxComp)`
  bottom: 7px;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ForProductsPageIntroduction = ({ images }) => {
  var settings = {
    appendDots: (dots) => (
      <AppendDotsWrapper>
        <ul>{dots}</ul>
      </AppendDotsWrapper>
    ),
  };

  return (
    <div className="forProductsPageIntroduction">
      <ReactSlickComp settings={settings}>
        {images.map((item, index) => (
          <BoxComp key={index.toString()} className="img-container">
            <img src={item.path} alt={item.name} />
          </BoxComp>
        ))}
      </ReactSlickComp>
    </div>
  );
};

export default ForProductsPageIntroduction;
