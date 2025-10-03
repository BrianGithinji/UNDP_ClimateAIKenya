import { Brain, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { UserRole } from "../data/counties";

interface AIInsightsProps {
  insights: string[];
  role: UserRole;
}

export function AIInsights({ insights, role }: AIInsightsProps) {
  const getRoleTitle = (role: UserRole) => {
    switch (role) {
      case "farmer":
        return "Agricultural Insights";
      case "msme":
        return "Business Intelligence";
      case "government":
        return "Policy Recommendations";
    }
  };

  const getRoleDescription = (role: UserRole) => {
    switch (role) {
      case "farmer":
        return "AI-powered recommendations for crop management and farming decisions";
      case "msme":
        return "Weather-driven business insights and supply chain intelligence";
      case "government":
        return "Data-driven policy insights for climate adaptation and risk management";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-purple-600" />
          {getRoleTitle(role)}
        </CardTitle>
        <p className="text-sm text-gray-600">{getRoleDescription(role)}</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {insights.map((insight, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
              <Lightbulb className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-purple-900">{insight}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-500 flex items-center gap-1">
            <Brain className="h-3 w-3" />
            Powered by satellite data analysis and machine learning
          </p>
        </div>
      </CardContent>
    </Card>
  );
}