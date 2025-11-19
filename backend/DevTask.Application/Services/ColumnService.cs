using DevTask.Application.DTOs;
using DevTask.Application.DTOs.Column;
using DevTask.Application.Interfaces;

namespace DevTask.Application.Services
{
    public class ColumnService
    {
        private readonly IColumnRepository _columnRepository;
        private readonly IBoardRepository _boardRepository;

        public ColumnService(IColumnRepository columnRepository, IBoardRepository boardRepository)
        {
            _columnRepository = columnRepository;
            _boardRepository = boardRepository;
        }
        
        public async Task<ColumnDTO> Add(CreateColumnDTO createDTO)
        {
            var board = await _boardRepository.GetBoardByProjectIdAsync(createDTO.ProjectId);

            var newColumn = new Column
            {
                BoardId = board.Id,
                Name = createDTO.Name,
            };

            var createdColumn = await _columnRepository.AddAsync(newColumn);

            var responseDTO = new ColumnDTO
            {
                Id = createdColumn.Id,
                Name = createdColumn.Name
            };

            return responseDTO;
        }

        public async Task<ICollection<Column>> GetColumnsByProjectId(int projectId)
        {
            var board = await _boardRepository.GetBoardByProjectIdAsync(projectId);

            if (board == null)
            {
                return new List<Column>();
            }

            return await _columnRepository.GetColumnsByBoardIdAsync(board.Id);
        }
    }
}
