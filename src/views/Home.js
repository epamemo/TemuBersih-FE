import { Row, Col, Container } from "react-bootstrap";
import { CardProduct, CardProductBig } from "../components/CardProduct";
import { useContext, useState, useEffect } from "react";
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
  console.log(campaign);
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
