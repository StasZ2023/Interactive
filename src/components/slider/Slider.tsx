import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/css/pagination';
import { motion } from "framer-motion";
import style from "./Slider.module.scss";
import { TimePeriod } from "../../types/timeline";

interface SliderProps {
  periods: TimePeriod[];
  activePeriodIndex: number;
  swiperRef: React.MutableRefObject<any>;
}

const Slider: React.FC<SliderProps> = ({ periods, activePeriodIndex, swiperRef }) => {
  return (
    <div className={style.sliderContainer}>
     
      <button className={`${style.navBtn} ${style.left} prevBtn`}>
        <div className={`${style.arrow} ${style.arrowStart}`} />
      </button>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        speed={600}
        navigation={{
          prevEl: ".prevBtn",
          nextEl: ".nextBtn",
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          0: {
            slidesPerView: 1.7,
          },
          768: {
            slidesPerView: 3,  
          },
        }}
      >
        {periods[activePeriodIndex].events.map((event) => (
          <SwiperSlide key={event.year} style={{ width: "auto" }}>
            <motion.div
              className={style.eventItem}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className={style.eventYear}>{event.year}</div>
              <div className={style.eventText}>{event.text}</div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

    
      <div className="swiper-pagination" />

      <button className={`${style.navBtn} ${style.right} nextBtn`}>
        <div className={style.arrow} />
      </button>
    </div>
  );
};

export default Slider;
