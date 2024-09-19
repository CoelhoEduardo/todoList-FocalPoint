import React, { useState } from "react";
import styles from "./TaskList.module.scss";

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

export const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Lavar as mãos", completed: false },
    { id: 2, title: "Fazer um bolo", completed: false },
    { id: 3, title: "Lavar a louça", completed: false },
    { id: 4, title: "Levar o lixo para fora", completed: true },
  ]);

  const handleComplete = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDelete = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className={styles.taskList}>
      <div className={styles.todayTasks}>
        <h2>Suas tarefas de hoje</h2>
        {tasks
          .filter((task) => !task.completed)
          .map((task) => (
            <div key={task.id} className={styles.task}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleComplete(task.id)}
              />
              <span>{task.title}</span>
              <button onClick={() => handleDelete(task.id)}>delete</button>
            </div>
          ))}
      </div>
    </div>
  );
};
