import React from "react";

import "../modules/UI/UIStyles.css";
import styles from "./NewUserForm.module.css";

const NewUserForm = () => {
  return (
    <div className="card">
      <div className={styles['form-group']}>
        <label>Username</label>
        <input type="text" className={styles['form-control']} />
      </div>
      <div className={styles['form-group']}>
        <label>Age (Years)</label>
        <input type="text" className={styles['form-control']} />
      </div>
      <div className="form-group">
          <input type="submit" className={styles['submit-button']} value="Add User" />
      </div>
    </div>
  );
};

export default NewUserForm;
