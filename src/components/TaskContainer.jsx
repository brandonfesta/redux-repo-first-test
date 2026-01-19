import { setCategoryFilter } from "../features/filters/filtersSlice";
import TaskCounter from "./TaskCounter";
import Tasks from "./Tasks";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { selectFilteredTasks } from "../features/selector";

export default function TaskContainer() {
  const tasks = useSelector((state) => state.tasks)
  
  const filteredTasks = useSelector(selectFilteredTasks)

  useEffect(() => {
    // salvo i tasks in localStorage
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  let taskAmount = filteredTasks.length;

  return (
    <section>
      <TaskCounter amount={taskAmount} />
      <Tasks tasksArray={filteredTasks}/>
    </section>
  );
}
