CREATE PROCEDURE usp_GetAverageSalary
AS
BEGIN
    SELECT AVG(Salary) AS AverageSalary FROM Employees;
END
