using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace employeeMan.Models
{
    public class employee
    {
        [Key]
        public Guid id { get; set; }
        [Column(TypeName = "NVARCHAR(50)")]
        public string empl_id { get; set; }
        [Column(TypeName = "NVARCHAR(100)")]
        public string empl_nm { get; set; }
        [Column(TypeName = "NVARCHAR(500)")]
        public string empl_adr { get; set; }
        [Column(TypeName = "NVARCHAR(50)")]
        public string empl_dep { get; set; }
    }
}
