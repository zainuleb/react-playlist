import React from 'react';
import Card from '../Card/Card.js';
import Button from '../Button/Button.js';

import styles from './ErrorModal.module.css';

const ErrorModal = ({ title, message, onConfirm }) => {
  return (
    <div className={styles.backdrop} onClick={onConfirm}>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{title}</h2>
        </header>
        <div className={styles.content}>
          <p>{message}</p>
        </div>
        <footer className={styles.actions}>
          <Button>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
