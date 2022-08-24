import React, { useState } from "react";
import AddExpense from "./components/AddExpense";
import Expenses from "./components/Expenses";

const App = () => {
  const [expenses, setExpenses] = useState([
    { date: new Date(2022, 7, 23), title: "Car", amount: 255 },
    { date: new Date(2022, 5, 22), title: "Bike", amount: 230 },
    { date: new Date(2022, 9, 20), title: "Truck", amount: 200 },
    { date: new Date(2022, 2, 3), title: "Jeep", amount: 100 },
  ]);

  const addExpenseHandler = (expense) => {
    if (
      expense.title.length !== 0 &&
      expense.amount.length !== 0 &&
      !isNaN(expense.date)
    ) {
      setExpenses((prevState) => {
        return [...prevState, expense];
      });
    }
  };

  return (
    <div>
      <AddExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
