using System.ComponentModel;

namespace EmployeeManagement.Enums
{
    public enum Team
    {
        [Description("Mobile")]
        Mobile = 1,
        [Description("Front end")]
        FrontEnd = 2,
        [Description("Back end")]
        BackEnd = 3,
        [Description("Not required")]
        NotRequired = 4,
    }
}
