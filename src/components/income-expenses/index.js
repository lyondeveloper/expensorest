import React from "react";

import { useSelector, shallowEqual } from "react-redux";

const IncomeExpenses = () => {
  const {
    transactions: { transactions }
  } = useSelector(state => state, shallowEqual);

  const amounts = transactions.map(t => t.amount);

  const income = amounts
    .filter(amount => amount > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = amounts
    .filter(amount => amount < 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          +{income}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          {expense}
        </p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
