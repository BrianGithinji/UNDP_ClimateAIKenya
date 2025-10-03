import { AlertTriangle, Info, CheckCircle, XCircle, Clock } from "lucide-react";

export function Alerts() {
  const alerts = [
    {
      id: 1,
      type: "warning",
      title: "Heavy Rainfall Warning",
      message: "Heavy rains expected in Central Kenya. Potential flooding in low-lying areas.",
      county: "Kiambu, Murang'a, Nyeri",
      time: "2 hours ago",
      severity: "High"
    },
    {
      id: 2,
      type: "info",
      title: "Drought Advisory",
      message: "Below normal rainfall recorded. Water conservation measures recommended.",
      county: "Turkana, Marsabit",
      time: "6 hours ago",
      severity: "Medium"
    },
    {
      id: 3,
      type: "success",
      title: "Favorable Planting Conditions",
      message: "Optimal soil moisture and temperature for maize planting detected.",
      county: "Trans Nzoia, Uasin Gishu",
      time: "1 day ago",
      severity: "Low"
    },
    {
      id: 4,
      type: "error",
      title: "Extreme Heat Warning",
      message: "Temperatures above 35°C expected. Heat stress risk for livestock and crops.",
      county: "Garissa, Wajir, Mandera",
      time: "3 hours ago",
      severity: "Critical"
    }
  ];

  const getAlertIcon = (type: string) => {
    switch (type) {
      case "warning": return <AlertTriangle className="h-6 w-6 text-yellow-500" />;
      case "error": return <XCircle className="h-6 w-6 text-red-500" />;
      case "success": return <CheckCircle className="h-6 w-6 text-green-500" />;
      default: return <Info className="h-6 w-6 text-blue-500" />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Critical": return "bg-red-100 text-red-800 border-red-200";
      case "High": return "bg-orange-100 text-orange-800 border-orange-200";
      case "Medium": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default: return "bg-green-100 text-green-800 border-green-200";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl mb-4 text-gray-900">Climate Alerts</h1>
          <p className="text-xl text-gray-600">Real-time climate warnings and advisories for Kenya</p>
        </div>

        {/* Alert Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
            <XCircle className="h-8 w-8 text-red-500 mx-auto mb-2" />
            <p className="text-2xl text-red-600 mb-1">1</p>
            <p className="text-sm text-red-700">Critical Alerts</p>
          </div>
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 text-center">
            <AlertTriangle className="h-8 w-8 text-orange-500 mx-auto mb-2" />
            <p className="text-2xl text-orange-600 mb-1">1</p>
            <p className="text-sm text-orange-700">High Priority</p>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-center">
            <Info className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
            <p className="text-2xl text-yellow-600 mb-1">1</p>
            <p className="text-sm text-yellow-700">Medium Priority</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
            <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
            <p className="text-2xl text-green-600 mb-1">1</p>
            <p className="text-sm text-green-700">Advisories</p>
          </div>
        </div>

        {/* Active Alerts */}
        <div className="space-y-4 mb-8">
          <h2 className="text-2xl mb-4">Active Alerts</h2>
          {alerts.map((alert) => (
            <div key={alert.id} className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  {getAlertIcon(alert.type)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg">{alert.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs border ${getSeverityColor(alert.severity)}`}>
                      {alert.severity}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">{alert.message}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>Counties: {alert.county}</span>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{alert.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Alert Subscription */}
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <h2 className="text-2xl mb-4">Alert Preferences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg mb-3">Notification Methods</h3>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span>SMS Alerts</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span>Email Notifications</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Push Notifications</span>
                </label>
              </div>
            </div>
            <div>
              <h3 className="text-lg mb-3">Alert Types</h3>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span>Weather Warnings</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span>Drought Alerts</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Farming Advisories</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Market Updates</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}