import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import ingresoA from "../../assets/ingresoA.webp";
import ingresoB from "../../assets/ingresoB.webp";
import ingresoC from "../../assets/ingresoC.webp";
import ingresoD from "../../assets/ingresoD.webp";
import ingresoE from "../../assets/ingresoE.webp";
import ofertaA from "../../assets/ofertaA.jpg";
import ofertaB from "../../assets/ofertaB.jpg";
import ofertaC from "../../assets/ofertaC.jpg";
import ofertaD from "../../assets/ofertaD.jpg";
import MainDos from "../mainDos/mainDos";

const Main = () => {
  return (
    <div>
      <Swiper
        className='swiperPrincipal swiper-ingresos"'
        modules={[Navigation, Pagination, Autoplay, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <img
            src="https://http2.mlstatic.com/D_NQ_743129-MLA72362981587_102023-OO.webp"
            alt="Banner"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://http2.mlstatic.com/D_NQ_994111-MLA72161797820_102023-OO.webp"
            alt="Banner"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://http2.mlstatic.com/D_NQ_975852-MLA71412701174_092023-OO.webp"
            alt="Banner"
          ></img>
        </SwiperSlide>
      </Swiper>

      <div className="sliders">
        <div className="contenedorNuevosIngresos">
          <div className="nuevosIngresos">
            <h2>
              MIRA NUESTROS NUEVOS <span>INGRESOS!</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Excepturi, praesentium modi voluptatibus necessitatibus aliquam
              quia blanditiis iusto eos commodi quasi? Debitis eum deleniti
              ducimus delectus.
            </p>
          </div>
          <Swiper
            className="swiper-ingresos"
            modules={[Navigation, Pagination, Autoplay, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <img src={ingresoA} alt="Prendas Nuevas"></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src={ingresoB} alt="Prendas Nuevas"></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src={ingresoC} alt="Prendas Nuevas"></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src={ingresoD} alt="Prendas Nuevas"></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src={ingresoE} alt="Prendas Nuevas"></img>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="contenedorOfertas">
          <img src={ofertaA} alt="Promos"></img>
          <img src={ofertaB} alt="Promos"></img>
          <img src={ofertaC} alt="Promos"></img>
          <img src={ofertaD} alt="Promos"></img>
        </div>
      </div>
      <MainDos />
    </div>
  );
};

export default Main;
