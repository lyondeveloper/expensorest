import { DELETE_TRANSACTION, ADD_TRANSACTION } from "./transaction.types";

export const deleteTransaction = id => ({
  type: DELETE_TRANSACTION,
  id
});

export const addTransaction = payload => ({
  type: ADD_TRANSACTION,
  payload
});
