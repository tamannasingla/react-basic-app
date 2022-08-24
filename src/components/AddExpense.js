import "./AddExpense.css";
import ExpenseForm from "./ExpenseForm";

const AddExpense = (props) => {
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={props.onAddExpense} />
    </div>
  );
};

export default AddExpense;
