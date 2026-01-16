import { createSlice } from '@reduxjs/toolkit'

let intitialTasks = JSON.parse(localStorage.getItem("tasks")) || [];
export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: intitialTasks,
  reducers: {
    addTask: (state, action) => {
        const newTask = {
            id: action.payload.id,
            name: action.payload.name,
            isCompleted: false
        }
        state.push(newTask)
    },
    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload.id)
    },
    updateTaskCompletion: (state, action) => {
      return state.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      });
    }
  },
})

// Action creators are generated for each case reducer function
export const { addTask, deleteTask, updateTaskCompletion } = tasksSlice.actions

export default tasksSlice.reducer