import React from "react";
import { useSelector, shallowEqual } from "react-redux";

const Balance = () => {
  const {
    transactions: { transactions }
  } = useSelector(state => state, shallowEqual);

  const amounts = transactions.map(t => t.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className="container">
      <h4>Your Balance</h4>
      <h1> {total} </h1>
    </div>
  );
};

export default Balance;
