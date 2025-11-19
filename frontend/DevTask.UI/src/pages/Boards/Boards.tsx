import api from '../../services/api';
import { SearchIcon, PlusIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Column from "../../components/Column";
import ColumnSettingsPanel from "../../components/ColumnSettingsPanel";

import * as S from './Boards,styles'

interface NewListFormColumnProps {
  onAdd: (label: string) => void;
  onCancel: () => void;
}

const NewListFormColumn = ({ onAdd, onCancel }: NewListFormColumnProps) => {
  const [selectedLabel, setSelectedLabel] = useState("");

  const handleAdd = () => {
    if (selectedLabel) {
      onAdd(selectedLabel);
    }
  };

  return (
    <S.NewListFormContainer>
      <div>
        <h3 style={{ margin: 0 }}>New list</h3>
      </div>
      <div>
        <S.LabelSelect
          value={selectedLabel}
          onChange={(e) => setSelectedLabel(e.target.value)}
        >
          <option value="" disabled>
            Select a label
          </option>
          <option value="feature">Feature</option>
          <option value="hotfix">Hotfix</option>
          <option value="backend">Backend</option>
        </S.LabelSelect>
      </div>
      <S.FormActions>
        <S.AddButton onClick={handleAdd}>Add to board</S.AddButton>
        <S.CancelButton onClick={onCancel}>Cancel</S.CancelButton>
      </S.FormActions>
    </S.NewListFormContainer>
  );
};

interface IColumn {
  id: string;
  name: string;
  tasks: any[];
}

interface SelectedColumn {
  id: string;
  name: string;
}

export default function Boards() {
  const { projectId } = useParams();
  const [columns, setColumns] = useState<IColumn[]>([]);
  const [selectedColumnForSettings, setSelectedColumnForSettings] = useState<SelectedColumn | null>(null);

  useEffect(() => {
    if (!projectId) return;

    const getColumns = async () => {
      try {
        const response = await api.get(`/projects/${projectId}/columns`);
        setColumns(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
        alert("Error fetching projects")
      }
    };

    getColumns();  
  }, [projectId])

  const [isCreatingList, setIsCreatingList] = useState(false);

  const handleAddList = async (labelTitle: string) => {
    if (!projectId) {
      alert("Error: Project Id not found!");
      return;
    }

    const newColumnDto = {
      name: labelTitle,
      projectId: parseInt(projectId),
    };

    try {
      const response = await api.post('/columns', newColumnDto);
      
      const columnFromApi = response.data;

      const closedColumnIndex = columns.findIndex((col) => col.name === "Closed");

      let newColumnsList;

      if (closedColumnIndex !== -1) {
        newColumnsList = [
          ...columns.slice(0, closedColumnIndex),
          columnFromApi,
          ...columns.slice(closedColumnIndex),
        ];
      } else {
        newColumnsList = [...columns, columnFromApi];
      }
      
      setColumns(newColumnsList);
      setIsCreatingList(false);
      
    } catch (error) {
      console.error("Error creating column:", error);
      alert("Not possible to create a column.");
    }
  };

  const handleShowSettings = (columnId: string, columnName: string) => {
      setSelectedColumnForSettings({ id: columnId, name: columnName });
    };

    const handleCloseSettings = () => {
      setSelectedColumnForSettings(null);
    };

    const handleRemoveColumn = async () => {
      if (!selectedColumnForSettings) return;

      const columnIdToRemove = selectedColumnForSettings.id;

      try {
        await api.delete(`/columns/${columnIdToRemove}`);

        setColumns(prevColumns =>
          prevColumns.filter(col => col.id !== columnIdToRemove)
        );

        handleCloseSettings();
      } catch (error) {
        console.error("Error removing a column:", error);
        alert("Not possible to remove a column.");
      }
    };

  return (
      <S.BoardPageWrapper>
        <S.TopBar>
          <S.LeftGroup>
            <S.Dropdown>
              <option>Development</option>
              <option>Production</option>
            </S.Dropdown>
            <S.Search>
              <SearchIcon size={18} color="#777" />
              <input placeholder="Search..." />
            </S.Search>
          </S.LeftGroup>
        </S.TopBar>

        <S.BoardContent>
          {columns.map((col) => (
            <Column
              key={col.id}
              column={col}
              onShowSettingsRequest={handleShowSettings}
            />
          ))}

          {isCreatingList ? (
            <NewListFormColumn
              onAdd={handleAddList}
              onCancel={() => setIsCreatingList(false)}
            />
          ) : (
            <S.NewListButton onClick={() => setIsCreatingList(true)}>
              <PlusIcon size={16} /> New list
            </S.NewListButton>
          )}
        </S.BoardContent>

        {selectedColumnForSettings && (
          <ColumnSettingsPanel
            columnName={selectedColumnForSettings.name}
            onClose={handleCloseSettings}
            onRemove={handleRemoveColumn}
          />
        )}
      </S.BoardPageWrapper>
    );
};
