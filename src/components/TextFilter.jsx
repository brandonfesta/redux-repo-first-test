import { useDispatch, useSelector } from "react-redux";
import { setTextFilter } from "../features/filters/filtersSlice";

export default function TextFilter() {
  const dispatch = useDispatch()
  const textFilter = useSelector(state => state.filters.TextFilter)
  
  function handleTextChange(text){
    dispatch(setTextFilter(text))
  }
  
  return (
    <input
      type="text"
      className="border border-gray-400 p-2 my-2 rounded-md"
      value={textFilter}

      onChange={(event) => {
        handleTextChange(event.target.value);
      }}
    />
  );
}
