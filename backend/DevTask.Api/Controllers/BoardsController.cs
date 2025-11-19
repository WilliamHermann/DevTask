using Microsoft.AspNetCore.Mvc;

namespace DevTask.Api.Controllers
{
    [ApiController]
    [Route("api/v1/boards")]
    public class BoardsController : ControllerBase
    {
        public IActionResult Index()
        {
            return Ok();
        }
    }
}
