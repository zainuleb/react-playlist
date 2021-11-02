import React, { useState } from 'react';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import styles from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal/ErrorModal';

const AddUser = ({ addUsersHandler }) => {
  const [formData, setFormData] = useState({
    username: '',
    age: 0,
  });

  const [error, setError] = useState();

  const userFormChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addUserHandler = (e) => {
    e.preventDefault();

    if (
      formData.username.trim().length === 0 ||
      formData.age.trim().length === 0
    ) {
      setError({
        title: 'Invalid Input',
        message: 'Please Enter A Valid Input',
      });
      return;
    }

    if (formData.age < 1) {
      setError({
        title: 'Invalid Age',
        message: 'Please Enter A Valid Age',
      });
      return;
    }

    addUsersHandler(formData.username, formData.age);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            value={formData.username}
            onChange={userFormChangeHandler}
          />

          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            name="age"
            type="number"
            value={formData.age}
            onChange={userFormChangeHandler}
          />

          <Button type="submit" onClick={addUserHandler}>
            Submit
          </Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
