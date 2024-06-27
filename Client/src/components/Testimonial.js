import React from 'react';
import "./Testimonial.css";
import avatar from './Images/avatar.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

export default function App() {
  return (
    <>
      <h1 style={{ fontFamily: "serif", color: "purple", textAlign: "center" }}>TESTIMONIALS</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000, 
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="container" style={{ borderRadius: "20px" }}>
            <a href="https://www.linkedin.com/in/geekprateek/">
              <img src={avatar} alt="avatar" style={{ width: "7vw", borderRadius: "50px" }} />
            </a>
            <div className="content">
              <p style={{ fontStyle: "italic" }}>
                "Md Tauseef's expertise in React and Node.js truly stands out. His LinkedIn clone project was a game-changer, significantly improving user engagement and functionality. His ability to seamlessly integrate various features into his projects is impressive. I highly recommend his work for any web development needs. "
                <br />
                <i style={{ color: "purple", margin: "20px" }} className="bi bi-quote"></i> - Prateek Kumar
              </p>
            </div>
            <i style={{ color: "yellow" }} className="bi bi-star-fill"></i>
            <i style={{ color: "yellow" }} className="bi bi-star-fill"></i>
            <i style={{ color: "yellow" }} className="bi bi-star-fill"></i>
            <i style={{ color: "yellow" }} className="bi bi-star-fill"></i>
            <i style={{ color: "yellow" }} className="bi bi-star-fill"></i>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container" style={{ borderRadius: "20px" }}>
            <a href="https://www.linkedin.com/in/hitansh-gupta-340801243/">
              <img src={avatar} alt="avatar" style={{ width: "7vw", borderRadius: "50px" }} />
            </a>
            <div className="content">
              <p style={{ fontStyle: "italic" }}>
                "I had the pleasure of working with Md Tauseef during his internship at Slash Mark. His dedication and attention to detail were evident in the e-commerce platform he developed. The performance improvements he implemented led to a substantial increase in user satisfaction. Tauseef's skills in full-stack development are top-notch. "
                <br />
                <i style={{ color: "blue", margin: "20px" }} className="bi bi-quote"></i> - Hitansh Gupta
              </p>
            </div>
            <i style={{ color: "yellow" }} className="bi bi-star-fill"></i>
            <i style={{ color: "yellow" }} className="bi bi-star-fill"></i>
            <i style={{ color: "yellow" }} className="bi bi-star-fill"></i>
            <i style={{ color: "yellow" }} className="bi bi-star-half"></i>
            <i style={{ color: "yellow" }} className="bi bi-star"></i>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container" style={{ borderRadius: "20px" }}>
            <a href="https://www.linkedin.com/in/md-tauseef/">
              <img src={avatar} alt="avatar" style={{ width: "7vw", borderRadius: "50px" }} />
            </a>
            <div className="content">
              <p style={{ fontStyle: "italic" }}>
                " This app is a game-changer. It's user-friendly, intuitive, and has all the features I need. I've become so much more productive since I started using it. "
                <br />
                <i style={{ color: "green", margin: "20px" }} className="bi bi-quote"></i> -Tauseef Ali
              </p>
            </div>
            <i style={{ color: "yellow" }} className="bi bi-star-fill"></i>
            <i style={{ color: "yellow" }} className="bi bi-star-fill"></i>
            <i style={{ color: "yellow" }} className="bi bi-star-fill"></i>
            <i style={{ color: "yellow" }} className="bi bi-star-fill"></i>
            <i style={{ color: "yellow" }} className="bi bi-star"></i>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container" style={{ borderRadius: "20px" }}>
            <a href="https://www.linkedin.com/in/hello98077saurav/">
              <img src={avatar} alt="avatar" style={{ width: "7vw", borderRadius: "50px" }} />
            </a>
            <div className="content">
              <p style={{ fontStyle: "italic" }}>
                " Working with Md Tauseef was a fantastic experience. His commitment to delivering high-quality code and his expertise in modern web technologies were evident in every project he undertook. The music player app he developed showcased his creativity and technical prowess. I highly recommend him for any front-end development roles. "
                <br />
                <i style={{ color: "red", margin: "20px" }} className="bi bi-quote"></i> - Saurav Kumar
              </p>
            </div>
            <i style={{ color: "yellow" }} className="bi bi-star-fill"></i>
            <i style={{ color: "yellow" }} className="bi bi-star-fill"></i>
            <i style={{ color: "yellow" }} className="bi bi-star-fill"></i>
            <i style={{ color: "yellow" }} className="bi bi-star-fill"></i>
            <i style={{ color: "yellow" }} className="bi bi-star-half"></i>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
