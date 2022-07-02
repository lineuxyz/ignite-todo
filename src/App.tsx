import { Header } from './components/Header';

import styles from './App.module.css';
import './global.css';
import { NewTask } from './components/NewTask';
import { useState } from 'react';
import { ListTasks } from './components/ListTasks';

function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  function createTask(description: string) {
    const now = new Date();
    const task = {
      id: now.getTime(),
      description,
      isDone: false,
    };

    setTasks((state) => [...state, task]);
  }

  function deleteTask(id: number) {
    const tasksWithoutDeleteOne = tasks.filter((task) => task.id !== id);
    setTasks(tasksWithoutDeleteOne);
  }

  function markTask(id: number) {
    const tasksWithMarkedOne = tasks.map((task) =>
      task.id === id
        ? {
            id: task.id,
            description: task.description,
            isDone: !task.isDone,
          }
        : task
    );

    setTasks(tasksWithMarkedOne);
  }

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <NewTask onCreateTask={createTask} />
        <ListTasks
          tasks={tasks}
          onDeleteTask={deleteTask}
          onMarkTask={markTask}
        />
      </div>
    </div>
  );
}

export default App;
