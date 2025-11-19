using DevTask.Application.DTOs;
using DevTask.Application.Interfaces;

namespace DevTask.Application.Services
{
    public class ProjectService
    {
        private IProjectRepository _projectRepository;

        public ProjectService(IProjectRepository projectRepository) 
        {
            _projectRepository = projectRepository;
        }

        public async Task<IEnumerable<ProjectDTO>> GetAllProjects()
        {
            var projects = await _projectRepository.GetAllProjects();

            var projectsDTO = projects.Select(x => new ProjectDTO
            {
                Id = x.Id,
                Name = x.Name,
                CreatedDate = DateTime.Now,
            }).ToList();

            return projectsDTO;
        }

        public async Task Add(ProjectDTO projectDto)
        {
            var newProject = new Project()
            {
                Name = projectDto.Name,
                Description = "",
                CreatedDate = DateTime.Now
            };

            var defaultBoard = new Board
            {
                Name  = "Development"
            };

            var defaultColumns = new List<Column>
            {
                new Column { Name = "Open" },
                new Column { Name = "Closed" }
            };

            defaultBoard.Columns = defaultColumns;
            newProject.Boards = new List<Board> { defaultBoard };

            await _projectRepository.AddAsync(newProject);
        }

        public async void Update(Project project)
        {
            await _projectRepository.UpdateAsync(project);
        }

        public async void Delete(int id)
        {
            await _projectRepository.DeleteAsync(id);
        }
    }
}
