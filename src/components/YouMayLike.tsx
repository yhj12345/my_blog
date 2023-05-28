"use client";
import Card from "@/components/Card";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const YouMayLike = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="max-w-screen-xl mx-auto">
      <h3 className="font-bold">You may like</h3>
      <Carousel responsive={responsive}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Carousel>
      ;
    </div>
  );
};

export default YouMayLike;
