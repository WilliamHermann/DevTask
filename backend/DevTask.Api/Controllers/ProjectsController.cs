using DevTask.Application.DTOs;
using DevTask.Application.Services;
using Microsoft.AspNetCore.Mvc;

namespace DevTask.Api.Controllers
{
    [ApiController]
    [Route("api/v1/projects")]
    public class ProjectsController : ControllerBase
    {
        private ProjectService _projectService;

        public ProjectsController(ProjectService projectService) 
        {
            _projectService = projectService;
        }

        [HttpGet]
        public async Task<ActionResult<ProjectDTO>> Get()
        {
            var projects = await _projectService.GetAllProjects();

            return Ok(projects);
        }

        [HttpPost]
        public async Task<IActionResult> Create(ProjectDTO project)
        {
            await _projectService.Add(project);
            return Ok();
        }

        [HttpPut]
        public async Task<IActionResult> Update()
        {
            return Ok();
        }

        [HttpDelete]
        public async Task<IActionResult> Delete()
        {
            // TODO: Implement functionality
            return Ok();
        }
    }
}
