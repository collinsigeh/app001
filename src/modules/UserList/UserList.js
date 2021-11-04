import React from "react";

import "../UI/UIStyles.css";
import styles from "./UserList.module.css";

const UserList = (props) => {
  return (
    <ul className="card">
      {props.users.map((user) => (
        <li className={styles.userDetails}>
          {user.username} ({user.age} years old)
        </li>
      ))}
    </ul>
  );
};

export default UserList;
