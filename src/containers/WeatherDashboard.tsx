import React, { useEffect } from "react";
import { HeadingLarge, HeadingMedium } from "baseui/typography";
import { Spinner } from "baseui/spinner";

// import LocationSearch from "../components/weather/LocationSearch";
import WeatherCard from "../components/weather/WeatherCard";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchWeather } from "../redux/weather/weatherSlice";

const WeatherDashboard: React.FC = () => {
  const dispatch = useAppDispatch();
  const { currentWeatherResponse, savedLocations, loading, error } = useAppSelector(
    (state) => state.weather,
  );

  useEffect(() => {
    dispatch(fetchWeather("Vienna"));
  }, [dispatch]);

  // const handleSearch = (location: string) => {
  //   dispatch(fetchWeather(location));
  // };

  return (
    <div>
      <HeadingLarge>Weather App</HeadingLarge>

      {/* <LocationSearch onSearch={handleSearch} isLoading={loading} /> */}

      {loading && <Spinner />}

      {currentWeatherResponse && (
        <>
          <HeadingMedium>Current Weather</HeadingMedium>
          <WeatherCard currentWeatherResponse={currentWeatherResponse} />
        </>
      )}
    </div>
  );
};

export default WeatherDashboard;
