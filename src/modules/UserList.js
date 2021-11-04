import React from "react";

import "../modules/UI/UIStyles.css";
import styles from "./UserList.module.css";

const UserList = () => {

    return <ul className="card">
        <li className={styles.userDetails}>Mac (31 years old)</li>
        <li className={styles.userDetails}>Collins (34 years old)</li>
    </ul>;
}

export default UserList;