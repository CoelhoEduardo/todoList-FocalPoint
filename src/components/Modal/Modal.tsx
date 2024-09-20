import React, { useState } from "react";
import styles from "./Modal.module.scss";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (title: string) => void;
  type: "add" | "delete";
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  type,
}) => {
  const [title, setTitle] = useState("");

  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>{type === "add" ? "Nova tarefa" : "Deletar tarefa"}</h2>
        {type === "add" && (
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Digite o título da tarefa"
          />
        )}
        {type === "delete" && (
          <p>Tem certeza que você deseja deletar essa tarefa?</p>
        )}
        <div className={styles.actions}>
          <button className={styles.secondary} onClick={onClose}>
            Cancelar
          </button>
          <button
            className={type === "add" ? styles.addButton : styles.deleteButton}
            onClick={() => {
              if (type === "add") {
                onSubmit(title);
                setTitle("");
              } else {
                onSubmit("");
              }
              onClose();
            }}
          >
            {type === "add" ? "Adicionar" : "Deletar"}
          </button>
        </div>
      </div>
    </div>
  );
};
