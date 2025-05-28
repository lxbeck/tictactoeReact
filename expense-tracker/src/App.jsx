import { useState } from "react";
import "./App.css";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const addExpense = () => {
    if (name.trim() && amount.trim()) {
      setExpenses([...expenses, { name, amount: parseFloat(amount) }]);
      setName("");
      setAmount("");
    }
  };

  const removeExpense = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Expense name..."
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount..."
      />
      <button onClick={addExpense}>Add Expense</button>
      <h2>Total: ${expenses.reduce((total, exp) => total + exp.amount, 0).toFixed(2)}</h2>
      <ul>
        {expenses.map((exp, index) => (
          <li key={index}>
            {exp.name} - ${exp.amount.toFixed(2)}
            <button onClick={() => removeExpense(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
