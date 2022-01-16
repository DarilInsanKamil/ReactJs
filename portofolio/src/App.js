import logo from './logo.svg';
import './App.css';
import { Navigate } from './component/header';
import { HomeScreen } from './page/HomeScreen';
import { ProjectScreen } from './page/ProjectScreen';

function App() {
  return (
    <div className="App">
      <Navigate />
      <HomeScreen />
      <ProjectScreen />
    </div>
  );
}

export default App;
