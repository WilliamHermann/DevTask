using DevTask.Application.Interfaces;
using DevTask.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace DevTask.Infrastructure.Repositories
{
    public class ColumnRepository : IColumnRepository
    {
        private AppDbContext _context;

        public ColumnRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<ICollection<Column>> GetColumnsByBoardIdAsync(int boardId)
        {
            return await _context.Columns.Where(x => x.BoardId == boardId).ToListAsync();
        }

        public async Task<Column> AddAsync(Column column)
        {
            _context.Add(column);
            await _context.SaveChangesAsync();

            return column;
        }

        public async Task DeleteAsync(int id)
        {
            throw new NotImplementedException();
        }

        public async Task UpdateAsync(Column column)
        {
            throw new NotImplementedException();
        }
    }
}
