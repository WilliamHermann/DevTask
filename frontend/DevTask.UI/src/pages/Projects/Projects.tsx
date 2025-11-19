import { useEffect, useState } from "react";
import api from '../../services/api';
import Button from "../../components/Button";
import { Modal } from "../../components/NewProjectModal";
import { Link } from "react-router-dom";
import * as S from './Projects.styles'

interface IProject {
  id: number;
  name: string;
  description: string;
}

export default function Projects() {

  const [projects, setProjects] = useState<IProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);
  const [projectName, setProjectName] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await api.get('/projects');
        setProjects(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
        alert("Error fetching projects");

        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const renderContent = () => {
    if (loading) {
      return <p>Loading...</p>;
    }

    if (projects.length === 0) {
      return <p>No projects found.</p>;
    }

    
return (
  <>
    {projects.map((project) => (
      <Link 
        key={project.id} 
        to={`/user/project/${project.id}`} 
      >
        <S.ProjectCard>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </S.ProjectCard>
      </Link>
    ))}
  </>
);
  };

  const handleSave = async () => {
    if (!projectName.trim()) {
      alert("Type a name for the project!");
      return;
    }

    try {
      const response = await api.post('/projects', {
        name: projectName,
      });

      setModalOpen(false);
      setProjectName("");
    } catch (error) {
      console.error("Error creating a project:", error);
      alert("Not possible to create a project.");
    }
  }

  return (
    <S.Container>
      <h2>Projects</h2>
      <Button onClick={() => setModalOpen(true)}>New Project</Button>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h2>New Project</h2>
        <S.Input
          type="text"
          placeholder="Project name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
        <div style={{ marginTop: "1rem", display: "flex", gap: "0.5rem" }}>
          <Button onClick={handleSave}>Save</Button>
          <Button variant="secondary" onClick={() => setModalOpen(false)}>
            Cancel
          </Button>
        </div>
      </Modal>
      <S.ProjectListContainer>
        {renderContent()}
      </S.ProjectListContainer>
    </S.Container>
  );
}
