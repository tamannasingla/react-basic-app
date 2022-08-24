import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./UI/Card";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.expenses.map((expense, idx) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          key={idx}
        />
      ))}
    </Card>
  );
};

export default Expenses;
