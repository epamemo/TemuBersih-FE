import React from "react";
import { Carousel, Image } from "react-bootstrap";

function CarouselHero() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <Image
          rounded
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1442544213729-6a15f1611937?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
          alt="First slide"
          style={{ height: 300, flex: 1, width: null }}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <Image
          rounded
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1527965408463-82ae0731825c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
          alt="Second slide"
          style={{ height: 300, flex: 1, width: null }}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          rounded
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1501179691627-eeaa65ea017c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="Third slide"
          style={{ height: 300, flex: 1, width: null }}
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHero;
