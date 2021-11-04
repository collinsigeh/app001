import React, { useState } from "react";

import "../UI/UIStyles.css";
import styles from "./NewUserForm.module.css";

const NewUserForm = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const newUserHandler = (event) => {
    event.preventDefault();

    if(username.length < 2){
      props.setInputError('Invalid username entered!')
      return;
    }
    if(Number.isNaN(age) || age < 0){
      props.setInputError('Invalid age entered!');
      return;
    }
    const newUser = {
      id: Math.random(),
      username: username,
      age: age,
    };
    props.onNewUser(newUser);
    setUsername("");
    setAge("");
  };

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageHandler = (event) => {
    setAge(event.target.value.trim());
  };

  return (
    <form className="card" onSubmit={newUserHandler}>
      <div className={styles["form-group"]}>
        <label>Username</label>
        <input
          type="text"
          className={styles["form-control"]}
          onChange={usernameHandler}
          value={username}
        />
      </div>
      <div className={styles["form-group"]}>
        <label>Age (Years)</label>
        <input
          type="text"
          className={styles["form-control"]}
          onChange={ageHandler}
          value={age}
        />
      </div>
      <div className="form-group">
        <input
          type="submit"
          className={styles["submit-button"]}
          value="Add User"
        />
      </div>
    </form>
  );
};

export default NewUserForm;
