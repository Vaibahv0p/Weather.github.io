@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  min-height: 100vh;
  background: linear-gradient(to bottom, #4facfe, #00f2fe);
}

.container {
  max-width: 700px;
  width: 100%;
  padding: 30px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.search-section {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.input-wrapper {
  flex: 1;
  display: flex;
  align-items: center;
  background: #f5f5f5;
  border-radius: 8px;
  padding: 10px;
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.05);
}

.input-wrapper input {
  width: 100%;
  border: none;
  outline: none;
  background: none;
  padding: 8px 10px;
  font-size: 16px;
  color: #333;
}

.input-wrapper span {
  font-size: 24px;
  color: #555;
}

.location-button {
  background: #5372f0;
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 18px;
  border-radius: 8px;
  cursor: pointer;
}

.location-button:hover {
  background: #415ac0;
}

.no-results {
  display: none;
}

.weather-section {
  margin-top: 20px;
}

.current-weather {
  margin-bottom: 20px;
}

.current-weather .temperature {
  font-size: 48px;
  font-weight: bold;
  color: #333;
}

.current-weather .description {
  font-size: 20px;
  font-weight: 500;
  color: #666;
}

.hourly-weather .weather-list {
  display: flex;
  justify-content: space-around;
  list-style: none;
}

.hourly-weather .weather-item {
  text-align: center;
  color: #333;
}

.hourly-weather .weather-item .temperature {
  font-weight: bold;
  font-size: 16px;
}

.hourly-weather .weather-item img {
  width: 40px;
  height: 40px;
}

@media (max-width: 768px) {
  .container {
    padding: 20px;
  }

  .current-weather .temperature {
    font-size: 36px;
  }

  .hourly-weather .weather-item img {
    width: 30px;
    height: 30px;
  }
}
