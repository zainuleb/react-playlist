import React from 'react';
import styles from './UsersList.module.css';

const UsersList = ({ users }) => {
  console.log(users);
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {users &&
          users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default UsersList;
