import { useContext } from "react";
import { Modal, Button } from "react-bootstrap";

export default function DeleteData({ show, handleClose, setConfirmDelete }) {
  const handleDelete = () => {
    setConfirmDelete(true);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Delete Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this data?
          <div className="text-end mt-5 d-flex ">
            <Button
              onClick={handleClose}
              size="sm"
              variant="success"
              className="full-width me-2 "
            >
              Cancel
            </Button>
            <Button
              onClick={handleDelete}
              size="sm"
              variant="outline-danger"
              className="full-width"
            >
              Delete
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
