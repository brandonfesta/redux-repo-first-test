import { useDispatch, useSelector } from "react-redux";
import { setCategoryFilter } from "../features/filters/filtersSlice";

export default function Filters() {
  const categoryFilter = useSelector(state => state.filters.textFilter)
  const dispatch = useDispatch()
  function setFilter(newCategory){
    dispatch(setCategoryFilter(newCategory))
  }
  return (
    <div className="filters-container flex gap-2 items-center my-4">
      Filtra:
      <button onClick={() => setFilter("tutti")} className="bg-sky-300 hover:bg-sky-700 px-4 py-2">
        Tutti
      </button>
      <button onClick={() => setFilter("rimasti")} className="bg-sky-300 hover:bg-sky-700 px-4 py-2">
        Rimasti
      </button>
      <button onClick={() => setFilter("completati")} className="bg-sky-300 hover:bg-sky-700 px-4 py-2">
        Completati
      </button>
    </div>
  );
}
