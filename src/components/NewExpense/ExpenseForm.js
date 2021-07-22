import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  
  const [enteredTitle, setEnteredTitle] = useState("");
  //setEnteredTitle changes enteredTitle which becomes the new state of the title
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value); //you can look in the console to find this target.value!!
    //first console.log(event) than search in console
  };

  const [enteredAmount, setAmount] = useState(""); //empty string for somwhere to store the saved data
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const [enteredDate, setEnteredDate] = useState("");
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate)
    }

    props.onSaveExpenseData(expenseData);//this will be passed as an argument to NewExpense
    setAmount("");
    setEnteredDate("");
    setEnteredTitle("");//these will make it reset back to empty when submitted
  };

  

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={enteredAmount} //the value will change when submitted
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2021-07-07" value={enteredDate} onChange={dateChangeHandler} />
          </div>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.stopEdit}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
