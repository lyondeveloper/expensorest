import { DELETE_TRANSACTION, ADD_TRANSACTION } from "./transaction.types";
import produce from "immer";

const initialState = {
  transactions: [],
  loading: false
};

export default (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DELETE_TRANSACTION:
        const newTransactions = draft.transactions.filter(
          transaction => transaction.id !== action.id
        );

        draft.transactions = newTransactions;
        break;

      case ADD_TRANSACTION:
        draft.transactions = [action.payload, ...state.transactions];
        break;

      default:
        return draft;
    }
  });
