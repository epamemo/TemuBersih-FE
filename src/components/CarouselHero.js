import React from "react";
import { Carousel, Image } from "react-bootstrap";

function CarouselHero(props) {
  // let descMax = 55;
  // let descCut = props.desc.substr(0, descMax);
  // let descShow = descCut.substr(
  //   0,
  //   Math.min(descCut.length, descCut.lastIndexOf(" "))
  // );
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <Image
          rounded
          className="d-block w-100"
          src={props.img1}
          alt="First slide"
          style={{ height: 300, flex: 1, width: null }}
        />
        <Carousel.Caption>
          <h3>{props.title1}</h3>
          <p>{props.desc1}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <Image
          rounded
          className="d-block w-100"
          src={props.img2}
          alt="Second slide"
          style={{ height: 300, flex: 1, width: null }}
        />
        <Carousel.Caption>
          <h3>{props.title2}</h3>
          <p>{props.desc2}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          rounded
          className="d-block w-100"
          src={props.img3}
          alt="Third slide"
          style={{ height: 300, flex: 1, width: null }}
        />
        <Carousel.Caption>
          <h3>{props.title3}</h3>
          <p>{props.desc3}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHero;
