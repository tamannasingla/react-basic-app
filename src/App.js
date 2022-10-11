import React, { useEffect, useState } from "react";
import AddExpense from "./components/AddExpense/AddExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const [expenses, setExpenses] = useState([
    { date: new Date(2021, 7, 23), title: "Car", amount: 255 },
    { date: new Date(2022, 5, 22), title: "Bike", amount: 230 },
    { date: new Date(2020, 9, 20), title: "Truck", amount: 200 },
    { date: new Date(2022, 2, 3), title: "Jeep", amount: 100 },
  ]);
  const [filter, setFilter] = useState({
    enabled: false,
    filteredExpenses: [],
    option: "All",
  });

  useEffect(() => {
    if (filter.enabled) {
      filterExpenseHandler(filter.option);
    }
  }, [expenses]);

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

  const filterExpenseHandler = (option) => {
    setFilter((prevState) => {
      return {
        ...prevState,
        enabled: true,
        option,
        filteredExpenses:
          option === "All"
            ? expenses
            : expenses.filter((expense) => {
                return expense.date.getFullYear() === Number(option);
              }),
      };
    });
  };

  return (
    <div>
      <AddExpense onAddExpense={addExpenseHandler} />
      <Expenses
        expenses={filter.enabled ? filter.filteredExpenses : expenses}
        onFilterExpense={filterExpenseHandler}
      />
    </div>
  );
};

export default App;
