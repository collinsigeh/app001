import React, { useState } from "react";

import NewUserForm from "./modules/NewUser/NewUserForm";
import UserList from "./modules/UserList/UserList";

function App() {
  const [users, setUsers] = useState('');

  const addUserHandler = (newUser) => {
    setUsers((prevUsers) => {
      return [...prevUsers, newUser];
    });
  };

  return (
    <div>
      <NewUserForm onNewUser={addUserHandler} />
      {users.length > 0 && <UserList users={users} />}
    </div>
  );
}

export default App;
