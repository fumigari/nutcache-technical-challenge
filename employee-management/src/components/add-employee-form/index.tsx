import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import * as yup from "yup";
import { useFormik } from "formik/dist";
import { configureEmployee, validateCPF } from "../../utils/employee";
import { addEmployee } from "../../service/api";
import SuccessModal from "./components/success-modal";
import ErrorModal from "./components/error-modal";
import "./index.css";

const initialValues = {
  name: "",
  birthDate: "",
  gender: "",
  email: "",
  cpf: "",
  startDate: "",
  team: "",
};

const validationSchema = yup.object().shape({
  name: yup.string().required("Required"),
  birthDate: yup.string().required("Required"),
  gender: yup.string().required("Required"),
  email: yup.string().email("Invalid email format").required("Required"),
  cpf: yup.string().required("Required"),
  startDate: yup.string().required("Required"),
  team: yup.string().optional(),
});

const AddEmplyoeeForm = () => {
  const [show, setShow] = useState(false);
  const handleOpen = () => setShow(true);
  const handleClose = () => setShow(false);

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const handleOpenSuccessModal = () => setShowSuccessModal(true);
  const handleCloseSuccessModal = () => setShowSuccessModal(false);

  const [showErrorModal, setShowErrorModal] = useState(false);
  const handleOpenErrorModal = () => setShowErrorModal(true);
  const handleCloseErrorModal = () => setShowErrorModal(false);

  const [errorMessage, setErrorMessage] = useState("");

  const formik = useFormik({
    initialValues,
    onSubmit: (values, { resetForm }) => {
      const cpf = validateCPF(values.cpf);
      const employee = configureEmployee(values, cpf);

      addEmployee(employee).then((response) => {
        if (response === 200) {
          console.log("Response: ", { response });
          handleClose();
          resetForm({
            values: {
              name: "",
              birthDate: "",
              gender: "",
              email: "",
              cpf: "",
              startDate: "",
              team: "",
            },
          });
          handleOpenSuccessModal();
        }
        if (response !== 200) {
          setErrorMessage(JSON.stringify(response));
          console.log(errorMessage);
          handleOpenErrorModal();
        }
      });
    },
    validationSchema,
    validateOnChange: false,
  });

  return (
    <>
      <Button variant="primary" onClick={handleOpen}>
        Add Employee
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* {console.log("Form values", formik.values)} */}
          <Form noValidate onSubmit={formik.handleSubmit}>
            <Form.Group>
              <Form.Label>Name*</Form.Label>
              <Form.Control
                autoFocus
                required
                type="text"
                id="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                isInvalid={!!formik.errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Birth Date*</Form.Label>
              <Form.Control
                type="text"
                required
                id="birthDate"
                name="birthDate"
                placeholder="dd/mm/yyyy"
                value={formik.values.birthDate}
                onChange={formik.handleChange}
                isInvalid={!!formik.errors.birthDate}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.birthDate}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Gender*</Form.Label>
              <Form.Select
                required
                id="gender"
                name="gender"
                value={formik.values.gender}
                onChange={formik.handleChange}
                isInvalid={!!formik.errors.gender}
              >
                <option value="">Select an option</option>
                <option value={1}>Woman</option>
                <option value={2}>Man</option>
                <option value={3}>Transgender</option>
                <option value={4}>Non binary</option>
                <option value={5}>Prefer not to respond</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {formik.errors.gender}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Email address*</Form.Label>
              <Form.Control
                type="email"
                required
                placeholder="name@example.com"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                isInvalid={!!formik.errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>CPF*</Form.Label>
              <Form.Control
                type="text"
                required
                maxLength={14}
                placeholder="123.456.789-00"
                id="cpf"
                name="cpf"
                value={formik.values.cpf}
                onChange={formik.handleChange}
                isInvalid={!!formik.errors.cpf}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.cpf}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Start Date*</Form.Label>
              <Form.Control
                type="text"
                required
                placeholder="mm/yyyy"
                id="startDate"
                name="startDate"
                value={formik.values.startDate}
                onChange={formik.handleChange}
                isInvalid={!!formik.errors.startDate}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.startDate}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="form-team" controlId="form-team">
              <Form.Label>Team</Form.Label>
              <Form.Select
                id="team"
                name="team"
                value={formik.values.team}
                onChange={formik.handleChange}
              >
                <option value={0}></option>
                <option value={1}>Mobile</option>
                <option value={2}>Front end</option>
                <option value={3}>Back end</option>
                <option value={4}>Not required</option>
              </Form.Select>
            </Form.Group>
            <br></br>
            <div className="add-employee-button">
              <Button type="submit">App employee</Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
      <SuccessModal show={showSuccessModal} onHide={handleCloseSuccessModal} />
      <ErrorModal
        show={showErrorModal}
        onHide={handleCloseErrorModal}
        error={errorMessage}
      />
    </>
  );
};

export default AddEmplyoeeForm;
