using EmployeeManagement.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace EmployeeManagement.Data.Map
{
    public class EmployeeMap : IEntityTypeConfiguration<EmployeeModel>
    {
        public void Configure(EntityTypeBuilder<EmployeeModel> builder)
        {
            builder.HasKey(e => e.Id);
            builder.Property(e => e.Name).IsRequired().HasMaxLength(255);
            builder.Property(e => e.BirthDate).IsRequired();
            builder.Property(e => e.Gender).IsRequired();
            builder.Property(e => e.Email).IsRequired().HasMaxLength(150);
            builder.Property(e => e.CPF).IsRequired().HasMaxLength(11);
            builder.Property(e => e.StartDate).IsRequired();
            builder.Property(e => e.Team);
        }
    }
}
