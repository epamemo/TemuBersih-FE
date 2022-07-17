import { useState, useEffect, useContext } from "react";
import { UserContext } from "../helpers";
import { useNavigate } from "react-router";
import { useMutation } from "react-query";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import InputMolecules from "../molecules/InputMolecules";
import { API } from "../config/api";
import toast, { Toaster } from "react-hot-toast";

function AddProduct() {
  let navigate = useNavigate();
  const [state, dispatch] = useContext(UserContext);
  const [message, setMessage] = useState(null);

  const [preview, setPreview] = useState(null);
  const [form, setForm] = useState({
    name: "",
    description: "",
    location_name: "",
    location_url: "",
    date: "",
    start_hour: "",
    end_hour: "",
    person: "",
    target: "",
    image: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });

    // Create image url for preview
    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      console.log("test 1");
      e.preventDefault();
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };
      console.log("test 2");
      const formData = new FormData();
      console.log("test 3");
      formData.set("name", form.name);
      formData.set("description", form.description);
      formData.set("location_name", form.location_name);
      formData.set("location_url", form.location_url);
      formData.set("date", form.date);
      console.log("test 4");
      formData.set("start_hour", form.start_hour);
      formData.set("end_hour", form.end_hour);
      formData.set("person", form.person);
      formData.set("target", form.target);
      formData.set("created_by", state.user.id);
      console.log(form);
      formData.set("image_url", form.image_url[0], form.image_url[0].name);

      const response = await API.post("/campaign", formData, config);
      console.log(response);
      const alert = toast.success("Thank you for joining. Please login!");
      setMessage(alert);
      navigate("/");
    } catch (error) {
      const alert = toast.error(error);
      setMessage(alert);
    }
  });

  return (
    <Container>
      <Toaster />
      <Row style={{ justifyContent: "center" }}>
        <Col md={6}>
          <h2 className="text-primary">Tambahkan kampanye terbaru</h2>
          <Form onSubmit={(e) => handleSubmit.mutate(e)}>
            <label htmlFor="name">Judul</label>
            <InputMolecules
              type="Text"
              placeholder="Judul kampanye"
              className="mb-3"
              name="name"
              onchange={handleChange}
            />
            <label htmlFor="description">Deskripsi Kampanye</label>
            <InputMolecules
              as="textarea"
              placeholder="Kampanye untuk membersihkan lingkungan"
              rows="3"
              className="mb-3"
              name="description"
              onchange={handleChange}
            />
            <label htmlFor="location_name">Alamat Kampanye</label>
            <InputMolecules
              placeholder="Alamat Lokasi kampanye"
              rows="3"
              className="mb-3"
              name="location_name"
              onchange={handleChange}
            />
            <label htmlFor="location_url">Link Lokasi Maps</label>
            <InputMolecules
              placeholder="Link lokasi maps"
              rows="3"
              className="mb-3"
              name="location_url"
              onchange={handleChange}
            />
            <Row>
              <Col sm={4}>
                <label htmlFor="date">Tanggal</label>
              </Col>
              <Col sm={8}>
                <label htmlFor="start_hour">Jam (mulai - selesai) wib</label>
              </Col>
              <Row className="mx-0 px-0">
                <Col sm={4}>
                  <InputMolecules
                    type="Date"
                    placeholder="13-03-2013"
                    className="mb-3"
                    name="date"
                    onchange={handleChange}
                  />
                </Col>
                <Col sm={4}>
                  <InputMolecules
                    type="time"
                    placeholder="08.00"
                    className="mb-3"
                    name="start_hour"
                    onchange={handleChange}
                  />
                </Col>
                <Col sm={4}>
                  <InputMolecules
                    type="time"
                    placeholder="10.00"
                    className="mb-3"
                    name="end_hour"
                    onchange={handleChange}
                  />
                </Col>
              </Row>
            </Row>
            <Row>
              <Col sm={6}>
                <label htmlFor="person">Kebutuhan Orang</label>
              </Col>
              <Col sm={6}>
                <label htmlFor="target">Target Sampah Terkumpul (kg)</label>
              </Col>
              <Row className="mx-0 px-0">
                <Col sm={6}>
                  <InputMolecules
                    type="number"
                    placeholder="13 Orang"
                    className="mb-3"
                    name="person"
                    onchange={handleChange}
                  />
                </Col>
                <Col sm={6}>
                  <InputMolecules
                    type="number"
                    placeholder="15 kg"
                    className="mb-3"
                    name="target"
                    onchange={handleChange}
                  />
                </Col>
              </Row>
            </Row>
            <label htmlFor="image_url">Gambar</label>
            <InputMolecules
              label="Gambar"
              type="File"
              className="mb-3"
              name="image_url"
              onchange={handleChange}
            />
            {preview && (
              <div>
                <img
                  src={preview}
                  style={{
                    maxWidth: "150px",
                    maxHeight: "150px",
                    objectFit: "cover",
                  }}
                  alt={preview}
                />
              </div>
            )}
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
