import { useRef } from "react";
import Button from "./ui/Button";
import { addTask } from "../features/tasks/tasksSlice";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";

export default function Form() {
  // uso un ref per accedere al testo scritto dall'utente nell'input
  const inputRef = useRef();

  const dispatch = useDispatch()

  // aggiungo un task
  function handleAddTask() {
    // addTask arriva come prop e serve ad aggiornare l'elenco dei task
    dispatch(addTask({
      id: nanoid(),
      name: inputRef.current.value,
      isCompleted: false,
    }))
  }
  return (
    <>
      <h2>Che cosa devi fare?</h2>
      <input
        type="text"
        ref={inputRef}
        className="border border-gray-400 p-2 mt-2 me-2 rounded-md"
      />
      <Button onClick={handleAddTask}>
        Aggiungi
        {/* <span className="font-bold"> nuovo task</span> */}
      </Button>
    </>
  );
}
