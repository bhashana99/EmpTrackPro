
using EmpTrackPro.Models.DTOs;
using EmpTrackPro.Models.Entities;


namespace EmpTrackPro.API.Services
{
    public interface IEmployeeService
    {
        Task<IEnumerable<EmployeeDTO>> GetAllAsync();
        
        Task AddAsync(EmployeeDTO employeeDto);
        Task<bool> UpdateAsync(EmployeeDTO employeeDto);
        Task DeleteAsync(int employeeNo);
        
    }
}
