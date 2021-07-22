import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


const dummy_expenses = [
    { id: "e1", title: "Tower", amount: 250, date: new Date(2021, 7, 6) },
    {
      id: "e2",
      title: "MotherBoard",
      amount: 1200,
      date: new Date(),
    },
    { id: "e3", title: "Proccesor", amount: 800, date: new Date() },
    {
      id: "e4",
      title: "Graphics Card",
      amount: 900,
      date: new Date(),
    },
    {
      id: "e5",
      title: "Cooling Fans",
      amount: 150,
      date: new Date(),
    }
  ];
const App = () => {
  const [expenses, setExpenses] = useState(dummy_expenses);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]; //this is a function you want to use when you rely on previous state
    });
  };

  return (
    <div>
    
      <NewExpense  onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
