
public class Board
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public int ProjectId { get; set; }
    public ICollection<Column> Columns { get; set; } = new List<Column>();
}
