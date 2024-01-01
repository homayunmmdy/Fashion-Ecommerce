import React from "react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import styles from "@/styles/components/Slider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { sliderItems } from "@/backend/data"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  return (
    <div className={styles.mainSwiper}>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {sliderItems.map(item => (
                  <SwiperSlide key={item.id} className={styles.Slide}>
                    <div className={styles.ImgSlideContainer}>
                      <img className={styles.ImgSlide} alt={item.title} title={item.title} src={item.img} />
                    </div>
                    <div className={styles.InfoSlideContainer}>
                      <h2 className={styles.titleSlide}>{item.title}</h2>
                      <p className={styles.descriptionSlie}>{item.desc}</p>
                      <button className={styles.shopNow}>SHOP NOW</button>
                    </div>
                    </SwiperSlide>

        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
