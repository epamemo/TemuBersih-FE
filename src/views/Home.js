import { Row, Col, Container, Image, Carousel } from "react-bootstrap";
import { CardProduct, CardProductBig } from "../components/CardProduct";
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../helpers";
import { useQuery } from "react-query";
import { data } from "../components/DataDummy";
import CarouselHero from "../components/CarouselHero";
import { API } from "../config/api";

function Home() {
  const [image] = useState(data);
  let { data: campaign } = useQuery("campaignCache", async () => {
    const response = await API.get("/campaigns");
    return response.data.data.campaigns;
  });
  return (
    <div>
      <Container>
        <Row>
          <Col lg={6} style={{ display: "flex" }}>
            <h1
              style={{ padding: "auto", margin: "auto" }}
              className="text-primary"
            >
              Mari Kita Buat<br></br> Nyaman Bumi Kita
            </h1>
          </Col>
          <Col lg={6}>
            <Carousel>
              {campaign?.map((item, index) => {
                return (
                  <Carousel.Item interval={1000}>
                    <Link
                      to={`/detail-campaign/${item.id}`}
                      className="stretched-link"
                    ></Link>
                    <Image
                      rounded
                      className="d-block w-100"
                      src={item.image_url}
                      alt="First slide"
                      style={{ height: 300, flex: 1, width: null }}
                    />
                    <Carousel.Caption>
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Col>
        </Row>
        <Row className="gy-4 py-5 card-group">
          {campaign?.map((item, index) => {
            if (index === 0) {
              return (
                <CardProductBig
                  key={index}
                  id={item.id}
                  name={item.name}
                  image={item.image_url}
                  desc={item.description}
                />
              );
            }
          })}
          <Col lg={6} md={12}>
            <Row className="gb-4 pb-4 card-group">
              {campaign?.map((item, index) => {
                if (index > 0 && index < 3) {
                  return (
                    <Col lg={6} md={6}>
                      <CardProduct
                        key={index}
                        id={item.id}
                        name={item.name}
                        image={item.image_url}
                        desc={item.description}
                      />
                    </Col>
                  );
                }
              })}
            </Row>
            <Row>
              {campaign?.map((item, index) => {
                if (index > 2 && index < 5) {
                  return (
                    <Col lg={6} md={6}>
                      <CardProduct
                        key={index}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        desc={item.desc}
                      />
                    </Col>
                  );
                }
              })}
            </Row>
          </Col>
          {campaign?.map((item, index) => {
            if (index > 4) {
              return (
                <Col lg={3} md={6}>
                  <CardProduct
                    key={index}
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    description={item.desc}
                  />
                </Col>
              );
            }
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
