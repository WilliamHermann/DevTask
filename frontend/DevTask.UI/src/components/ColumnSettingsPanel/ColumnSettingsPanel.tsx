import * as S from './ColumnSettingsPanel.styles'
import { X } from 'lucide-react';

interface ColumnSettingsPanelProps {
  columnName: string;
  onClose: () => void;
  onRemove: () => void;
}

export default function ColumnSettingsPanel({ columnName, onClose, onRemove }: ColumnSettingsPanelProps) {
  return (
    <S.PanelOverlay onClick={onClose}>
      <S.PanelContainer onClick={(e) => e.stopPropagation()}>
        
        <S.PanelHeader>
          <h3>List settings</h3>
          <S.CloseButton onClick={onClose}>
            <X size={20} />
          </S.CloseButton>
        </S.PanelHeader>

        <S.RemoveButton onClick={onRemove}>
          Remove list
        </S.RemoveButton>

        <S.LabelSection>
          <h4>Label</h4>
          <span>{columnName}</span> 
        </S.LabelSection>
      
      </S.PanelContainer>
    </S.PanelOverlay>
  );
}
