
using EmpTrackPro.Models.Entities;

namespace EmpTrackPro.Repository
{
    public interface IEmployeeRepository
    {
        IEnumerable<Employee> GetAll();
        
        bool Insert(Employee employee);
        bool Update(Employee employee);
        bool Delete(int employeeNo);
      
    }
}
