import { Thermometer, CloudRain, Droplets, AlertTriangle } from "lucide-react";
import { CountyClimateInfo } from "../data/counties";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";

interface ClimateOverviewProps {
  data: CountyClimateInfo;
}

export function ClimateOverview({ data }: ClimateOverviewProps) {
  const getRiskColor = (risk: number) => {
    if (risk > 70) return "text-red-600";
    if (risk > 40) return "text-orange-500";
    return "text-green-600";
  };

  const getRiskLevel = (risk: number) => {
    if (risk > 70) return "High";
    if (risk > 40) return "Medium";
    return "Low";
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <Thermometer className="h-4 w-4 text-orange-500" />
            Temperature
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl">{data.currentTemp.toFixed(1)}°C</div>
          <p className="text-sm text-gray-600 mt-1">Current temperature</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <CloudRain className="h-4 w-4 text-blue-500" />
            Rainfall
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl">{data.rainfall7Day.toFixed(1)}mm</div>
          <p className="text-sm text-gray-600 mt-1">Past 7 days</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <Droplets className="h-4 w-4 text-green-500" />
            Soil Moisture
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl">{data.soilMoisture.toFixed(0)}%</div>
          <Progress value={data.soilMoisture} className="mt-2" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <AlertTriangle className="h-4 w-4 text-red-500" />
            Risk Assessment
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm">Drought</span>
              <span className={`text-sm ${getRiskColor(data.droughtRisk)}`}>
                {getRiskLevel(data.droughtRisk)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Flood</span>
              <span className={`text-sm ${getRiskColor(data.floodRisk)}`}>
                {getRiskLevel(data.floodRisk)}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}