using DevTask.Application.DTOs;
using DevTask.Application.DTOs.Column;
using DevTask.Application.Services;
using Microsoft.AspNetCore.Mvc;

namespace DevTask.Api.Controllers
{
    [ApiController]
    [Route("api/v1/columns")]
    public class ColumnsController : ControllerBase
    {
        private readonly ColumnService _columnService;

        public ColumnsController(ColumnService columnService)
        {
            _columnService = columnService;
        }

        [HttpGet("/api/v1/projects/{projectId}/columns")]
        public async Task<ActionResult<ICollection<ColumnDTO>>> GetColumnsByProjectId(int projectId)
        {
            var columns = await _columnService.GetColumnsByProjectId(projectId);

            return Ok(columns);
        }

        [HttpPost]
        public async Task<ActionResult<ColumnDTO>> Create(CreateColumnDTO createDTO)
        {
            var createdColumnDto = await _columnService.Add(createDTO);

            return Ok(createdColumnDto); //TODO: return CreatedAction for every POST
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
