import React from "react";
import { HeadingSmall, ParagraphMedium } from "baseui/typography";
import { Button } from "baseui/button";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import { CurrentWeatherResponse } from "../../services/types";
import SimpleCard from "../common/SimpleCard";

interface WeatherCardProps {
  currentWeatherResponse: CurrentWeatherResponse;
  onSaveLocation?: () => void;
  isSaved?: boolean;
}

const WeatherCard: React.FC<WeatherCardProps> = ({
  currentWeatherResponse,
  onSaveLocation,
  isSaved,
}) => {
  console.log(currentWeatherResponse);

  const title = (
    <HeadingSmall margin={0}>
      {currentWeatherResponse.location.name}, {currentWeatherResponse.location.country}
    </HeadingSmall>
  );

  const footer = onSaveLocation ? (
    <Button onClick={onSaveLocation} disabled={isSaved}>
      {isSaved ? "Location Saved" : "Save Location"}
    </Button>
  ) : null;

  return (
    <SimpleCard title={title} footer={footer}>
      <FlexGrid flexGridColumnCount={2}>
        <FlexGridItem>
          <img
            src={currentWeatherResponse.current_weather.condition.icon}
            alt={currentWeatherResponse.current_weather.condition.text}
            width="64"
            height="64"
          />
          <ParagraphMedium>
            {currentWeatherResponse.current_weather.condition.text}
          </ParagraphMedium>
        </FlexGridItem>

        <FlexGridItem>
          <ParagraphMedium>
            Temperature: {currentWeatherResponse.current_weather.temp_c}°C
          </ParagraphMedium>
          <ParagraphMedium>
            Feels like: {currentWeatherResponse.current_weather.feelslike_c}°C
          </ParagraphMedium>
          <ParagraphMedium>
            Humidity: {currentWeatherResponse.current_weather.humidity}%
          </ParagraphMedium>
          <ParagraphMedium>
            Wind: {currentWeatherResponse.current_weather.wind_speed_kph} km/h
          </ParagraphMedium>
        </FlexGridItem>
      </FlexGrid>
    </SimpleCard>
  );
};

export default WeatherCard;
