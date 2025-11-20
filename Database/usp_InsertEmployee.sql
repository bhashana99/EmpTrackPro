CREATE PROCEDURE usp_InsertEmployee
    @EmployeeNo INT,
    @FirstName NVARCHAR(50),
    @LastName NVARCHAR(50),
    @DateOfBirth DATE,
    @Salary DECIMAL(18,2)
AS
BEGIN
    INSERT INTO Employees(EmployeeNo, FirstName, LastName, DateOfBirth, Salary)
    VALUES(@EmployeeNo, @FirstName, @LastName, @DateOfBirth, @Salary);
END
