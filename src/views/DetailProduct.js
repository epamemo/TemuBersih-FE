import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { data } from "../components/DataDummy";

function DetailProduct() {
  const navigate = useNavigate();
  const handleBuy = () => {
    navigate("/profile/1");
  };
  const params = useParams();
  const id = parseInt(params.id) - 1;
  console.log(params);
  console.log(data[id]);

  let formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  function discountPrice(price, discount) {
    let discountedPrice = price - (price * discount) / 100;
    return discountedPrice;
  }

  return (
    <>
      <Container className="w-80">
        <h2 className="text-primary text-center">{data[id].name}</h2>
        <p className="text-center">
          Nia dan {data[id].stock} teman lain sudah bergabung pada temu bersih
          ini
        </p>
        <div className="d-flex flex-column">
          <Image
            style={{ height: 500, width: null }}
            src={data[id].image}
            alt=""
            className=""
          />
        </div>
        <Row>
          <h2 className="mt-4">Target</h2>
          <Col lg="3">
            <p>Kali Ciomas</p>
            <p>10Kg Sampah Terkumpul</p>
          </Col>
          <Col lg="5">
            <p>
              10 Orang minimal dibutuhkan <strong>(5 sudah bergabung)</strong>{" "}
            </p>
            <p>20 Desember, 07:00 wib - 12:00 wib</p>
          </Col>
          <h2 className="text-primary mt-4">Tentang Project</h2>
          <p>{data[id].description}</p>
        </Row>
        <Row className="d-flex justify-content-end">
          <Col sm={2}>
            <Button className="w-100">Bergabung</Button>
            <p style={{ fontSize: 12 }}>Bersama {data[id].stock} teman lain</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default DetailProduct;
