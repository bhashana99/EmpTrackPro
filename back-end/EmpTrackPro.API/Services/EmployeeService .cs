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

    }
}
