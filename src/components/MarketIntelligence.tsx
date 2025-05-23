
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, TrendingDown, AlertTriangle, Info } from "lucide-react";

const MarketIntelligence = () => {
  const priceHistoryData = [
    { month: "Jan", tomatoes: 3.20, corn: 4.10, wheat: 6.40, soybeans: 13.80 },
    { month: "Feb", tomatoes: 3.35, corn: 4.25, wheat: 6.55, soybeans: 14.10 },
    { month: "Mar", tomatoes: 3.45, corn: 4.15, wheat: 6.70, soybeans: 14.25 },
    { month: "Apr", tomatoes: 3.50, corn: 4.20, wheat: 6.80, soybeans: 14.50 },
  ];

  const demandForecast = [
    { crop: "Tomatoes", currentDemand: 85, forecastDemand: 92, change: 7 },
    { crop: "Corn", currentDemand: 78, forecastDemand: 82, change: 4 },
    { crop: "Wheat", currentDemand: 90, forecastDemand: 88, change: -2 },
    { crop: "Soybeans", currentDemand: 73, forecastDemand: 79, change: 6 },
  ];

  const regionalData = [
    { region: "Midwest", value: 35, color: "#22c55e" },
    { region: "West Coast", value: 28, color: "#f59e0b" },
    { region: "Northeast", value: 20, color: "#3b82f6" },
    { region: "Southeast", value: 17, color: "#ef4444" },
  ];

  const marketAlerts = [
    { type: "price", message: "Tomato prices up 15% due to weather conditions", severity: "high" },
    { type: "demand", message: "Increased demand for organic corn expected next month", severity: "medium" },
    { type: "supply", message: "Wheat surplus in Midwest region", severity: "low" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-green-800">Market Intelligence</h2>
          <p className="text-green-600">Real-time analytics and forecasting</p>
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-48 bg-white/70 border-green-200">
            <SelectValue placeholder="Select region" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Regions</SelectItem>
            <SelectItem value="midwest">Midwest</SelectItem>
            <SelectItem value="west">West Coast</SelectItem>
            <SelectItem value="northeast">Northeast</SelectItem>
            <SelectItem value="southeast">Southeast</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 bg-white/70 backdrop-blur-sm border-green-200">
          <CardHeader>
            <CardTitle className="text-green-800">Price Trends (Last 4 Months)</CardTitle>
            <CardDescription>Historical pricing data for major crops</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={priceHistoryData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#059669" />
                <YAxis stroke="#059669" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                    border: '1px solid #10b981',
                    borderRadius: '8px'
                  }} 
                />
                <Line type="monotone" dataKey="tomatoes" stroke="#ef4444" strokeWidth={2} name="Tomatoes ($)" />
                <Line type="monotone" dataKey="corn" stroke="#f59e0b" strokeWidth={2} name="Corn ($)" />
                <Line type="monotone" dataKey="wheat" stroke="#3b82f6" strokeWidth={2} name="Wheat ($)" />
                <Line type="monotone" dataKey="soybeans" stroke="#8b5cf6" strokeWidth={2} name="Soybeans ($)" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-white/70 backdrop-blur-sm border-green-200">
          <CardHeader>
            <CardTitle className="text-green-800">Market Distribution</CardTitle>
            <CardDescription>Sales by region</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={regionalData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ region, value }) => `${region}: ${value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {regionalData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white/70 backdrop-blur-sm border-green-200">
          <CardHeader>
            <CardTitle className="text-green-800">Demand Forecast</CardTitle>
            <CardDescription>Projected demand changes for next month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {demandForecast.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-amber-50 rounded-lg">
                  <div>
                    <div className="font-medium text-green-800">{item.crop}</div>
                    <div className="text-sm text-green-600">
                      Current: {item.currentDemand}% | Forecast: {item.forecastDemand}%
                    </div>
                  </div>
                  <Badge variant={item.change > 0 ? "default" : item.change < 0 ? "destructive" : "secondary"} 
                         className={item.change > 0 ? "bg-green-100 text-green-800" : item.change < 0 ? "bg-red-100 text-red-800" : ""}>
                    {item.change > 0 ? <TrendingUp className="w-3 h-3 mr-1" /> : item.change < 0 ? <TrendingDown className="w-3 h-3 mr-1" /> : null}
                    {item.change > 0 ? '+' : ''}{item.change}%
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/70 backdrop-blur-sm border-green-200">
          <CardHeader>
            <CardTitle className="text-green-800">Market Alerts</CardTitle>
            <CardDescription>Important market updates and notifications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {marketAlerts.map((alert, index) => (
                <div key={index} className={`p-3 rounded-lg border-l-4 ${
                  alert.severity === 'high' ? 'bg-red-50 border-red-400' :
                  alert.severity === 'medium' ? 'bg-yellow-50 border-yellow-400' :
                  'bg-blue-50 border-blue-400'
                }`}>
                  <div className="flex items-start space-x-2">
                    {alert.severity === 'high' ? (
                      <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5" />
                    ) : (
                      <Info className="w-4 h-4 text-blue-500 mt-0.5" />
                    )}
                    <div className="text-sm text-gray-700">{alert.message}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MarketIntelligence;
