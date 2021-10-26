using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace employeeMan.Models
{
    public class employeeContext:DbContext
    {
        public employeeContext(DbContextOptions<employeeContext> options):base(options)
        {

        }

        public DbSet<employee> employees { get; set; }
    }
}
