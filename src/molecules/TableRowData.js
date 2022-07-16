import { Button, Row, Col } from "react-bootstrap";

function TableRowData(props) {
  return (
    <tr>
      {props.id != null ? <td>{props.id}</td> : null}
      {props.image != null ? (
        <td>
          <img src={props.image} alt="" height="100" />
        </td>
      ) : null}
      {props.name != null ? <td>{props.name}</td> : null}
      {props.description != null ? (
        <td>{props.description.substring(0, 50)}</td>
      ) : null}
      {props.price != null ? <td>{props.price}</td> : null}
      {props.stock != null ? <td>{props.stock}</td> : null}
      {props.discount != null ? <td>{props.discount}%</td> : null}
      <td className="action-col">
        <Row>
          <Col xl={6}>
            <Button
              onClick={props.edit}
              className="full-width"
              variant="success"
            >
              Edit
            </Button>
          </Col>
          <Col xl={6}>
            <Button
              onClick={props.delete}
              className="full-width"
              variant="danger"
            >
              Delete
            </Button>
          </Col>
        </Row>
      </td>
    </tr>
  );
}

export default TableRowData;
