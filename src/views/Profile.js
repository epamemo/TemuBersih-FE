import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Tab, Button, Nav } from "react-bootstrap";
import { data } from "../components/DataDummy";
import { CardProduct } from "../components/CardProduct";
import { useQuery } from "react-query";
import { UserContext } from "../helpers";
import { useContext, useState } from "react";
import { API } from "../config/api";

function Profile() {
  const navigate = useNavigate();
  const navigateAddCampaign = () => {
    navigate("/add-campaign");
  };
  const [state, dispatch] = useContext(UserContext);
  let { data: campaignCreate } = useQuery("campaignCache", async () => {
    const response = await API.get("/campaigns");
    return response.data.data.campaigns;
  });
  let { data: campaignJoin } = useQuery("campaignjoinCache", async () => {
    const response = await API.get("/user-campaigns");
    return response.data.data.userCampaign;
  });

  console.log(campaignJoin);

  return (
    <div>
      <Container>
        <Row>
          <Col sm={8}>
            <h2 className="text-primary">Ringkasan Kampanyeku</h2>
          </Col>
          <Col sm={4} className="d-flex justify-content-end">
            <Button onClick={navigateAddCampaign}>Kampanye Baru</Button>
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
                  {campaignJoin?.map((item, index) => {
                    return (
                      <Col lg={3} md={6}>
                        <CardProduct
                          key={index}
                          id={item.campaign.id}
                          name={item.campaign.name}
                          image={item.campaign.image_url}
                          desc={item.campaign.description}
                          stock={item.campaign.stock}
                        />
                      </Col>
                    );
                  })}
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="dibuat">
                <Row className="gy-4">
                  {campaignCreate?.map((item, index) => {
                    if (item.created_by === state.user.id) {
                      return (
                        <Col lg={3} md={6}>
                          <CardProduct
                            key={index}
                            id={item.id}
                            name={item.name}
                            image={item.image_url}
                            desc={item.description}
                            stock={item.stock}
                          />
                        </Col>
                      );
                    }
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
