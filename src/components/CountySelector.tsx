import { MapPin, ChevronDown } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { kenyanCounties } from "../data/counties";

interface CountySelectorProps {
  selectedCounty: string;
  onCountyChange: (county: string) => void;
}

export function CountySelector({ selectedCounty, onCountyChange }: CountySelectorProps) {
  return (
    <div className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm border">
      <MapPin className="h-5 w-5 text-blue-600" />
      <div className="flex-1">
        <label className="block text-sm text-gray-600 mb-1">Select County</label>
        <Select value={selectedCounty} onValueChange={onCountyChange}>
          <SelectTrigger className="w-full min-w-[200px] [&>span]:!text-black">
            <SelectValue placeholder="Choose a county..." />
          </SelectTrigger>
          <SelectContent>
            {kenyanCounties.map((county) => (
              <SelectItem key={county} value={county}>
                {county}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}