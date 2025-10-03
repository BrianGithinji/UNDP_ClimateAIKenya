import { AlertTriangle, CloudRain, Sun, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Alert, AlertDescription } from "./ui/alert";
import { Badge } from "./ui/badge";
import { RiskAlert } from "../data/counties";

interface AlertsPanelProps {
  alerts: RiskAlert[];
}

export function AlertsPanel({ alerts }: AlertsPanelProps) {
  const getAlertIcon = (type: RiskAlert["type"]) => {
    switch (type) {
      case "drought":
        return <Sun className="h-4 w-4" />;
      case "flood":
        return <CloudRain className="h-4 w-4" />;
      default:
        return <AlertTriangle className="h-4 w-4" />;
    }
  };

  const getAlertColor = (severity: RiskAlert["severity"]) => {
    switch (severity) {
      case "high":
        return "destructive";
      case "medium":
        return "default";
      case "low":
        return "secondary";
      default:
        return "default";
    }
  };

  if (alerts.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            Climate Alerts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-gray-500">
            <CheckCircle className="h-12 w-12 mx-auto mb-3 text-green-500" />
            <p>No active climate alerts for this region</p>
            <p className="text-sm mt-1">Conditions are currently stable</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-red-600" />
          Climate Alerts ({alerts.length})
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {alerts.map((alert, index) => (
          <Alert key={index} className="border-l-4 border-l-red-500">
            <div className="flex items-start gap-3">
              {getAlertIcon(alert.type)}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="capitalize">{alert.type.replace('_', ' ')}</span>
                  <Badge variant={getAlertColor(alert.severity)}>
                    {alert.severity.toUpperCase()}
                  </Badge>
                </div>
                <AlertDescription className="mb-3">
                  {alert.description}
                </AlertDescription>
                <div className="bg-gray-50 rounded-lg p-3">
                  <h4 className="text-sm mb-2">Recommended Actions:</h4>
                  <ul className="text-sm space-y-1">
                    {alert.actionItems.map((action, actionIndex) => (
                      <li key={actionIndex} className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        {action}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Alert>
        ))}
      </CardContent>
    </Card>
  );
}