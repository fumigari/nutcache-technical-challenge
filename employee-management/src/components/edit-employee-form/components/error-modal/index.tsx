import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ErrorModal = ({
  show,
  onHide,
  error,
}: {
  show: boolean;
  onHide: () => void;
  error: string;
}): JSX.Element => {
  return (
    <Modal show={show} onHide={onHide} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Couldn't edit employee</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          {" "}
          Please review the info edited. More details:
          <br></br>
          Status: {error}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ErrorModal;
