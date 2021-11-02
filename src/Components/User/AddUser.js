import React, { useState } from 'react';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import styles from './AddUser.module.css';

const AddUser = () => {
  const [formData, setFormData] = useState({
    username: '',
    age: 0,
  });

  const userFormChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addUserHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Card className={styles.input}>
      <form>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={userFormChangeHandler}
          value={formData.username}
        />

        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          onChange={userFormChangeHandler}
          value={formData.age}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Card>
  );
};

export default AddUser;
