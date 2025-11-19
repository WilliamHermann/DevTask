import { Routes, Route } from 'react-router-dom';
import './App.css'

import { DashboardLayout } from './layouts/DashBoardLayout';
import Home from './pages/Home';
import Projects from './pages/Projects/Projects';
import { GlobalStyle } from "./styles/global";
import Boards from './pages/Boards';
import ProjectLayout from './layouts/ProjectLayout';

function App() {

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='dashboard' element={<DashboardLayout />}>
          <Route path='home' element={<Home />} />
          <Route path='projects' element={<Projects />} />
        </Route>
        <Route path='user/project/:projectId' element={<ProjectLayout/>}>
          <Route path='boards' element={<Boards/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
