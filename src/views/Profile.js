import { useState } from "react";
import { Container, Row, Col, Tabs, Tab, Button, Nav } from "react-bootstrap";
import profilePhoto from "../Images/Rectangle 12.png";
import { data } from "../components/DataDummy";
import { CardProduct } from "../components/CardProduct";

function Profile() {
  const [key, setKey] = useState("home");
  return (
    <div>
      <Container>
        <Row>
          <Col lg={8}>
            <h2 className="text-primary">Ringkasan Kampanyeku</h2>
          </Col>
          <Col lg={4} className="d-flex justify-content-end">
            <Button>Kampanye Baru</Button>
          </Col>
          <Tab.Container id="left-tabs-example" defaultActiveKey="diikuti">
            <Nav className="ms-2 mb-3 mt-4 tab-profile" variant="pills">
              <Nav.Item>
                <Nav.Link className="me-2" eventKey="diikuti" href="#">
                  Diikuti
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="dibuat" href="#">
                  Dibuat
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="diikuti">
                <Row className="gy-4">
                  {data?.map((item) => {
                    return (
                      <CardProduct
                        key={item.id}
                        name={item.name}
                        image={item.image}
                        description={item.description}
                        stock={item.stock}
                      />
                    );
                  })}
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="dibuat">
                <Row className="gy-4">
                  {data?.map((item) => {
                    return (
                      <CardProduct
                        key={item.id}
                        name={item.name}
                        image={item.image}
                        description={item.description}
                        stock={item.stock}
                      />
                    );
                  })}
                </Row>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Row>
      </Container>
    </div>
  );
}

export default Profile;
