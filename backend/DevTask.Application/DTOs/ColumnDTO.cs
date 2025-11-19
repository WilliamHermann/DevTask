namespace DevTask.Application.DTOs
{
    public class ColumnDTO
    {
        public int Id { get; set; }
        public string Name { get; set; } = "";
        public int ProjectId {  get; set; }
        public ICollection<TaskItem> Tasks { get; set; } = new List<TaskItem>();
    }
}
