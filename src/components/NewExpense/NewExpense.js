import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditing = () => {
    setIsEditing(false);
  };

  const SaveExpenseDataHandler = (enterExpenseData) => {
    //this function is received below by the onSaveExpenseData prop
    const expenseData = {
      ...enterExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false)
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Data</button>
      )}{" "}
      {/*THIS CHECKS IF IS isEditing  IS FALSE AND BELOW CHECKS IF IT IS TRUE */}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={SaveExpenseDataHandler}
          stopEdit={stopEditing}
        />
      )}
      {/*this prop receives SaveExpenseDataHandler as a value 
     this is so saveExpenseDataHandler is passed as a value to ExpenseForm through the onSaveExpenseData prop*/}
    </div>
  );
};

export default NewExpense;
