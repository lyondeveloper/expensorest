import React from "react";
import { useSelector, shallowEqual } from "react-redux";

import Transaction from "../transaction";

const History = () => {
  const {
    transactions: { transactions }
  } = useSelector(state => state, shallowEqual);

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

export default History;
