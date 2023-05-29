import { FormikValues } from "formik/dist";
import { configureBirthDate, configureStartDate } from "./date";
import { validate } from "gerador-validador-cpf";


export const validateCPF = (cpf: string): string => {
  try {
    const _cpf = cpf.toString().replace(/\.|-/gm, "");

    if (validate(_cpf)) {
      return _cpf;
    }
  } catch (error) {
    console.log("Invalid CPF", error);
  }
  return "";
};

export const configureEmployee = (values: FormikValues, _cpf: string): string => {
  const name = String(values.name);
  const birthDate = String(configureBirthDate(values.birthDate));
  const gender = parseInt(values.gender);
  const email = String(values.email);
  const cpf = String(_cpf);
  const startDate = String(configureStartDate(values.startDate));
  const team = parseInt(values.team);

  const employee = {
    name,
    birthDate,
    gender,
    email,
    cpf,
    startDate,
    team,
  };

  return JSON.stringify(employee);
};
