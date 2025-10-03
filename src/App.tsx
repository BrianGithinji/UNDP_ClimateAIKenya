import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { CountySelector } from "./components/CountySelector";
import { UserRoleSelector } from "./components/UserRoleSelector";
import { ClimateOverview } from "./components/ClimateOverview";
import { WeatherChart } from "./components/WeatherChart";
import { AlertsPanel } from "./components/AlertsPanel";
import { AIInsights } from "./components/AIInsights";
import { Resources } from "./components/Resources";
import { Forecasts } from "./components/Forecasts";
import { Alerts } from "./components/Alerts";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { generateMockClimateData, UserRole } from "./data/counties";
import type { CountyClimateInfo } from "./data/counties";

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("dashboard");
  const [selectedCounty, setSelectedCounty] = useState<string>("Nairobi");
  const [selectedRole, setSelectedRole] = useState<UserRole>("farmer");
  const [climateData, setClimateData] = useState<CountyClimateInfo | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (selectedCounty) {
      setIsLoading(true);
      // Simulate API call delay
      setTimeout(() => {
        const data = generateMockClimateData(selectedCounty);
        setClimateData(data);
        setIsLoading(false);
      }, 500);
    }
  }, [selectedCounty]);

  if (!climateData) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  if (currentPage === "resources") {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header onNavigate={setCurrentPage} />
        <Resources />
      </div>
    );
  }

  if (currentPage === "forecasts") {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header onNavigate={setCurrentPage} />
        <Forecasts />
      </div>
    );
  }

  if (currentPage === "alerts") {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header onNavigate={setCurrentPage} />
        <Alerts />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onNavigate={setCurrentPage} />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1694872581803-b279e7a63f7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZW55YSUyMGxhbmRzY2FwZSUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc1OTQ3NDY5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Kenya landscape"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl mb-4">Climate Intelligence for Kenya</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              AI-powered hyper-local climate forecasting to help farmers, businesses, and governments make informed decisions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <CountySelector 
              selectedCounty={selectedCounty}
              onCountyChange={setSelectedCounty}
            />
            <UserRoleSelector 
              selectedRole={selectedRole}
              onRoleChange={setSelectedRole}
            />
          </div>
        </div>
      </div>

      {/* Main Dashboard */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <span className="ml-3 text-gray-600">Loading climate data for {selectedCounty}...</span>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Current Conditions Overview */}
            <div>
              <h2 className="text-2xl mb-6">Current Conditions - {selectedCounty}</h2>
              <ClimateOverview data={climateData} />
            </div>

            {/* Weather Charts */}
            <div>
              <h2 className="text-2xl mb-6">7-Day Forecast</h2>
              <WeatherChart data={climateData.weeklyForecast} />
            </div>

            {/* Alerts and AI Insights */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <AlertsPanel alerts={climateData.alerts} />
              <AIInsights 
                insights={climateData.aiInsights[selectedRole]}
                role={selectedRole}
              />
            </div>

            {/* Additional Info */}
            <div className="bg-white rounded-lg p-6 border">
              <h3 className="text-lg mb-4">About Our Data</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600">
                <div>
                  <h4 className="mb-2">Satellite Data</h4>
                  <p>Real-time weather monitoring from multiple satellite sources including MODIS, Landsat, and Sentinel</p>
                </div>
                <div>
                  <h4 className="mb-2">AI Analysis</h4>
                  <p>Machine learning models trained on historical climate patterns and local agricultural data</p>
                </div>
                <div>
                  <h4 className="mb-2">Local Validation</h4>
                  <p>Ground-truth data from weather stations and community reporting networks across Kenya</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-300 mb-2">
              ClimateAI Kenya - Empowering climate-resilient decision making
            </p>
            <p className="text-sm text-gray-400">
              Serving all 47 counties with hyper-local climate intelligence
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}