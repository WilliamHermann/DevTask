import { useState } from 'react';
import * as S from './NewTaskForm.styles';

// TODO: implement functionality

interface NewTaskFormProps {
  onCancel: () => void;
  onCreate: (title: string) => void;
}
export function NewTaskForm({ onCancel, onCreate }: NewTaskFormProps) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onCreate(title);
      setTitle('');
    }
  };

  return (
    <S.FormContainer>
      <form onSubmit={handleSubmit}>
        <p style={{ margin: '0 0 0.5rem 0', color: '#e5e7eb', fontSize: '0.9rem' }}>Title</p>
        <S.TitleInput
          type="text"
          placeholder="Enter a title for this issue..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <S.FormActions style={{ marginTop: '0.75rem' }}>
          <S.CreateButton type="submit">Create issue</S.CreateButton>
          <S.CancelButton type="button" onClick={onCancel}>Cancel</S.CancelButton>
        </S.FormActions>
      </form>
    </S.FormContainer>
  );
}

export default NewTaskForm;