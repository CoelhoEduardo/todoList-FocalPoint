import { Header } from "@/components/Header/Header";
import { TaskList } from "@/components/TaskList/TaskList";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <TaskList />
      </main>
    </div>
  );
}
