const URL = "http://localhost:52719/api";

export const getAllEmployees = (): Promise<EmployeeTypeWithID[]> => {
  return fetch(`${URL}/Employee`, {
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    mode: "cors",
    credentials: "include",
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw response;
    })
    .catch((error) => {
      console.error("Error fetching data: ", error);
    });
};

export const addEmployee = (employee: string): Promise<number | void> => {
  return fetch(`${URL}/Employee`, {
    method: "POST",
    headers: { "Content-type": "application/json; charset=UTF-8" },
    body: employee,
  })
    .then((response) => response.status)
    .catch((error) =>
      console.error(
        "Couldn't add employee, please review the info added.\nMore details: ",
        error
      )
    );
};

export const updateEmployee = (
  employee: string,
  id: number
): Promise<number | void> => {
  return fetch(`${URL}/Employee/${id}`, {
    method: "PUT",
    headers: { "Content-type": "application/json; charset=UTF-8" },
    body: employee,
  })
    .then((response) => response.status)
    .catch((error) =>
      console.error(
        "Couldn't add employee, please review the info added.\nMore details: ",
        error
      )
    );
};

export const deleteEmployee = (id?: number): Promise<Response> => {
  return fetch(`${URL}/Employee/${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error deleting employee: ", error);
    });
};

export type EmployeeTypeWithID = EmployeeType & { id: number };

export type EmployeeType = {
  [x: string]: any;
  name: string;
  birthDate: string;
  gender: number;
  email: string;
  cpf: string;
  startDate: string;
  team: number;
};
