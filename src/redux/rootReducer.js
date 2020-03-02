import { combineReducers } from "redux";

import transactionReducer from "./transaction/transaction.reducer";

export default combineReducers({
  transactions: transactionReducer
});
