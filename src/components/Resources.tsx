import { BookOpen, Download, ExternalLink, Users, Lightbulb, Phone } from "lucide-react";

export function Resources() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl mb-4 text-gray-900">Climate Resources</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Essential tools, guides, and support for climate-resilient decision making across Kenya
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Farming Guides */}
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="h-8 w-8 text-green-600" />
              <h3 className="text-xl">Farming Guides</h3>
            </div>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                <span>Drought-Resistant Crop Selection</span>
              </li>
              <li className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                <span>Water Conservation Techniques</span>
              </li>
              <li className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                <span>Seasonal Planting Calendar</span>
              </li>
            </ul>
          </div>

          {/* Business Resources */}
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="flex items-center gap-3 mb-4">
              <Lightbulb className="h-8 w-8 text-blue-600" />
              <h3 className="text-xl">Business Tools</h3>
            </div>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                <span>Climate Risk Assessment</span>
              </li>
              <li className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                <span>Supply Chain Planning</span>
              </li>
              <li className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                <span>Insurance Guidelines</span>
              </li>
            </ul>
          </div>

          {/* Government Resources */}
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="flex items-center gap-3 mb-4">
              <Users className="h-8 w-8 text-purple-600" />
              <h3 className="text-xl">Policy Resources</h3>
            </div>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                <span>Climate Action Plans</span>
              </li>
              <li className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                <span>Emergency Response Protocols</span>
              </li>
              <li className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                <span>Community Engagement Tools</span>
              </li>
            </ul>
          </div>

          {/* External Links */}
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="flex items-center gap-3 mb-4">
              <ExternalLink className="h-8 w-8 text-orange-600" />
              <h3 className="text-xl">External Resources</h3>
            </div>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <ExternalLink className="h-4 w-4" />
                <span>Kenya Meteorological Department</span>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="h-4 w-4" />
                <span>ICPAC Climate Services</span>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="h-4 w-4" />
                <span>FAO Climate Resources</span>
              </li>
            </ul>
          </div>

          {/* Training & Support */}
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="flex items-center gap-3 mb-4">
              <Phone className="h-8 w-8 text-red-600" />
              <h3 className="text-xl">Training & Support</h3>
            </div>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>Webinar Series: Every Friday 2PM EAT</li>
              <li>Support Hotline: +254-700-CLIMATE</li>
              <li>Email: support@climateai.ke</li>
            </ul>
          </div>

          {/* API Documentation */}
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="h-8 w-8 text-indigo-600" />
              <h3 className="text-xl">Developer Resources</h3>
            </div>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                <span>API Documentation</span>
              </li>
              <li className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                <span>Data Integration Guide</span>
              </li>
              <li className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                <span>SDK Downloads</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}