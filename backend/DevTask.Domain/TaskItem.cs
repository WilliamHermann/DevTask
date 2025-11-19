
public class TaskItem
{
    // TODO: Criar array de atividades, usuários, data limite(inicio e fim)
    public int Id { get; set; }
    public string Title { get; set; } = "";
    public string Description { get; set; } = "";
    public string Status { get; set; } = "";
    public DateTime CreatedDate { get; set; }
    public bool IsCompleted { get; set; }
}
