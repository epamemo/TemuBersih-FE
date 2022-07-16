import { Card, Button, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function CardProduct(props) {
  return (
    <>
      <Card className="h-100 overflow-hidden">
        <Card className="bg-dark text-white">
          <Link
            to={`/detail-product/${props.id}`}
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
            </div>
          </Card.ImgOverlay>
        </Card>
      </Card>
    </>
  );
}

function CardProductBig(props) {
  return (
    <>
      <Col lg={6} md={12}>
        <Card className="h-100 overflow-hidden">
          <Card className="bg-dark text-white">
            <Link
              to={`/detail-product/${props.id}`}
              className="stretched-link"
            ></Link>
            <Image
              style={{ height: 625, width: null }}
              src={props.image}
              alt="Card image"
            />
            <Card.ImgOverlay className="d-flex align-items-end">
              <div className="title-card">
                <Card.Title>{props.name}</Card.Title>
              </div>
            </Card.ImgOverlay>
          </Card>
        </Card>
      </Col>
    </>
  );
}

export { CardProduct, CardProductBig };
