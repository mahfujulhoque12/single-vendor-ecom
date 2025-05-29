import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  selectedCategories: string[];
  selectedBrand: string[];
  selectedFeatures: string[];
  selectedCondition: string;

  selectedRatings: number[]; // ✅ ADD THIS
  selectedPriceRange: [number, number]; // ✅ ADD THIS
}

const initialState: FilterState = {
  selectedCategories: [],
  selectedBrand: [],
  selectedFeatures: [],
  selectedCondition: "Any",
  selectedRatings: [],
  selectedPriceRange: [0, 10000], // ✅ ADD THIS
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSelectedCategories: (state, action: PayloadAction<string[]>) => {
      state.selectedCategories = action.payload;
    },
    setSelectedBrand: (state, action: PayloadAction<string[]>) => {
      state.selectedBrand = action.payload;
    },
    selectedFeatures: (state, action: PayloadAction<string[]>) => {
      state.selectedFeatures = action.payload;
    },
    setSelectedCondition: (state, action: PayloadAction<string>) => {
      state.selectedCondition = action.payload;
    },
    setSelectedRatings: (state, action: PayloadAction<number[]>) => {
      state.selectedRatings = action.payload;
    },
    setSelectedPriceRange(state, action: PayloadAction<[number, number]>) {
      state.selectedPriceRange = action.payload;
    },
  },
});

export const {
  setSelectedCategories,
  setSelectedBrand,
  selectedFeatures,
  setSelectedCondition,
  setSelectedRatings,
  setSelectedPriceRange,
} = filterSlice.actions;
export default filterSlice.reducer;
