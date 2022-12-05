import React from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  return (
    <ul className="expenses-list">
      {props.items.length === 0 ? (
        <h2 className="expenses-list__fallback">No Expenses found</h2>
      ) : (
        props.items.map((expense, idx) => (
          <li key={idx}>
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          </li>
        ))
      )}
    </ul>
  );
};

export default ExpenseList;
