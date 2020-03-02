import React, { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import { useDispatch } from "react-redux";

import { addTransaction } from "../../redux/transaction/transaction.actions";

const AddTransaction = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    text: "",
    amount: 0,
    type: ""
  });

  const onChange = ({ target: { name, value } }) => {
    const newValue = name === "amount" ? parseInt(value) : value;
    setState({
      ...state,
      [name]: newValue
    });
  };

  const onAddTransaction = event => {
    event.preventDefault();
    const id = uuidv4();

    const payload = {
      id,
      ...state
    };

    dispatch(addTransaction(payload));
  };

  const options = [
    {
      value: "income",
      text: "Income"
    },

    {
      value: "expense",
      text: "Expense"
    }
  ];

  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            onChange={onChange}
            type="text"
            name="text"
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
          </label>
          <input
            onChange={onChange}
            type="number"
            name="amount"
            placeholder="Enter amount..."
          />
        </div>

        <h3>Type</h3>

        {options.map(option => (
          <div className="form-control">
            <>
              <input
                className="option"
                type="checkbox"
                name="type"
                value={option.value}
                onChange={onChange}
              />
              <label for={option.name}> {option.text} </label>
            </>
          </div>
        ))}
        <button onClick={onAddTransaction} className="btn">
          Add transaction
        </button>
      </form>
    </>
  );
};

export default AddTransaction;
