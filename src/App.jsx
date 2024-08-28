import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./App.css";
import "./img.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Home() {
  return (
    <div className="App">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img src="./src/assets/img/1.jpg" alt="" className="img" />
          <div className="heart-btn">
            <div className="content">
              <span className="heart"></span>
              <span className="like">Like</span>
              <span className="numb"></span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./src/assets/img/2.jpg" alt="" className="img" />
          <div className="heart-btn">
            <div className="content">
              <span className="heart"></span>
              <span className="like">Like</span>
              <span className="numb"></span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./src/assets/img/3.jpg" alt="" className="img" />
          <div className="heart-btn">
            <div className="content">
              <span className="heart"></span>
              <span className="like">Like</span>
              <span className="numb"></span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./src/assets/img/4.jpg" alt="" className="img" />
          <div className="heart-btn">
            <div className="content">
              <span className="heart"></span>
              <span className="like">Like</span>
              <span className="numb"></span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./src/assets/img/5.jpg" alt="" className="img" />
          <div className="heart-btn">
            <div className="content">
              <span className="heart"></span>
              <span className="like">Like</span>
              <span className="numb"></span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./src/assets/img/6.png" alt="" className="img" />
          <div className="heart-btn">
            <div className="content">
              <span className="heart"></span>
              <span className="like">Like</span>
              <span className="numb"></span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./src/assets/img/7.png" alt="" className="img" />
          <div className="heart-btn">
            <div className="content">
              <span className="heart"></span>
              <span className="like">Like</span>
              <span className="numb"></span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./src/assets/img/8.webp" alt="" className="img" />
          <div className="heart-btn">
            <div className="content">
              <span className="heart"></span>
              <span className="like">Like</span>
              <span className="numb"></span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./src/assets/img/9.jpg" alt="" className="img" />
          <div className="heart-btn">
            <div className="content">
              <span className="heart"></span>
              <span className="like">Like</span>
              <span className="numb"></span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Los biomas</h1>

      <Home />
    </>
  );
}

export default App;
