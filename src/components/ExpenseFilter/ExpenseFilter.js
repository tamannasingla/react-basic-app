import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const options = () => {
    const currentYear = new Date().getFullYear();
    let values = ["All"];
    for (let yr = currentYear - 2; yr <= currentYear; yr++) {
      values.push(yr);
    }
    return values;
  };

  const yearChangeHandler = (event) => {
    props.onYearFilterExpense(event.target.value);
  };

  return (
    <div className="expense-filter">
      <div className="expense-filter__control">
        <label className="expense-filter label">Filter by year</label>
        <select onChange={yearChangeHandler}>
          {options().map((opt) => (
            <option value={opt}>{opt}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
