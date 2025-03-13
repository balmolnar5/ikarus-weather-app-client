import "./App.css";
import { styled } from "baseui";
import WeatherDashboard from "./containers/WeatherDashboard";

const Centered = styled("div", {
  display: "flex",
  justifyContent: "center",
  padding: "2rem",
});

const Container = styled("div", {
  width: "100%",
  maxWidth: "800px",
});

function App() {
  return (
    <Centered>
      <Container>
        <WeatherDashboard />
      </Container>
    </Centered>
  );
}

export default App;
