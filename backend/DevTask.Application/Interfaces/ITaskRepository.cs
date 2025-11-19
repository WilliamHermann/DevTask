namespace DevTask.Application.Repositories
{
    public interface ITaskRepository
    {
        Task<TaskItem> GetTaskByIdAsync(int id);
        Task AddAsync(Task task);
        Task UpdateAsync(Task task);
        Task DeleteAsync(int id);
    }
}
