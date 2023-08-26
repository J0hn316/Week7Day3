import EmployeeList from "../employeelist/EmployeeList";
import Header from "../header/header";
import SearchBar from "../searchbar/SearchBar";
import "./homepage.css";

function HomePage({ handleUserClick }) {
  return (
    <div className="HomePage">
      <Header title="Employee Directory" />
      <SearchBar />
      <EmployeeList handleUserClick={handleUserClick} />
    </div>
  );
}

export default HomePage;
