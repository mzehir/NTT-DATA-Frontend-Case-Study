import React, { useEffect, useState } from "react";
import WindowResizeUseContext from "../../../hooks/WindowResizeUseContext";
import { getProductSlideImg } from "../../../utils/constants/productImgSlideConstant";
import ForProductsPageIntroduction from "../../../components/custom/reactSlickCustomize/ForProductsPageIntroduction";

const IntroductionSection = () => {
  const { device } = WindowResizeUseContext();
  const [sliderImages, setSliderImages] = useState([]);

  useEffect(() => {
    if (device) {
      let _sliderImages = getProductSlideImg(device);
      setSliderImages(_sliderImages);
    }
  }, [device]);

  return <ForProductsPageIntroduction images={sliderImages} />;
};

export default IntroductionSection;
