using DevTask.Application.Interfaces;
using DevTask.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace DevTask.Infrastructure.Repositories
{
    public class BoardRepository(AppDbContext context) : IBoardRepository
    {
        private readonly AppDbContext _context = context;

        public async Task<Board> GetBoardByIdAsync(int id)
        {
            return await _context.Boards.FirstAsync(x => x.Id == id);
        }

        public async Task<Board> GetBoardByProjectIdAsync(int projectId)
        {
            return await _context.Boards
                .AsNoTracking()
                .FirstAsync(x => x.ProjectId == projectId);
        }

        public async Task AddAsync(Board board)
        {
            _context.Boards.Add(board);
            _context.SaveChanges();
        }

        public async Task UpdateAsync(Board task)
        {
            _context.Update(task);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            _context.Remove(id);
            _context.SaveChanges();
        }
    }
}
