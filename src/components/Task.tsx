import { Trash } from 'phosphor-react';
import styles from './Task.module.css';

type TaskComponentProps =  TaskProps & {
  onDeleteTask: (id: number) => void;
  onMarkTask: (id: number) => void;
}

export function Task({
  id,
  description,
  isDone,
  onDeleteTask,
  onMarkTask,
}: TaskComponentProps) {
  function handleDeleteTask() {
    onDeleteTask(id);
  }
  function handleMarkTask() {
    onMarkTask(id);
  }

  return (
    <div className={styles.task}>
      <label className={styles.checkboxDone}>
        <input type='checkbox' checked={isDone} onChange={handleMarkTask} />
        <span className={styles.checkmark}></span>
      </label>
      <p className={isDone ? styles.taskDone : ''}>{description}</p>
      <button onClick={handleDeleteTask} title='Deletar tarefa'>
        <Trash size={24} />
      </button>
    </div>
  );
}
