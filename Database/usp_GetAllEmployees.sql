CREATE PROCEDURE usp_GetAllEmployees
AS
BEGIN
    SELECT EmployeeNo, FirstName, LastName, DateOfBirth, Salary
    FROM Employees;
END
