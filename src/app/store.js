import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer from "../features/transactions/TransactionHistory";

// TODO: Configure the store to use the reducer from the transactions slice.
export const store = configureStore();
