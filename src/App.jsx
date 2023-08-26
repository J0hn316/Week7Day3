import "./App.css";
import HomePage from "./components/homepage/HomePage";
import EmployeePage from "./components/employeepage/EmployeePage";
import { useState } from "react";

function App() {
  const [currentEmployee, setCurrentEmployee] = useState({
    name: "Julie",
    title: "Taylor",
  });

  function handleUserClick(employeeObj) {
    setCurrentEmployee(employeeObj);
  }

  return (
    <div className="App">
      <HomePage handleUserClick={handleUserClick} />
      <EmployeePage employee={currentEmployee} />
    </div>
  );
}

export default App;
