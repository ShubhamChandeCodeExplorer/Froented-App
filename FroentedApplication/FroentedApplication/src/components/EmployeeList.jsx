import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/employee/v1/findall"
        );
        setEmployees(response.data);
      } catch (error) {
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">EmpAddress</th>
            <th scope="col">Salary</th>
            <th scope="col">DOB</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.empId}>
              {" "}
              {/* Use `key` prop instead of `id` for rows */}
              <td>{employee.empId}</td>
              <td>{employee.empFirstName}</td>
              <td>{employee.empLastName}</td>
              <td>{employee.empAddress}</td>
              <td>{employee.empSalary}</td>
              <td>{employee.empDOB}</td>
              <td>{employee.empEmailId}</td>
              <td>{employee.empPassword}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
