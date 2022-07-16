import { Container, Form, Button, Row, Col } from "react-bootstrap";
import InputMolecules from "../molecules/InputMolecules";

function AddProduct() {
  return (
    <Container>
      <Row style={{ justifyContent: "center" }}>
        <Col md={6}>
          <h2 className="text-primary">Tambahkan kampanye terbaru</h2>
          <Form>
            <label htmlFor="name">Judul</label>
            <InputMolecules
              label="Judul"
              type="Text"
              placeholder="Judul kampanye"
              className="mb-3"
              name="name"
            />
            <label htmlFor="lokasi">Lokasi</label>
            <InputMolecules
              label="Lokasi"
              placeholder="Lokasi kampanye"
              rows="3"
              className="mb-3"
              name="lokasi"
            />
            <Row>
              <Col md={4}>
                <label htmlFor="date">Tanggal</label>
              </Col>
              <Col md={8}>
                <label htmlFor="hourStart">Jam (mulai - selesai) wib</label>
              </Col>
              <Row>
                <Col>
                  <InputMolecules
                    type="Date"
                    placeholder="13-03-2013"
                    className="mb-3"
                    name="date"
                  />
                </Col>
                <Col>
                  <InputMolecules
                    type="time"
                    placeholder="Stock"
                    className="mb-3"
                    name="hourStart"
                  />
                </Col>
                <Col>
                  <InputMolecules
                    type="time"
                    placeholder="Stock"
                    className="mb-3"
                    name="hourEnd"
                  />
                </Col>
              </Row>
            </Row>
            <label htmlFor="image">Gambar</label>
            <InputMolecules
              label="Gambar"
              type="File"
              className="mb-3"
              name="image"
            />
            <Button type="submit" className="full-width">
              Posting
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default AddProduct;
