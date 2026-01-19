import { createSelector } from "@reduxjs/toolkit";

const selectTask = (state) => state.tasks
const selectFilter = (state) => state.filters

export const selectFilteredTasks = createSelector(
    [selectTask, selectFilter],
    (tasks, filters) => {
        return tasks
            .filter((task) => {
              // se filter corrisponde a "completati", ritorno i task con proprietà isCompleted impostata a true
              if (filters.categoryFilter === "completati") return task.isCompleted;
              // se filter corrisponde a "rimasti", ritorno i task con proprietà isCompleted impostata a false (uso l'operatore NOT (!))
              if (filters.categoryFilter === "rimasti") return !task.isCompleted;
              // se filter corrisponde a "tutti", allora ritorno true per ogni task dell'array
              if (filters.categoryFilter === "tutti") return true;
            })
            .filter((task) => {
              return task.name.toLowerCase().includes(filters.textFilter.toLowerCase());
            });
          
    }
)