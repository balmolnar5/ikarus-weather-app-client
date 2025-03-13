import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { weatherService } from "../../services/weatherService";
import { CurrentWeather } from "../../services/types";

interface WeatherState {
  currentWeather: CurrentWeather | null;
  savedLocations: string[];
  loading: boolean;
  error: string | null;
}

const initialState: WeatherState = {
  currentWeather: null,
  savedLocations: [],
  loading: false,
  error: null,
};

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (location: string, { rejectWithValue }) => {
    try {
      return await weatherService.getCurrentWeather(location);
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : "Failed to fetch weather data",
      );
    }
  },
);

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.currentWeather = action.payload.current;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default weatherSlice.reducer;
