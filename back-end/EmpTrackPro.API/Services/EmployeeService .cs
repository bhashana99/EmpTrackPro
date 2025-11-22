using EmpTrackPro.Models.DTOs;
using EmpTrackPro.Models.Entities;
using EmpTrackPro.Repository;

namespace EmpTrackPro.API.Services
{
    public class EmployeeService : IEmployeeService
    {
        

        private readonly IEmployeeRepository _repo;

        public EmployeeService(IEmployeeRepository repo)
        {
            _repo = repo;
        }

        public async Task AddAsync(EmployeeDTO employeeDto)
        {
            var employee = new Employee
            {
                EmployeeNo = employeeDto.EmployeeNo,
                FirstName = employeeDto.FirstName,
                LastName = employeeDto.LastName,
                DateOfBirth = employeeDto.DateOfBirth,
                Salary = employeeDto.Salary
            };

            _repo.Insert(employee);
            await Task.CompletedTask;
        }

        public async Task<IEnumerable<EmployeeDTO>> GetAllAsync()
        {
            var employees = _repo.GetAll();

            
            var employeeDTOs = employees.Select(e => new EmployeeDTO
            {
                EmployeeNo = e.EmployeeNo,
                FirstName = e.FirstName,
                LastName = e.LastName,
                DateOfBirth = e.DateOfBirth,
                Salary = e.Salary
            });

            return await Task.FromResult(employeeDTOs);
        }

    }
}
