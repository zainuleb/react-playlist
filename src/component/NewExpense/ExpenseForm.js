import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = (props) => {
  const [fTitle, setTitle] = useState('');

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const [fAmount, setAmount] = useState(0);

  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };

  const [fDate, setDate] = useState('');

  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: fTitle,
      amount: fAmount,
      date: new Date(fDate),
    };
    props.onSave(expenseData);

    setTitle('');
    setAmount(0);
    setDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} value={fTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={fAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            /*    min="2019-01-01"
            max="2022-12-31" */
            onChange={dateChangeHandler}
            value={fDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
