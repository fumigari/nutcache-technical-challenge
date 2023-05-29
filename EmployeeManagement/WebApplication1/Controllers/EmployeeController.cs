using EmployeeManagement.Models;
using EmployeeManagement.Repositories.Interfaces;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeRepository _employeeRepository;
        public EmployeeController(IEmployeeRepository employeeRepository)
        {
            _employeeRepository = employeeRepository;
        }

        [HttpGet]
        public async Task<ActionResult<List<EmployeeModel>>> GetAllEmployees()
        {
            List<EmployeeModel> employees =  await _employeeRepository.GetAllEmployees();
            return Ok(employees);
        }

        [HttpGet("{id}")] //customizar url para ficar api/id
        public async Task<ActionResult<List<EmployeeModel>>> FindById(int id)
        {
            EmployeeModel employee = await _employeeRepository.FindById(id);
            return Ok(employee);
        }

        [HttpPost]
        public async Task<ActionResult<EmployeeModel>> AddEmployee([FromBody] EmployeeModel employeeModel)
        {
            EmployeeModel emplyoee = await _employeeRepository.AddEmployee(employeeModel);
            return Ok(emplyoee);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<EmployeeModel>> UpdateEmployee([FromBody] EmployeeModel employeeModel, int id)
        {
            employeeModel.Id = id;
            EmployeeModel emplyoee = await _employeeRepository.UpdateEmployee(employeeModel, id);
            return Ok(emplyoee);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<EmployeeModel>>DeleteEmployee(int id)
        {
            bool deletedEmployee = await _employeeRepository.DeleteEmployee(id);
            return Ok(deletedEmployee);
        }
    }
}
