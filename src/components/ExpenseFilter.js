import "./ExpenseFilter.css";

const ExpenseFilter = () => {
  const options = () => {
    const currentYear = new Date().getFullYear();
    const values = [];
    for (let yr = currentYear - 2; yr <= currentYear; yr++) {
      values.push(yr);
    }
    return values;
  };

  return (
    <div className="expense-filter">
      <div className="expense-filter__control">
        <label className="expense-filter label">Filter by year</label>
        <select>
          {options().map((opt) => (
            <option value={opt}>{opt}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
