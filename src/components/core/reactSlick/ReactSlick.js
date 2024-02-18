import React from "react";
import Slider from "react-slick";

const ReactSlickComp = (props) => {
  const { children, settings = {}, ...other } = props;

  let _settings = {
    arrows: settings.arrows ? settings.arrows : false, // Slider'ın sağ ve solundaki arrow buttonlar için
    dots: settings.dots ? settings.dots : true, // Slider'ın hemen altındaki nokta butonları için
    infinite: settings.infinite ? settings.infinite : true, // Gösterilen son slayttan sonra başa dönmesi için
    speed: settings.speed ? settings.speed : 500, // Slaytlar arası geçiş hızı
    autoplay: settings.autoplay ? settings.autoplay : true, // Bir sonraki slayta otomatik olarak geçmek için
    autoplaySpeed: settings.autoplaySpeed ? settings.autoplaySpeed : 5000, // Otomatik slayt değişiminde aktif slaytta bekleme süresi
    slidesToShow: settings.slidesToShow ? settings.slidesToShow : 1, // Tek seferde gösterilecek slayt sayısı
    slidesToScroll: settings.slidesToScroll ? settings.slidesToScroll : 1, // Slayttan slayta atlama sayısı
    ...(settings.appendDots ? { appendDots: settings.appendDots } : {}), // Özel noktalar için
  };

  return (
    <Slider {..._settings} {...other}>
      {children}
    </Slider>
  );
};

export default ReactSlickComp;
