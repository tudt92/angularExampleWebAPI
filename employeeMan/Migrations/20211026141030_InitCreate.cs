using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace employeeMan.Migrations
{
    public partial class InitCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "employees",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    empl_id = table.Column<string>(type: "NVARCHAR(50)", nullable: true),
                    empl_nm = table.Column<string>(type: "NVARCHAR(100)", nullable: true),
                    empl_adr = table.Column<string>(type: "NVARCHAR(500)", nullable: true),
                    empl_dep = table.Column<string>(type: "NVARCHAR(50)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_employees", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "employees");
        }
    }
}
