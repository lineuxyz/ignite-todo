import styles from './NoTasks.module.css';

import clipboardImg from '../assets/clipboard.png';

export function NoTasks() {
  return (
    <div className={styles.noTasks}>
      <img src={clipboardImg} />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
