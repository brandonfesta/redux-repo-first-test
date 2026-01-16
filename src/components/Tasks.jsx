import { useDispatch } from "react-redux";
import Task from "./Task";
import { deleteTask, updateTaskCompletion } from "../features/tasks/tasksSlice";

export default function Tasks({tasksArray}) {
  const dispatch = useDispatch()

  function handleDeleteTask(taskId) {
    dispatch(
      deleteTask({id: taskId})
    )
  }
  function handleUpdateTaskCompletion(taskId){
    dispatch(
      updateTaskCompletion({id: taskId})
    )
  }
  // faccio un ciclo nell'array di task e creo il componente
  const taskList = tasksArray.map((task) => (
    <Task
      taskDetails={task}
      key={task.id}
      deleteTask={handleDeleteTask}
      updateTaskCompletion={handleUpdateTaskCompletion}
    />
  ));

  return <ul>{taskList}</ul>;
}
