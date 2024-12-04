import React, { useState } from 'react';
import TaskOne from './components/TaskOne';
import TaskTwo from './components/TaskTwo';

function App() {
  const [showTask, setShowTask] = useState(1); // State to toggle between TaskOne and TaskTwo

  return (
    <div>
      <h1>React Tasks</h1>
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setShowTask(1)}>Show Task 1</button>
        <button onClick={() => setShowTask(2)}>Show Task 2</button>
      </div>
      {showTask === 1 && <TaskOne />}
      {showTask === 2 && <TaskTwo />}
    </div>
  );
}

export default App;
