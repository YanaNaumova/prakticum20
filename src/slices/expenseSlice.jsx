import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
  name: "expenses",
  initialState: { expenses: [] },
  reducers: {
    addExpenses: (state, action) => {
      state.expenses.push({
        id: Math.random() * 10000,
        description: action.payload.description,
        amount: action.payload.amount,
      });
    },
    deleteExpenses: (state, action) => {
      state.expenses = state.expenses.filter(
        (expens) => expens.id !== action.payload
      );
    },
  },
});

export const { addExpenses, deleteExpenses } = expenseSlice.actions;
export default expenseSlice.reducer;
