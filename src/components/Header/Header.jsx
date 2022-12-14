import React from "react";
import style from "./Header.module.scss";
const Header = ({ indexOfFirstUser, indexOfLastUser }) => {
  return (
    <div>
      <h3 className={style.heading}>EMPLOYEE LİST</h3>
      <h5 className={style.count}>
        (Employees {indexOfFirstUser < 1 ? null : indexOfFirstUser} to{" "}
        {indexOfLastUser})
      </h5>
    </div>
  );
};

export default Header;
