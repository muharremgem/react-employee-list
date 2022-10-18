import React from "react";
import style from "./Employee.module.scss";

const Employee = ({ employee }) => {
  return (
    <article>
      <div>
        <img src={employee.image} alt="" />
      </div>
    </article>
  );
};

export default Employee;
