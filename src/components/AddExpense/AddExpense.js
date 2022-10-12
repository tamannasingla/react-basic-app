import React, { useState } from "react";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import "./AddExpense.css";

const AddExpense = (props) => {
  const [formModel, setFormModel] = useState(false);

  const formHandler = (open) => {
    setFormModel(open);
  };

  return (
    <div className="new-expense">
      {formModel ? (
        <ExpenseForm
          onSaveExpense={props.onAddExpense}
          onFormStateChange={formHandler}
        />
      ) : (
        <button onClick={() => formHandler(true)}>Add Expense</button>
      )}
    </div>
  );
};

export default AddExpense;
