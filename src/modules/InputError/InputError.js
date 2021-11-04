import React from "react";

import styles from "./InputError.module.css";

const InputError = (props) => {
    const removeErrorMessageHandler = () => {
        props.setInputError('');
    }

    return <div className={`${styles.modal} ${props.inputError.length > 0 && styles.error}`}>
        <div className={styles['modal-content']}>
            <div className={styles.title}>Invalid Input</div>
            <div className={styles.body}><p>{props.inputError}</p>
            <div className={styles.button}><button onClick={removeErrorMessageHandler}>Close</button></div>
            </div>
        </div>
    </div>;
}

export default InputError;