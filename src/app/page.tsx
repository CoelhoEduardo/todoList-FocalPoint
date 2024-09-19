"use client"
import { Header } from "@/components/Header/Header";
import { TaskList } from "@/components/TaskList/TaskList";

export default function Home() {
  return (
    <div className="home-page">
      <Header />
      <TaskList />
    </div>
  );
}
