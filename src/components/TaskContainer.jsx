import TaskCounter from "./TaskCounter";
import Tasks from "./Tasks";
import { useSelector } from "react-redux";

export default function TaskContainer() {
  const tasks = useSelector((state) => state.tasks)

  let taskAmount = tasks.length;

  return (
    <section>
      <TaskCounter amount={taskAmount} />
      <Tasks tasksArray={tasks}/>
    </section>
  );
}
