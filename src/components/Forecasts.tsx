import { Cloud, Sun, CloudRain, Thermometer, Droplets, Wind } from "lucide-react";

export function Forecasts() {
  const forecastData = [
    { date: "Today", temp: "28°C", condition: "Partly Cloudy", rain: "20%", humidity: "65%", wind: "12 km/h" },
    { date: "Tomorrow", temp: "30°C", condition: "Sunny", rain: "5%", humidity: "58%", wind: "8 km/h" },
    { date: "Wed", temp: "26°C", condition: "Light Rain", rain: "80%", humidity: "78%", wind: "15 km/h" },
    { date: "Thu", temp: "25°C", condition: "Cloudy", rain: "45%", humidity: "72%", wind: "10 km/h" },
    { date: "Fri", temp: "29°C", condition: "Sunny", rain: "10%", humidity: "60%", wind: "9 km/h" },
    { date: "Sat", temp: "31°C", condition: "Hot", rain: "0%", humidity: "55%", wind: "6 km/h" },
    { date: "Sun", temp: "27°C", condition: "Partly Cloudy", rain: "25%", humidity: "68%", wind: "11 km/h" }
  ];

  const getWeatherIcon = (condition: string) => {
    if (condition.includes("Rain")) return <CloudRain className="h-8 w-8 text-blue-500" />;
    if (condition.includes("Sunny") || condition.includes("Hot")) return <Sun className="h-8 w-8 text-yellow-500" />;
    return <Cloud className="h-8 w-8 text-gray-500" />;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl mb-4 text-gray-900">Weather Forecasts</h1>
          <p className="text-xl text-gray-600">7-day detailed weather forecast for Kenya</p>
        </div>

        {/* Extended Forecast Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {forecastData.map((day, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="text-center">
                <h3 className="text-lg mb-2">{day.date}</h3>
                <div className="flex justify-center mb-3">
                  {getWeatherIcon(day.condition)}
                </div>
                <p className="text-2xl mb-1">{day.temp}</p>
                <p className="text-sm text-gray-600 mb-4">{day.condition}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Droplets className="h-4 w-4 text-blue-500" />
                      <span>Rain</span>
                    </div>
                    <span>{day.rain}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Thermometer className="h-4 w-4 text-red-500" />
                      <span>Humidity</span>
                    </div>
                    <span>{day.humidity}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Wind className="h-4 w-4 text-gray-500" />
                      <span>Wind</span>
                    </div>
                    <span>{day.wind}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Monthly Outlook */}
        <div className="bg-white rounded-lg p-6 shadow-sm border mb-8">
          <h2 className="text-2xl mb-4">Monthly Outlook</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <h3 className="text-lg mb-2">Temperature</h3>
              <p className="text-3xl text-blue-600 mb-2">Above Normal</p>
              <p className="text-sm text-gray-600">Expected 2-3°C higher than average</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <h3 className="text-lg mb-2">Rainfall</h3>
              <p className="text-3xl text-green-600 mb-2">Normal</p>
              <p className="text-sm text-gray-600">Within seasonal averages</p>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <h3 className="text-lg mb-2">Drought Risk</h3>
              <p className="text-3xl text-orange-600 mb-2">Low</p>
              <p className="text-sm text-gray-600">Adequate water supply expected</p>
            </div>
          </div>
        </div>

        {/* Seasonal Forecast */}
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <h2 className="text-2xl mb-4">Seasonal Forecast</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg mb-3">March - May (Long Rains)</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Enhanced rainfall expected across most regions</li>
                <li>• Good conditions for crop planting</li>
                <li>• Potential flooding in low-lying areas</li>
                <li>• Cooler temperatures than average</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg mb-3">June - August (Dry Season)</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Below normal rainfall expected</li>
                <li>• Ideal for harvesting and drying crops</li>
                <li>• Water conservation recommended</li>
                <li>• Clear skies and moderate temperatures</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}