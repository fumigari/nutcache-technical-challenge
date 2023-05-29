using EmployeeManagement.Data;
using EmployeeManagement.Models;
using EmployeeManagement.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace EmployeeManagement.Repositories
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly EmployeeManagementDbContext _dbContext;
        public EmployeeRepository(EmployeeManagementDbContext EmployeeManagementDbContext)
        {
            _dbContext = EmployeeManagementDbContext;
        }

        public async Task<EmployeeModel> FindById(int id)
        {
            return await _dbContext.Employees.FirstOrDefaultAsync(employee => employee.Id == id);
        }

        public async Task<List<EmployeeModel>> GetAllEmployees()
        {
            return await _dbContext.Employees.ToListAsync();
        }
        public async Task<EmployeeModel> AddEmployee(EmployeeModel employee)
        {
            await _dbContext.Employees.AddAsync(employee);
            await _dbContext.SaveChangesAsync();

            return employee;
        }

        public async Task<EmployeeModel> UpdateEmployee(EmployeeModel employee, int id)
        {
            EmployeeModel employeeById = await FindById(id);

            if (employeeById == null)
            {
                throw new Exception($"Employee by ID : {id} was not found on database");
            }

            employeeById.Name = employee.Name;
            employeeById.BirthDate = employee.BirthDate;
            employeeById.Gender = employee.Gender;
            employeeById.Email = employee.Email;
            employeeById.CPF = employee.CPF;
            employeeById.StartDate = employee.StartDate;
            employeeById.Team = employee.Team;

            _dbContext.Employees.Update(employeeById);
            await _dbContext.SaveChangesAsync();

            return employeeById;
        }

        public async Task<bool> DeleteEmployee(int id)
        {
            EmployeeModel employeeById = await FindById(id);

            if (employeeById == null)
            {
                throw new Exception($"Employee by ID : {id} was not found on database");
            }

            _dbContext.Employees.Remove(employeeById);
            await _dbContext.SaveChangesAsync();

            return true;
        }


    }
}
