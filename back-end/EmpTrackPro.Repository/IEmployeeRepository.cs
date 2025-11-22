
using EmpTrackPro.Models.Entities;

namespace EmpTrackPro.Repository
{
    public interface IEmployeeRepository
    {
        IEnumerable<Employee> GetAll();
        //Employee? GetById(int employeeNo);
        bool Insert(Employee employee);
        //bool Update(Employee employee);
        bool Delete(int employeeNo);
        //decimal GetAverageSalary();
    }
}
