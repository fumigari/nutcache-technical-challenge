using EmployeeManagement.Data.Map;
using EmployeeManagement.Models;
using Microsoft.EntityFrameworkCore;

// aqui estamos trabalho com ORM, aqui ele vai facilitar de trabalhar com o banco de dados (independente do banco de dados)
// ele vai fazer toda a estrutura de entidade pra o código para depois criar o banco de dados
// no DBContext estamos configurando as tabelas e configurações gerais do banco de dados.
// o DbSet Employees vai criar uma tabela com o nome Employees
namespace EmployeeManagement.Data
{
    public class EmployeeManagementDbContext : DbContext
    {
        public EmployeeManagementDbContext(DbContextOptions<EmployeeManagementDbContext> options)
            : base(options)
        {
        }

        public DbSet<EmployeeModel> Employees { get; set; }

        protected override void ConfigureConventions(ModelConfigurationBuilder builder)
        {
            builder.Properties<DateOnly>().HaveConversion<DateTime>();
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new EmployeeMap());
            base.OnModelCreating(modelBuilder);
        }
    }
}
