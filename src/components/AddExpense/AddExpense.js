import ExpenseForm from "../ExpenseForm/ExpenseForm";
import "./AddExpense.css";

const AddExpense = (props) => {
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={props.onAddExpense} />
    </div>
  );
};

export default AddExpense;
