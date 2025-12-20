import React from "react";
import styles from "./AddUserButton.module.css";

const AddUserButton = ({ onClick }) => {
  return (
    <button className={styles.addUserBtn} onClick={onClick}>
      + إضافة مشترك جديد
    </button>
  );
};

export default AddUserButton;
