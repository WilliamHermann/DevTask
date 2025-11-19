namespace DevTask.Application.Interfaces
{
    public interface IBoardRepository
    {
        Task<Board> GetBoardByIdAsync(int id);
        Task<Board> GetBoardByProjectIdAsync(int projectId);
        Task AddAsync(Board board);
        Task UpdateAsync(Board task);
        Task DeleteAsync(int id);
    }
}
