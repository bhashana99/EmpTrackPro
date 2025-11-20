CREATE TABLE Employees
(
    EmployeeNo INT PRIMARY KEY,
    FirstName NVARCHAR(50) NOT NULL,
    LastName NVARCHAR(50) NOT NULL,
    DateOfBirth DATE NOT NULL,
    Salary DECIMAL(18,2) NOT NULL
);
