using EmployeeManagement.Models;

namespace EmployeeManagement.Repositories.Interfaces
{
    public interface IEmployeeRepository
    {
        Task<List<EmployeeModel>> GetAllEmployees();
        Task<EmployeeModel> FindById(int id);
        Task<EmployeeModel> AddEmployee(EmployeeModel employee);
        Task<EmployeeModel> UpdateEmployee(EmployeeModel employee, int id);
        Task<bool> DeleteEmployee(int id);
    }
}
