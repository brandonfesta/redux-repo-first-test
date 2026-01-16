import { useDispatch } from "react-redux";

export default function TextFilter() {
  const dispatch = useDispatch()
  
  return (
    <input
      type="text"
      className="border border-gray-400 p-2 my-2 rounded-md"
      value={textFilter}

      onChange={(event) => {
        setTextFilter(event.target.value);
      }}
    />
  );
}
