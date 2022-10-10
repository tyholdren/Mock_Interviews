import './Task.css';

export const Task = ({ task }) => {
  return (
    <div className="task">
      <p>{task.title}</p>
      <p>{task.completed ? 'true' : 'false'}</p>
    </div>
  );
};
