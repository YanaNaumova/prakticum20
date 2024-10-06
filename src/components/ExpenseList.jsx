import { useDispatch, useSelector } from "react-redux";
import ExpenseItem from "./ExpenseItem";
import { addExpenses, deleteExpenses } from "../slices/expenseSlice";
import { useState } from "react";

function ExpenseList() {
  const expenses = useSelector((state) => state.expenses.expenses);
  const dispatch = useDispatch();
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addExpenses({ description, amount }));
    setDescription("");
    setAmount("");
  }
  return (
    <div>
      <h1>Expense List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Amount"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
        <button type="submit">Add Expense</button>
      </form>
      <ul>
        {expenses.map((el) => (
          <ExpenseItem
            {...el}
            key={el.id}
            func={() => dispatch(deleteExpenses(el.id))}
          />
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
