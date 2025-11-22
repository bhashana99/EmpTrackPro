using EmpTrackPro.Models.Entities;
using Microsoft.Data.SqlClient;
using System.Data;

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

        public IEnumerable<Employee> GetAll()
        {
            _db.openConnection();

            DataTable dt = _db.Select("usp_GetAllEmployees");

            _db.closeConnection();

            List<Employee> list = new List<Employee>();

            foreach (DataRow row in dt.Rows)
            {
                list.Add(new Employee
                {
                    EmployeeNo = Convert.ToInt32(row["EmployeeNo"]),
                    FirstName = row["FirstName"].ToString(),
                    LastName = row["LastName"].ToString(),
                    DateOfBirth = Convert.ToDateTime(row["DateOfBirth"]),
                    Salary = Convert.ToDecimal(row["Salary"])
                });
            }

            return list;
        }

        public bool Delete(int employeeNo)
        {
            try
            {
                _db.openConnection();

                SqlParameter[] parameters = {
                    new SqlParameter("@EmployeeNo", SqlDbType.Int) { Value = employeeNo }
                };

                int rowsAffected = _db.Delete("usp_DeleteEmployee", parameters);

                
                return rowsAffected > 0;
            }
            finally
            {
                _db.closeConnection();
            }
        }
    }
}
