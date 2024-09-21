"use client";

import React, { useState } from "react";
import styles from "./TaskList.module.scss";
import { Modal } from "../Modal/Modal";
import { TrashIcon } from "./TrashIcon";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Lavar as mãos", completed: false },
    { id: 2, title: "Fazer um bolo", completed: false },
    { id: 3, title: "Lavar a louça", completed: false },
    { id: 4, title: "Levar o lixo para fora", completed: true },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"add" | "delete">("add");
  const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null);

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const openModal = (type: "add" | "delete", taskId?: number) => {
    setModalType(type);
    setSelectedTaskId(taskId || null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTaskId(null);
  };

  const handleSubmit = (title: string) => {
    if (modalType === "add") {
      const newTask: Task = {
        id: Math.max(...tasks.map((t) => t.id)) + 1,
        title,
        completed: false,
      };
      setTasks([...tasks, newTask]);
    } else if (modalType === "delete" && selectedTaskId) {
      setTasks(tasks.filter((task) => task.id !== selectedTaskId));
    }
  };

  return (
    <div className={styles.taskPage}>
      <div className={styles.taskList}>
        <div className={styles.todayTasks}>
          <h2>Suas tarefas de hoje</h2>
          {tasks
            .filter((task) => !task.completed)
            .map((task) => (
              <div key={task.id} className={styles.task}>
                <div className={styles.taskContent}>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                  />
                  <span className={styles.taskTitle}>{task.title}</span>
                </div>
                <button
                  className={styles.deleteButton}
                  onClick={() => openModal("delete", task.id)}
                >
                  <TrashIcon />
                </button>
              </div>
            ))}
        </div>
        <div className={styles.completedTasks}>
          <h2>Tarefas finalizadas</h2>
          {tasks
            .filter((task) => task.completed)
            .map((task) => (
              <div key={task.id} className={styles.task}>
                <div className={styles.taskContent}>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                  />
                  <span className={styles.taskTitleComplete}>{task.title}</span>
                </div>
                <button
                  className={styles.deleteButton}
                  onClick={() => openModal("delete", task.id)}
                >
                  <TrashIcon />
                </button>
              </div>
            ))}
        </div>
      </div>
      <button className={styles.addTaskButton} onClick={() => openModal("add")}>
        Adicionar nova tarefa
      </button>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleSubmit}
        type={modalType}
      />
    </div>
  );
};
