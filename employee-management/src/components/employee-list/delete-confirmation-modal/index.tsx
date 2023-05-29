import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { EmployeeTypeWithID, deleteEmployee } from "../../../service/api";
import { useState } from "react";

const DeleteConfirmationModal = ({
  show,
  onHide,
  employee,
}: {
  show: boolean;
  onHide: () => void;
  employee?: EmployeeTypeWithID;
}): JSX.Element => {
  const handleDelete = (id: number | undefined, onHide: () => void) => {
    deleteEmployee(id).then((response) => {
      if (response) {
        console.log({ response });
        console.log("Response: ", { response });
        onHide();
      } else {
        console.error(`Couldn't delete the employee with ID: ${id}`);
      }
    });
  };

  return (
    <>
      <Modal show={show} onHide={onHide} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Are you sure you want to delete the employee: {employee?.name}?
            <br></br>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>Cancel</Button>
          <Button
            variant="danger"
            onClick={() => handleDelete(employee?.id, () => onHide())}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteConfirmationModal;
