import React, { useEffect, useState } from "react";
import "./index.css";
import {
  EmployeeTypeWithID,
  getAllEmployees,
  deleteEmployee,
} from "../../service/api";
import Table from "react-bootstrap/Table";
import { team } from "../../utils/team";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { showStartDate } from "../../utils/date";
import DeleteConfirmationModal from "./delete-confirmation-modal";
import EditEmployeeForm from "../edit-employee-form";

const EmployeeList: React.FC = () => {
  const [employees, setEmployees] = useState<EmployeeTypeWithID[]>([]);
  const [selectedEmployeeToDelete, setSelectedEmployeeToDelete] =
    useState<EmployeeTypeWithID>();
  const [selectedEmployeeToEdit, setSelectedEmployeeToEdit] =
    useState<EmployeeTypeWithID>();

  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const handleOpenDeleteConfirmation = () => setDeleteConfirmation(true);
  const handleCloseDeleteConfirmation = () => setDeleteConfirmation(false);

  const [openEditModal, setOpenEditModal] = useState(false);
  const handleOpenEditModal = () => setOpenEditModal(true);
  const handleCloseEditModal = () => setOpenEditModal(false);

  useEffect(() => {
    getAllEmployees().then((result) => {
      setEmployees(result);
    });
  }, [employees]);

  // useEffect(() => {
  //   console.log(employees);
  // }, [employees]);

  const handleDeleteEmployee = (searchEmployee: EmployeeTypeWithID) => {
    const employee = employees.find(
      (employee) => employee.id === searchEmployee.id
    );

    setSelectedEmployeeToDelete(employee);
    handleOpenDeleteConfirmation();
  };

  const handleEditEmployee = (searchEmployee: EmployeeTypeWithID) => {
    const employee = employees.find(
      (employee) => employee.id === searchEmployee.id
    );

    setSelectedEmployeeToEdit(employee);
    handleOpenEditModal();
  };

  return (
    <div className="employee-list">
      <Table striped bordered hover id="employees">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Start Date</th>
            <th>Team</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{showStartDate(employee.startDate)}</td>
              <td>{team(employee.team)}</td>
              <td>
                <div className="employee-list__buttons">
                  <Button
                    variant="danger"
                    onClick={() => handleDeleteEmployee(employee)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => handleEditEmployee(employee)}
                  >
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </Button>
                  <DeleteConfirmationModal
                    show={deleteConfirmation}
                    onHide={handleCloseDeleteConfirmation}
                    employee={selectedEmployeeToDelete}
                  />
                  {openEditModal ? (
                    <EditEmployeeForm
                      show={openEditModal}
                      onHide={handleCloseEditModal}
                      employee={selectedEmployeeToEdit}
                    />
                  ) : null}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default EmployeeList;
