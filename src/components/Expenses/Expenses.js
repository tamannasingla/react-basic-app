import React from "react";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpenseFilter
        onYearFilterExpense={props.onFilterExpense}
        selected={props.selected}
      />
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
