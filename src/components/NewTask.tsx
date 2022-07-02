import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import styles from './NewTask.module.css';

interface NewTaskProps {
  onCreateTask: (task: string) => void;
}

export function NewTask({ onCreateTask }: NewTaskProps) {
  const [newTaskText, setNewTaskText] = useState('');

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    onCreateTask(newTaskText);
    setNewTaskText('');
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setNewTaskText(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }

  const isNewTaskTextIsEmpty = newTaskText.length === 0;

  return (
    <div className={styles.newTask}>
      <form action='submit' onSubmit={handleCreateNewTask}>
        <textarea
          name='task'
          placeholder='Adicione uma nova tarefa'
          value={newTaskText}
          onChange={handleNewTaskChange}
          onInvalid={handleNewTaskInvalid}
          required
        />
        <button type='submit' disabled={isNewTaskTextIsEmpty}>
          Criar <PlusCircle size={20} />
        </button>
      </form>
    </div>
  );
}
