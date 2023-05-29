using System.ComponentModel;

namespace EmployeeManagement.Enums
{
    public enum Gender
    {
        [Description("Woman")]
        Woman = 1,
        [Description("Man")]
        Man = 2,
        [Description("Transgender")]
        Transgender = 3,
        [Description("Non binary")]
        NonBinary = 4,
        [Description("Prefer not to respond")]
        PreferNotToRespond = 5,
    }
}
