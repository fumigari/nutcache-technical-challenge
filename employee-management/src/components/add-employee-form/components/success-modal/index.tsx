import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const SuccessModal = ({
  show,
  onHide,
}: {
  show: boolean;
  onHide: () => void;
}) => {  
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Employee added successfully!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Check the new employee added on the list.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SuccessModal;
