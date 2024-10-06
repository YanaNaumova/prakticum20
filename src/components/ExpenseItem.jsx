function ExpenseItem({ description, amount, func }) {
  return (
    <li>
      {description} - ${amount} <button onClick={func}>Delete</button>
    </li>
  );
}

export default ExpenseItem;
