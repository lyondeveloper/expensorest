import React from "react";

import Header from "./components/header";
import Balance from "./components/balance";
import IncomeExpenses from "./components/income-expenses";
import History from "./components/history";
import AddTransaction from "./components/add-transaction";

import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <Balance />
      <IncomeExpenses />
      <History />
      <AddTransaction />
    </>
  );
}

export default App;
