import React from "react";

import { deleteTransaction } from "../../redux/transaction/transaction.actions";

import { useDispatch } from "react-redux";

const Transaction = ({ transaction: { text, amount, id, type } }) => {
  const dispatch = useDispatch();

  const onDeleteTransaction = () => dispatch(deleteTransaction(id));

  return (
    <>
      <li className={`${type === "income" ? "plus" : "minus"}`}>
        {text}{" "}
        <span>
          {" "}
          {type === "income" ? "+" : "-"} {amount} 
        </span>
        <button className="delete-btn" onClick={onDeleteTransaction}>
          x
        </button>
      </li>
    </>
  );
};

export default Transaction;
