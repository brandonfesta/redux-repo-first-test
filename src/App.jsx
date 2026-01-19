import Form from "./components/Form";
import Filters from "./components/Filters";
import TaskContainer from "./components/TaskContainer";
import TextFilter from "./components/TextFilter";
// import dummyTasks from "./data/tasks";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";
import Counter from "./lezione/Counter";

function App({ savedTasks }) {
  const count = useSelector(state => state.counter.value)
  // Inizializzo l'elenco di task con l'elenco di task presenti in localStorage, OPPURE con un array vuoto)

  return (
    <>
      {/* <Card>
        <h2>La mia Card</h2>
        <p>testo di prova</p>
      </Card> */}
      <h1 className="text-2xl mt-16 mb-4 text-center">I miei task: </h1>
      <div className="bg-white max-w-screen-sm mx-auto p-4">
        {/* <Card> */}
        {/* <div>count: {count}</div>
        <Counter></Counter> */}
        <Form/>
        {/* </Card> */}
        <Filters/>
        <TextFilter />
        <TaskContainer/>
      </div>
    </>
  );
}

export default App;
