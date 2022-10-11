import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  //   const [userInput, setUserInput] = useState({
  //     title: "",
  //     amount: "",
  //     date: "",
  //   });

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, title: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, amount: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, date: event.target.value };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };

    props.onSaveExpense(expenseData);

    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label className="label">Title</label>
          <input
            className="input"
            type="text"
            value={title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label className="label">Amount</label>
          <input
            className="input"
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label className="label">Date</label>
          <input
            className="input"
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={date}
            onChange={dateChangeHandler}
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
