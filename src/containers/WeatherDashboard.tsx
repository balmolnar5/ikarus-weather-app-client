import React, { useEffect } from "react";
import { HeadingLarge, HeadingSmall } from "baseui/typography";

import LocationSearch from "../components/weather/LocationSearch";
import WeatherCard from "../components/weather/WeatherCard";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchWeather } from "../redux/weather/weatherSlice";
import { styled } from "baseui";

const Container = styled("div", () => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: "25rem",
}));

const WeatherDashboard: React.FC = () => {
  const dispatch = useAppDispatch();
  const { currentWeatherResponse, loading } = useAppSelector((state) => state.weather);

  useEffect(() => {
    dispatch(fetchWeather("Vienna"));
  }, [dispatch]);

  const handleSearch = (location: string) => {
    dispatch(fetchWeather(location));
  };

  return (
    <Container>
      <HeadingLarge>Weather App</HeadingLarge>

      <LocationSearch onSearch={handleSearch} isLoading={loading} />

      {currentWeatherResponse && (
        <>
          <HeadingSmall>Current Weather</HeadingSmall>
          <WeatherCard currentWeatherResponse={currentWeatherResponse} />
        </>
      )}
    </Container>
  );
};

export default WeatherDashboard;
