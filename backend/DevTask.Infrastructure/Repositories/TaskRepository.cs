using DevTask.Infrastructure.Data;
using DevTask.Application.Repositories;
using Microsoft.EntityFrameworkCore;

namespace DevTask.Infrastructure.Repositories
{
    public class TaskRepository : ITaskRepository
    {
        private AppDbContext _context;

        public TaskRepository(AppDbContext context) 
        {
            _context = context;
        }

        public async Task<TaskItem> GetTaskByIdAsync(int id)
        {
            return await _context.Tasks.FirstAsync(x => x.Id == id);
        }

        public async Task AddAsync(Task task)
        {
            _context.Add(task);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(Task task)
        {
            _context.Update(task);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            _context.Remove(id);
            await _context.SaveChangesAsync();
        }
    }
}
