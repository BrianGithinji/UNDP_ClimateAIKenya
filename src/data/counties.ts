export const kenyanCounties = [
  "Baringo", "Bomet", "Bungoma", "Busia", "Elgeyo-Marakwet", "Embu", 
  "Garissa", "Homa Bay", "Isiolo", "Kajiado", "Kakamega", "Kericho", 
  "Kiambu", "Kilifi", "Kirinyaga", "Kisii", "Kisumu", "Kitui", "Kwale", 
  "Laikipia", "Lamu", "Machakos", "Makueni", "Mandera", "Marsabit", 
  "Meru", "Migori", "Mombasa", "Murang'a", "Nairobi", "Nakuru", "Nandi", 
  "Narok", "Nyamira", "Nyandarua", "Nyeri", "Samburu", "Siaya", 
  "Taita-Taveta", "Tana River", "Tharaka-Nithi", "Trans-Nzoia", 
  "Turkana", "Uasin Gishu", "Vihiga", "Wajir", "West Pokot"
];

export type UserRole = "farmer" | "msme" | "government";

export interface ClimateData {
  date: string;
  rainfall: number;
  temperature: number;
  humidity: number;
  soilMoisture: number;
}

export interface RiskAlert {
  type: "drought" | "flood" | "extreme_weather";
  severity: "low" | "medium" | "high";
  description: string;
  actionItems: string[];
}

export interface CountyClimateInfo {
  county: string;
  currentTemp: number;
  rainfall7Day: number;
  droughtRisk: number;
  floodRisk: number;
  soilMoisture: number;
  weeklyForecast: ClimateData[];
  alerts: RiskAlert[];
  aiInsights: {
    farmer: string[];
    msme: string[];
    government: string[];
  };
}

// Mock data generator
export function generateMockClimateData(county: string): CountyClimateInfo {
  const baseTemp = Math.random() * 10 + 20; // 20-30°C
  const baseRainfall = Math.random() * 50;
  
  const weeklyForecast: ClimateData[] = Array.from({ length: 7 }, (_, i) => ({
    date: new Date(Date.now() + i * 24 * 60 * 60 * 1000).toLocaleDateString(),
    rainfall: Math.random() * 15 + baseRainfall / 7,
    temperature: baseTemp + (Math.random() - 0.5) * 5,
    humidity: Math.random() * 30 + 60,
    soilMoisture: Math.random() * 40 + 30
  }));

  const droughtRisk = Math.random() * 100;
  const floodRisk = Math.random() * 100;
  
  const alerts: RiskAlert[] = [];
  if (droughtRisk > 70) {
    alerts.push({
      type: "drought",
      severity: "high",
      description: "High drought risk detected for the next 2 weeks",
      actionItems: ["Implement water conservation", "Adjust planting schedules", "Prepare irrigation systems"]
    });
  }
  if (floodRisk > 75) {
    alerts.push({
      type: "flood",
      severity: "high", 
      description: "Potential flooding expected within 5 days",
      actionItems: ["Clear drainage systems", "Move livestock to higher ground", "Prepare emergency supplies"]
    });
  }

  return {
    county,
    currentTemp: baseTemp,
    rainfall7Day: baseRainfall,
    droughtRisk,
    floodRisk,
    soilMoisture: Math.random() * 40 + 40,
    weeklyForecast,
    alerts,
    aiInsights: {
      farmer: [
        `Optimal planting window for ${county} is in 3-5 days based on soil conditions`,
        "Maize yields expected to be 15% above average this season",
        "Consider drought-resistant varieties for long-term sustainability"
      ],
      msme: [
        `Supply chain disruptions possible in ${county} due to weather patterns`,
        "Agricultural input demand expected to increase by 20% next month",
        "Weather-dependent businesses should prepare contingency plans"
      ],
      government: [
        `${county} requires enhanced water infrastructure investment`,
        "Early warning systems should be activated for vulnerable communities",
        "Agricultural extension services needed in drought-prone areas"
      ]
    }
  };
}