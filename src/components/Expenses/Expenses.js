import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });//this filters our items array and gives us a new array with the items that passed

  return (
    //the card here is a wrapper of sorts, its like a pre-styled div or whatever you make of it
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {/*this prop points to filterChangeHandler function */}

      <ExpensesChart Expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>
    </Card>
  );
};

export default Expenses;
