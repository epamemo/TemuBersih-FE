import { Row, Col, Container } from "react-bootstrap";
import { CardProduct, CardProductBig } from "../components/CardProduct";
import { useState } from "react";
import { data } from "../components/DataDummy";
import CarouselHero from "../components/CarouselHero";

function Home() {
  const [products] = useState(data);
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
            <CarouselHero />
          </Col>
        </Row>
        <Row className="gy-4 py-5 card-group">
          <CardProductBig
            id={data[0].id}
            name={data[0].name}
            image={data[0].image}
            description={data[0].desc}
            stock={data[0].stock}
          />
          <Col lg={6} md={12}>
            <Row className="gb-4 pb-4 card-group">
              {products?.map((item, index) => {
                if (index > 0 && index < 3) {
                  return (
                    <Col lg={6} md={6}>
                      <CardProduct
                        key={index}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        description={item.desc}
                        stock={item.stock}
                      />
                    </Col>
                  );
                }
              })}
            </Row>
            <Row>
              {products?.map((item, index) => {
                if (index > 2 && index < 5) {
                  return (
                    <Col lg={6} md={6}>
                      <CardProduct
                        key={index}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        description={item.desc}
                        stock={item.stock}
                      />
                    </Col>
                  );
                }
              })}
            </Row>
          </Col>
          {products?.map((item, index) => {
            if (index > 4) {
              return (
                <Col lg={3} md={6}>
                  <CardProduct
                    key={index}
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    description={item.desc}
                    stock={item.stock}
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
