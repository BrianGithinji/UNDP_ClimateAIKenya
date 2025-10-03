import { Menu } from "lucide-react";

interface HeaderProps {
  onNavigate?: (page: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <img src="climate.jpg" alt="Climate Logo" className="h-12 w-12 object-contain" />
              <div>
                <h1 className="text-xl text-gray-900">ClimateAI Kenya</h1>
                <p className="text-xs text-gray-500">Hyper-local climate insights</p>
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-4">
              <button onClick={() => onNavigate?.("dashboard")} className="text-sm text-gray-600 hover:text-gray-900">Dashboard</button>
              <button onClick={() => onNavigate?.("forecasts")} className="text-sm text-gray-600 hover:text-gray-900">Forecasts</button>
              <button onClick={() => onNavigate?.("alerts")} className="text-sm text-gray-600 hover:text-gray-900">Alerts</button>
              <button onClick={() => onNavigate?.("resources")} className="text-sm text-gray-600 hover:text-gray-900">Resources</button>
            </nav>
          </div>

          <button className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
