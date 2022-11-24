import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setLoading } from "./uiSlice";
import { getDigimon } from "../api";
const initialState = {
  digimons: [],
  digimonsFiltered: [],
};

export const fetchDigimonWithDetails = createAsyncThunk(
  "data/fetchDigimonWithDetails",
  async (_, { dispatch }) => {
    //dispatch loader
    //fetch
    //dispatch del loader
    dispatch(setLoading(true));

    const sweetArray = await getDigimon();
    const sweeterArray = await Promise.all(sweetArray.map((sweetItem) => {
      return sweetItem;
    }));
    dispatch(setDigimons(sweeterArray));
    dispatch(setLoading(false));
  }
);

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setDigimons: (state, action) => {
      state.digimons = action.payload;
      state.digimonsFiltered = action.payload;
    },

    setFilter: (state, action) => {
      const digimonsFiltered = state.digimons.filter((digimon) =>
        digimon.name.includes(action.payload)
      );
      state.digimonsFiltered = digimonsFiltered;
    },
  },
});

export const { setDigimons, setFilter } = dataSlice.actions;

export default dataSlice.reducer;
