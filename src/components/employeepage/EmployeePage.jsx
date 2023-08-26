import "./employeepage.css";
import Header from "../header/header";

function EmployeePage({ employee }) {
  return (
    <div className="EP">
      <Header title="Employee" />
      <div className="view">
        <div className="PI">
          <img src="_blank" alt="Image of person" />
        </div>
        <div className="Pro-Info">
          <h2>{employee.name}</h2>
          <h4>{employee.title} </h4>
        </div>
      </div>
      <div className="office card">
        <h3>Call Office</h3>
        <p>785-005-5560</p>
      </div>
      <div className="mobile card">
        <h3>Call Mobile</h3>
        <p>558-665-0586</p>
      </div>
      <div className="sms card">
        <h3>SMS</h3>
        <p>558-665-0586</p>
      </div>
      <div className="email card">
        <h3>Email</h3>
        <p>jtaylor@fakemail.com</p>
      </div>
    </div>
  );
}

export default EmployeePage;
