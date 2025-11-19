using DevTask.Application.Interfaces;

namespace DevTask.Application.Services
{
    public class BoardService
    {
        private IBoardRepository _boardRepository;
        public BoardService(IBoardRepository boardRepository) => _boardRepository = boardRepository;


    }
}
