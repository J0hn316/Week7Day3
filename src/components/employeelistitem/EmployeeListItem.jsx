import "./employeelistitem.css";

function EmployeeListItem({ employeeName, employeeTitle, handleUserClick }) {
  return (
    <div
      onClick={() => {
        handleUserClick({ name: employeeName, title: employeeTitle });
      }}
      className="ELI"
    >
      <img src="_blank" alt="Image of person" />
      <h3>{employeeName}</h3>
      <p>{employeeTitle}</p>
    </div>
  );
}

export default EmployeeListItem;
