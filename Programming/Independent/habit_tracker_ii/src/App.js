import './App.css';
import { Navigation } from './components/Navigation/Navigation.component';
import { TaskBoard } from './components/TaskBoard/TaskBoard.component';

function App() {
  return (
    <div className="app-container">
      <div className="App">habit tracker</div>
      <Navigation className="navigation-container" />
      <TaskBoard />
    </div>
  );
}

export default App;
