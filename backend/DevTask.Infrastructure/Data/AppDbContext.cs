using Microsoft.EntityFrameworkCore;

namespace DevTask.Infrastructure.Data
{
    public class AppDbContext : DbContext
    {

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<TaskItem> Tasks => Set<TaskItem>();
        public DbSet<Board> Boards => Set<Board>();
        public DbSet<Project> Projects => Set<Project>();
        public DbSet<Column> Columns => Set<Column>();
    }
}
