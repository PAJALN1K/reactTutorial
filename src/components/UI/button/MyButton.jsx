import React from "react";
import classes from "./MyButton.module.css";

// children - содержание между кнопкой, ...props - все остальные пропсы
// можно передавать все пропсы, которые попадают в кнопку с помощью {...props}, например disabled
const MyButton = function ({ children, ...props }) {
  return (
    <button {...props} className={classes.myBtn}>
      {children}
    </button>
  );
};

export default MyButton;
