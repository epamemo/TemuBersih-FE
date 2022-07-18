import { Card, Button, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function CardProduct(props) {
  let descMax = 55;
  let newDesc = String(props.desc)
  let descCut = newDesc.substr(0, descMax);
  let descShow = descCut.substr(0,Math.min(descCut.length, descCut.lastIndexOf(" ")));
  return (
    <>
      <Card className="h-100 overflow-hidden">
        <Card className="bg-dark text-white">
          <Link
            to={`/detail-campaign/${props.id}`}
            className="stretched-link"
          ></Link>
          <Image
            style={{ height: 300, width: null }}
            src={props.image}
            alt="Card image"
          />
          <Card.ImgOverlay className="d-flex align-items-end">
            <div className="title-card">
              <Card.Title>{props.name}</Card.Title>
              <Card.Text>{descShow} ...</Card.Text>
            </div>
          </Card.ImgOverlay>
        </Card>
      </Card>
    </>
  );
}

function CardProductBig(props) {
  let descMax = 60;
  let newDesc = String(props.desc)
  let descCut = newDesc.substr(0, descMax);
  let descShow = descCut.substr(0,Math.min(descCut.length, descCut.lastIndexOf(" ")));
  return (
    <>
      <Col lg={6} md={12}>
        <Card className="h-100 overflow-hidden">
          <Card className="bg-dark text-white">
            <Link
              to={`/detail-campaign/${props.id}`}
              className="stretched-link"
            ></Link>
            <Image
              style={{ height: 625, width: null }}
              src={props.image}
              alt="Card image"
            />
            <Card.ImgOverlay className="d-flex align-items-end">
              <div className="title-card">
                <Card.Title style={{ fontSize: "2rem" }}>
                  {props.name}
                </Card.Title>
                <Card.Text>{descShow} ...</Card.Text>
              </div>
            </Card.ImgOverlay>
          </Card>
        </Card>
      </Col>
    </>
  );
}

export { CardProduct, CardProductBig };
