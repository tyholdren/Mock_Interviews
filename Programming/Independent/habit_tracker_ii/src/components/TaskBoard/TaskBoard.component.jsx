import { useState, useEffect } from 'react';
import { Task } from '../Task/Task.component.jsx';

export const TaskBoard = () => {
  const [allTasks, setAllTasks] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [activeView, setActiveView] = useState('allTasks');
  const [renderFilteredTasks, setRenderFilterTasks] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1/todos')
      .then(response => response.json())
      .then(data => setAllTasks(data));
  });

  const onSearchChange = event => {
    setRenderFilterTasks(true);
    const searchField = event.target.value.toLowerCase();
    setSearchField(searchField);
  };

  const showAllTasks = () => {
    setSearchField('');
    setActiveView('allTasks');
  };

  const showCompletedTasks = () => {
    setSearchField('');
    setActiveView('completedTasks');
  };

  const showUncompletedTasks = () => {
    setSearchField('');
    setActiveView('uncompletedTasks');
  };

  const completedTasks = allTasks.filter(task => task.completed === true);
  const uncompletedTasks = allTasks.filter(task => task.completed === false);

  const activeViewConfig = {
    allTasks,
    completedTasks,
    uncompletedTasks,
  };

  const renderTasks = activeViewConfig[activeView];

  const filteredTasks = renderTasks.filter(task =>
    task.title.toLowerCase().includes(searchField)
  );

  return (
    <div>
      <input
        type="search"
        placeholder="search for task"
        onChange={onSearchChange}
      />
      <button onClick={() => showAllTasks()}>Show All Tasks</button>
      <button onClick={() => showCompletedTasks()}>Show Completed Tasks</button>
      <button onClick={() => showUncompletedTasks()}>
        Show Uncompleted Tasks
      </button>
      <div className="task-board-container">
        {renderFilteredTasks
          ? filteredTasks.map(task => {
              return <Task key={task.id} task={task} />;
            })
          : renderTasks.map(task => {
              return <Task key={task.id} task={task} />;
            })}
      </div>
    </div>
  );
};
