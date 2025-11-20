using Employee.Models.Entities;

namespace Employee.Repository
{
    public interface IEmployeeRepository
    {
        Task<IEnumerable<Employee>> GetAllAsync();
        Task<Employee> GetByIdAsync(int employeeNo);
        Task AddAsync(Employee employee);
        Task UpdateAsync(Employee employee);
        Task DeleteAsync(int employeeNo);
        Task<decimal> GetAverageSalaryAsync();
    }
}
