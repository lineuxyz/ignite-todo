import styles from './ListTasks.module.css';
import { NoTasks } from './NoTasks';
import { Task } from './Task';

interface ListTasksProps {
  tasks: TaskProps[];
  onDeleteTask: (id: number) => void;
  onMarkTask: (id: number) => void;
}

export function ListTasks({ tasks, onDeleteTask, onMarkTask }: ListTasksProps) {
  const totalTasks = tasks.length;
  const totalTasksDone = tasks.reduce((acc, task) => {
    return task.isDone ? acc + 1 : acc;
  }, 0);

  return (
    <div className={styles.listTasks}>
      <div className={styles.headerListTasks}>
        <strong className={styles.tasksCreated}>
          Tarefas criadas{' '}
          <span className={styles.totalTasks}>{totalTasks}</span>
        </strong>
        <strong className={styles.tasksDone}>
          Concluídas{' '}
          <span className={styles.totalTasks}>
            {totalTasks > 0 ? `${totalTasksDone} de ${totalTasks}` : 0}
          </span>
        </strong>
      </div>

      {totalTasks > 0 ? (
        tasks.map((task) => {
          return (
            <Task
              key={task.id}
              {...task}
              onDeleteTask={onDeleteTask}
              onMarkTask={onMarkTask}
            />
          );
        })
      ) : (
        <NoTasks />
      )}
    </div>
  );
}
