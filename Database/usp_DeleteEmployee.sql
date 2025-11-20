CREATE PROCEDURE usp_DeleteEmployee
    @EmployeeNo INT
AS
BEGIN
    DELETE FROM Employees WHERE EmployeeNo = @EmployeeNo;
END
