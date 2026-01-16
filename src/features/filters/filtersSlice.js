import { createSlice } from '@reduxjs/toolkit'

let initialFIlters = {
  categoryFilter: "tutti",
  textFilter: ""
}

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialFIlters,
  reducers: {
    setCategoryFilter: (state, action) => {
      state.categoryFilter = action.payload;
    },
    setTextFilter: (state, action) => {
      state.textFilter = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setCategoryFilter, setTextFilter } = filtersSlice.actions

export default filtersSlice.reducer