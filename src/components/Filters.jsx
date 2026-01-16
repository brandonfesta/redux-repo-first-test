import { useDispatch } from "react-redux";
import { setCategoryFilter } from "../features/filters/filtersSlice";

export default function Filters() {
  const dispatch = useDispatch()
  function setFilter(newCategory){
    dispatch(setCategoryFilter(newCategory))
  }
  return (
    <div className="filters-container flex gap-2 items-center my-4">
      Filtra:
      <button onClick={() => setFilter("tutti")} className="btn">
        Tutti
      </button>
      <button onClick={() => setFilter("rimasti")} className="btn">
        Rimasti
      </button>
      <button onClick={() => setFilter("completati")} className="btn">
        Completati
      </button>
    </div>
  );
}
