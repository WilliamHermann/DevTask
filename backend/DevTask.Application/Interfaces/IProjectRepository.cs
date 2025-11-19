namespace DevTask.Application.Interfaces
{
    public interface IProjectRepository
    {
        Task AddAsync(Project project);
        Task UpdateAsync(Project project);
        Task DeleteAsync(int id);
        Task<ICollection<Project>> GetAllProjects();
    }
}
