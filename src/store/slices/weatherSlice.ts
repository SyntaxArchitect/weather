import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OPENWEATHER_API_KEY } from "../../Api/apiKeys";
import axios from "axios";

interface WeatherState {
  loading: boolean;
  data: { [key: string]: any };
  error: string | null;
}

const initialState: WeatherState = {
  loading: false,
  data: {},
  error: null,
};

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (city: string, { rejectWithValue }) => {
    try {
      const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${OPENWEATHER_API_KEY}`;
      const response = await axios.get(API);
      return { city, data: response.data };
    } catch (error) {
      return rejectWithValue("City not found");
    }
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    removeCity: (state, action: PayloadAction<string>) => {
      delete state.data[action.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.data[action.payload.city] = action.payload.data;
        state.error = null;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { removeCity } = weatherSlice.actions;
export default weatherSlice.reducer;
