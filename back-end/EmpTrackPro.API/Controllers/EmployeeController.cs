using EmpTrackPro.API.Services;
using EmpTrackPro.Models.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace EmpTrackPro.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeService _employeeService;
        public EmployeeController(IEmployeeService service)
        {
            _employeeService = service;
        }

        [HttpPost]
        public async Task<IActionResult> Add([FromBody] EmployeeDTO employee)
        {
            await _employeeService.AddAsync(employee);
            return StatusCode(201, new { Message= "Employee Created" });
        }

        [HttpGet] 
        public async Task<ActionResult<IEnumerable<EmployeeDTO>>> GetAll()
        {
            var employees = await _employeeService.GetAllAsync();
            return Ok(employees);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _employeeService.DeleteAsync(id);
            return Ok(new { Message = "Employee Deleted" });
        }
    }
}
