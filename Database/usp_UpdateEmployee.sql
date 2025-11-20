CREATE PROCEDURE usp_UpdateEmployee
    @EmployeeNo INT,
    @FirstName NVARCHAR(50),
    @LastName NVARCHAR(50),
    @DateOfBirth DATE,
    @Salary DECIMAL(18,2)
AS
BEGIN
    UPDATE Employees
    SET FirstName = @FirstName,
        LastName = @LastName,
        DateOfBirth = @DateOfBirth,
        Salary = @Salary
    WHERE EmployeeNo = @EmployeeNo;
END
