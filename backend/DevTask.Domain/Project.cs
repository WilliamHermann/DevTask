
public class Project
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public string Description { get; set; } = "";
    public DateTime CreatedDate { get; set; }

    public ICollection<Board> Boards { get; set; } = new List<Board>();
}
