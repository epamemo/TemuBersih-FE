import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Table, Container, Button } from "react-bootstrap";
import TableRowData from "../molecules/TableRowData";
import DeleteData from "../components/DeleteData";
import { data } from "../components/DataDummy";

function Product() {
  const navigate = useNavigate();
  let handleUpdate = (id) => {
    navigate(`/edit-product/${id}`);
  };

  let handleAdd = () => {
    navigate(`/add-product/`);
  };
  let formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });
  const [show, setShow] = useState(false);

  const handleDeleteClose = () => setShow(false);
  const handleDeleteShow = () => setShow(true);

  return (
    <Container>
      <h2 className="text-primary">List Product</h2>
      <Button onClick={handleAdd} className="my-3 w-25">
        Add Product
      </Button>
      <Table className="p-4" striped bordered hover responsive="lg">
        <thead>
          <tr>
            <th>No</th>
            <th>Photo</th>
            <th>Product Name</th>
            <th>Product Desc</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Discount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => {
            return (
              <TableRowData
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                description={item.description}
                price={formatter.format(item.price)}
                stock={item.stock}
                discount={item.discount}
                edit={handleUpdate}
                delete={handleDeleteShow}
              />
            );
          })}
        </tbody>
      </Table>

      <DeleteData show={show} handleClose={handleDeleteClose} />
    </Container>
  );
}

export default Product;
