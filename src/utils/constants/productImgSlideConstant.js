const slideImgStartPath = "/static/img/slide/";

const PRODUCT_SLIDE_IMG = {
  IMG_1: { imgStaticPath: "slide1.png", name: "slide1" },
  IMG_2: { imgStaticPath: "slide2.png", name: "slide2" },
  IMG_3: { imgStaticPath: "slide3.png", name: "slide3" },
  IMG_4: { imgStaticPath: "slide4.png", name: "slide4" },
};

export const getProductSlideImg = (device) => {
  let result = [];
  let productSlideImg = Object.values(PRODUCT_SLIDE_IMG);

  for (let i = 0; i < productSlideImg.length; i++) {
    const element = productSlideImg[i];
    result.push({
      name: element.name,
      path: slideImgStartPath + [device] + "/" + element.imgStaticPath,
    });
  }

  return result;
};
