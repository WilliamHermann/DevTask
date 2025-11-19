import { useState } from 'react';
import { Plus, Settings } from 'lucide-react';
import { NewTaskForm } from '../NewTaskForm/NewTaskForm'
import * as S from './Column.styles'

interface ITask {
  id: string;
  content: string;
}

interface IColumn {
  id: string;
  name: string;
  tasks: ITask[];
}

interface ColumnProps {
  column: IColumn;
  onShowSettingsRequest: (columnId: string, columnName: string) => void;
}

export default function Column({ column, onShowSettingsRequest }: ColumnProps) {
  const { id, name, tasks } = column;
  const [isCreatingIssue, setIsCreatingIssue] = useState(false);

  const handleAddIssueClick = () => {
    setIsCreatingIssue(true);
  };

  const handleCancelIssue = () => {
    setIsCreatingIssue(false);
  };

  const handleCreateIssue = () => {
    // TODO
    setIsCreatingIssue(false);

  };

  const handleShowSettings = () => {
    onShowSettingsRequest(id, name);
  };

  return (
    <S.ColumnContainer>
      <S.HeaderWrapper>
        <h2>{name}</h2>
        <S.ActionsWrapper>
          <S.IconButton onClick={handleAddIssueClick} aria-label="Add new issue">
            <Plus size={16} />
          </S.IconButton>
          <S.IconButton onClick={handleShowSettings} aria-label="Edit configurations of list">
            <Settings size={16} />
          </S.IconButton>
        </S.ActionsWrapper>
      </S.HeaderWrapper>

      <S.TaskList>
        {isCreatingIssue && (
          <NewTaskForm
            onCancel={handleCancelIssue}
            onCreate={handleCreateIssue}
          />
        )}
        {tasks.map((task) => (
          <S.Card key={task.id}>{task.content}</S.Card>
        ))}
      </S.TaskList>
    </S.ColumnContainer>
  );
}