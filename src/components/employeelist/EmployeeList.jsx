import "./employeelist.css";
import EmployeeListItem from "../employeelistitem/EmployeeListItem.jsx";

function EmployeeList({ handleUserClick }) {
  const employeeObjList = [
    { name: "James King", title: "President and CEO" },
    { name: "Julie Taylor", title: "VP of Marketing" },
    { name: "Eugene Lee", title: "Head of Sales" },
    { name: "John Williams", title: "Help desk" },
    { name: "Ray Moore", title: "Software Engineer" },
  ];

  return (
    <div className="EL">
      {employeeObjList.map((item) => {
        return (
          <EmployeeListItem
            handleUserClick={handleUserClick}
            employeeName={item.name}
            employeeTitle={item.title}
          />
        );
      })}
    </div>
  );
}

export default EmployeeList;
