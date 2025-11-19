using DevTask.Application.DTOs;
using DevTask.Application.Interfaces;
using DevTask.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace DevTask.Infrastructure.Repositories
{
    public class ProjectRepository : IProjectRepository
    {
        private AppDbContext _context;

        public ProjectRepository(AppDbContext context) 
        {
            _context = context;
        }

        public async Task AddAsync(Project project)
        {
            _context.Add(project);
            await _context.SaveChangesAsync();
        }

        public Task DeleteAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task UpdateAsync(Project project)
        {
            throw new NotImplementedException();
        }

        public async Task<ICollection<Project>> GetAllProjects()
        {
            return await _context.Projects.ToListAsync();
        }
    }
}
