import ExpenseItem from "./components/ExpenseItem";

const App = () => {
  const expenses = [
    { date: new Date(2022, 7, 23), title: "Car", amount: 255 },
    { date: new Date(2022, 5, 22), title: "Bike", amount: 230 },
    { date: new Date(2022, 9, 20), title: "Truck", amount: 200 },
    { date: new Date(2022, 2, 3), title: "Jeep", amount: 100 },
  ];

  return (
    <div>
      {expenses.map((expense, idx) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          key={idx}
        />
      ))}
    </div>
  );
};

export default App;
