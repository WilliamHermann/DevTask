namespace DevTask.Application.Interfaces
{
    public interface IColumnRepository
    {
        Task<ICollection<Column>> GetColumnsByBoardIdAsync(int projectId);
        Task<Column> AddAsync(Column Column);
        Task UpdateAsync(Column Column);
        Task DeleteAsync(int id);
    }
}
