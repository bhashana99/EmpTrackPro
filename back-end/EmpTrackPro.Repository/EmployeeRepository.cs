using EmpTrackPro.Models.Entities;
using Microsoft.Data.SqlClient;

namespace EmpTrackPro.Repository
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly DataBaseUtilities _db;

        public EmployeeRepository()
        {
            _db = new DataBaseUtilities();
        }

        public bool Insert(Employee employee)
        {

            try
            {
                _db.openConnection();

                SqlParameter[] sqlParameter = new SqlParameter[]
                {
                    new SqlParameter("@EmployeeNo", employee.EmployeeNo),
                    new SqlParameter("@FirstName", employee.FirstName),
                    new SqlParameter("@LastName", employee.LastName),
                    new SqlParameter("@DateOfBirth", employee.DateOfBirth),
                    new SqlParameter("@Salary", employee.Salary)
                };

                int rowsAffected = _db.PopulateData("usp_InsertEmployee", sqlParameter);

                return rowsAffected > 0;

            }
            finally
            {
                _db.closeConnection();
            }



        }
    }
}
