using DevTask.Application.DTOs;
using DevTask.Application.Repositories;

namespace DevTask.Application.Services
{
    public class TaskService
    {
        private ITaskRepository _taskRepository;

        public TaskService(ITaskRepository taskRepository) => _taskRepository = taskRepository;

        public async Task<TaskDTO> GetById(int id)
        {
            var task = await _taskRepository.GetTaskByIdAsync(id);

            var taskDTO = new TaskDTO
            {
                Title = task.Title,
                Description = task.Description,
            };

            return taskDTO;
        }
        public async void Add(Task task)
        {
            await _taskRepository.AddAsync(task);
        }

        public async void Update(Task task) 
        {
            await _taskRepository.UpdateAsync(task);
        }

        public async void Delete(int id) 
        {
            await _taskRepository.DeleteAsync(id);
        }
    }
}
