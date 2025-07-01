import React from "react";
import Carousel from "better-react-carousel";
import "./Gallery.css";

const Gallery = () => {
  return (
    <>
      <br />
      <Carousel cols={2} rows={1} gap={20} loop autoplay={3000}>
        <Carousel.Item>
          <div className="carousel-card">
            <img
              src="https://westmountflorist.com/cdn/shop/articles/wf-flower-reference-guide-lily.jpg?v=1697056484&width=1024"
              alt="flower 1"
            />
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-card">
            <img
              src="https://www.thoughtco.com/thmb/E8XY2Qu_Deomo17VBPefsAEbXxw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/lotus-flower-828457262-5c6334b646e0fb0001dcd75a.jpg"
              alt="flower 2"
            />
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-card">
            <img
              src="https://wisarts.com/shop/wp-content/uploads/2021/07/lotus_rose_leaves_sky_120x90.jpg"
              alt="flower 3"
            />
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-card">
            <img
              src="https://media.istockphoto.com/id/859010798/photo/lotus-flower-bouquet.jpg?s=1024x1024&w=is&k=20&c=lmmEyhc2Bdk6caedEgsxH20dVHK-QhsV3K2T0zQUibo="
              alt="flower 4"
            />
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-card">
            <img
              src="https://media.diy.com/is/image/KingfisherDigital/homescapes-artificial-white-rose-purple-lotus-flower-bouquet~5056280721987_01c_MP?$MOB_PREV$&$width=1200&$height=1200"
              alt="flower 5"
            />
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-card">
            <img
              src="https://previews.123rf.com/images/xuanhuongho/xuanhuongho1709/xuanhuongho170900052/87013002-woman-hand-hold-lotus-flower-bouquet-just-harvest-from-lotus-pond-pink-flower-beautiful-on-green.jpg"
              alt="flower 6"
            />
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Gallery;
