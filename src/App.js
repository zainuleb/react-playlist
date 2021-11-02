import React, { useState } from 'react';
import AddUser from './Components/User/AddUser';
import UsersList from './Components/User/UsersList';

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (username, userAge) => {
    setUsers((prevUsers) => {
      return [
        ...prevUsers,
        {
          name: username,
          age: userAge,
          id: Math.random().toString(),
        },
      ];
    });
  };
  return (
    <div>
      <AddUser addUsersHandler={addUserHandler} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
