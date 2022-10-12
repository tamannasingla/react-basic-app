import React, { useState } from "react";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import "./AddExpense.css";

const AddExpense = (props) => {
  const [formModel, setFormModel] = useState(false);

  const openForm = () => {
    setFormModel(true);
  };

  const closeForm = () => {
    setFormModel(false);
  };

  return (
    <div className="new-expense">
      {formModel ? (
        <ExpenseForm onSaveExpense={props.onAddExpense} onCancel={closeForm} />
      ) : (
        <button onClick={openForm}>Add New Expense</button>
      )}
    </div>
  );
};

export default AddExpense;
