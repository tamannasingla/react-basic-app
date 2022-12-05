import React, { useState } from "react";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseChart from "../ExpenseChart/ExpenseChart";
import ExpenseList from "../ExpenseList/ExpenseList";
import Card from "../UI/Card/Card";
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
      <ExpenseChart expenses={filteredExpenses} />
      <ExpenseList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
