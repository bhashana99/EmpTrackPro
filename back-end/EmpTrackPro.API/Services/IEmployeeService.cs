
using EmpTrackPro.Models.DTOs;
using EmpTrackPro.Models.Entities;


namespace EmpTrackPro.API.Services
{
    public interface IEmployeeService
    {
        Task<IEnumerable<EmployeeDTO>> GetAllAsync();
        //Task<EmployeeDTO> GetByIdAsync(int employeeNo);
        Task AddAsync(EmployeeDTO employeeDto);
        //Task UpdateAsync(EmployeeDTO employeeDto);
        Task DeleteAsync(int employeeNo);
        //Task<decimal> GetAverageSalaryAsync();
    }
}
