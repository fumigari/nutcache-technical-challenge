import AddEmplyoeeForm from "../add-employee-form";
import "./index.css";
import { useState } from "react";

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header__title">
        <h1>Employee Management App</h1>
      </div>
      <AddEmplyoeeForm />
    </div>
  );
};

export default Header;
