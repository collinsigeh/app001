import React, { useState } from "react";

import NewUserForm from "./modules/NewUser/NewUserForm";
import UserList from "./modules/UserList/UserList";
import InputError from "./modules/InputError/InputError";

function App() {
  const [users, setUsers] = useState('');
  const [inputError, setInputError] = useState('');

  const inputErrorHandler = (error) => {
    setInputError(error);
  };

  const addUserHandler = (newUser) => {
    setUsers((prevUsers) => {
      return [...prevUsers, newUser];
    });
  };

  return (
    <div>
      <NewUserForm onNewUser={addUserHandler} setInputError={inputErrorHandler} />
      {users.length > 0 && <UserList users={users} />}
      <InputError inputError={inputError} setInputError={inputErrorHandler} />
    </div>
  );
}

export default App;
