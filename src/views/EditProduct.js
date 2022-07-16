import { Container, Form, Button } from "react-bootstrap";
import InputMolecules from "../molecules/InputMolecules";

function EditProduct() {
  return (
    <Container>
      <h2 className="text-primary">Edit Product</h2>
      <Form>
        {/* {preview && (
          <div>
            <img
              src={preview}
              style={{
                maxWidth: "150px",
                maxHeight: "150px",
                objectFit: "cover",
              }}
              alt="preview"
            />
          </div>
        )} */}
        <InputMolecules type="File" className="my-3" name="image" />
        <InputMolecules
          type="Text"
          placeholder="Product Name"
          className="my-3"
          name="name"
        />
        <InputMolecules
          as="textarea"
          placeholder="Product Description"
          rows="3"
          className="my-3"
          name="desc"
        />
        <InputMolecules
          type="Number"
          placeholder="Price"
          className="my-3"
          name="price"
        />
        <InputMolecules
          type="Number"
          placeholder="Stock"
          className="my-3"
          name="qty"
        />
        <InputMolecules
          type="Number"
          placeholder="Discount"
          className="my-3"
          name="discount"
        />
        <Button type="submit" className="full-width">
          Update Product
        </Button>
      </Form>
    </Container>
  );
}

export default EditProduct;
