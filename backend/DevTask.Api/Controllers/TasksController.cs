using DevTask.Application.DTOs;
using DevTask.Application.Services;
using DevTask.Infrastructure.Data;
using Microsoft.AspNetCore.Mvc;

namespace DevTask.Api.Controllers
{
    [ApiController]
    [Route("api/v1/tasks")]
    public class TasksController : ControllerBase
    {
        private TaskService _taskService;

        public TasksController(TaskService taskService) => _taskService = taskService;

        [HttpGet("{id}")]
        public async Task<ActionResult<TaskDTO>> GetTaskById(int id)
        {
            var task = await _taskService.GetById(id);

            return task;
        }

        [HttpPost]
        public async Task<IActionResult> Create()
        {
            // TODO: Implement create functionality
            return Ok();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, TaskItem task)
        {
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            _taskService.Delete(id);

            return Ok();
        }


    }
}
