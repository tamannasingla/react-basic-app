import React, { useState } from "react";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState(2022);

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear() === Number(filteredYear);
  });

  const filterExpenseHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        onYearFilterExpense={filterExpenseHandler}
        selected={filteredYear}
      />
      {filteredExpenses.map((expense, idx) => (
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
