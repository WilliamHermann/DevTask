import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProjectListContainer = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ProjectCard = styled.div`
  background-color: #2d2e34;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  border: 1px solid #444;

  h3 {
    margin: 0 0 0.5rem 0;
    color: #eee;
  }

  p {
    margin: 0;
    color: #ccc;
    font-size: 0.9rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.6rem;
  border-radius: 6px;
  border: 1px solid #444;
  background: #2c2c2c;
  color: white;
  margin-top: 0.5rem;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;