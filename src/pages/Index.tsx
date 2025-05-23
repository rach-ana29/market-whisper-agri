
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { TrendingUp, TrendingDown, Users, ShoppingCart, Leaf, DollarSign, Search, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import MarketIntelligence from "@/components/MarketIntelligence";
import ProductListings from "@/components/ProductListings";
import FarmerDashboard from "@/components/FarmerDashboard";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const marketData = [
    { crop: "Tomatoes", price: 3.50, change: 0.25, trend: "up" },
    { crop: "Corn", price: 4.20, change: -0.15, trend: "down" },
    { crop: "Wheat", price: 6.80, change: 0.40, trend: "up" },
    { crop: "Soybeans", price: 14.50, change: 0.80, trend: "up" },
    { crop: "Potatoes", price: 2.10, change: -0.05, trend: "down" },
  ];

  const recentSales = [
    { id: 1, farmer: "Green Valley Farm", crop: "Organic Tomatoes", amount: 500, price: 3.75, buyer: "Fresh Market Co." },
    { id: 2, farmer: "Sunrise Acres", crop: "Sweet Corn", amount: 1200, price: 4.10, buyer: "Local Food Hub" },
    { id: 3, farmer: "Heritage Farm", crop: "Winter Wheat", amount: 2000, price: 6.90, buyer: "Artisan Bakery" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-amber-50 to-green-100">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-green-800 mb-2">AgriConnect Market Platform</h1>
          <p className="text-lg text-green-600">Connecting farmers directly to markets with real-time intelligence</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="dashboard">Market Dashboard</TabsTrigger>
            <TabsTrigger value="intelligence">Market Intelligence</TabsTrigger>
            <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
            <TabsTrigger value="farmer">Farmer Portal</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="bg-white/70 backdrop-blur-sm border-green-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-green-700">Active Farmers</CardTitle>
                  <Users className="h-4 w-4 text-green-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-800">1,247</div>
                  <p className="text-xs text-green-600">+12% from last month</p>
                </CardContent>
              </Card>

              <Card className="bg-white/70 backdrop-blur-sm border-green-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-green-700">Total Sales</CardTitle>
                  <DollarSign className="h-4 w-4 text-green-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-800">$2.4M</div>
                  <p className="text-xs text-green-600">+8% from last month</p>
                </CardContent>
              </Card>

              <Card className="bg-white/70 backdrop-blur-sm border-green-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-green-700">Active Listings</CardTitle>
                  <ShoppingCart className="h-4 w-4 text-green-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-800">3,456</div>
                  <p className="text-xs text-green-600">+24% from last month</p>
                </CardContent>
              </Card>

              <Card className="bg-white/70 backdrop-blur-sm border-green-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-green-700">Organic Produce</CardTitle>
                  <Leaf className="h-4 w-4 text-green-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-800">67%</div>
                  <p className="text-xs text-green-600">of total listings</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white/70 backdrop-blur-sm border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-800">Current Market Prices</CardTitle>
                  <CardDescription>Real-time pricing for major crops</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {marketData.map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="font-medium text-green-800">{item.crop}</div>
                          <Badge variant={item.trend === "up" ? "default" : "secondary"} className={item.trend === "up" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}>
                            {item.trend === "up" ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                            ${Math.abs(item.change).toFixed(2)}
                          </Badge>
                        </div>
                        <div className="text-lg font-bold text-green-800">${item.price.toFixed(2)}/lb</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/70 backdrop-blur-sm border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-800">Recent Sales Activity</CardTitle>
                  <CardDescription>Latest transactions on the platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentSales.map((sale) => (
                      <div key={sale.id} className="p-3 bg-amber-50 rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <div className="font-medium text-green-800">{sale.crop}</div>
                          <div className="text-lg font-bold text-green-800">${(sale.amount * sale.price).toLocaleString()}</div>
                        </div>
                        <div className="text-sm text-green-600">
                          <div>{sale.farmer} → {sale.buyer}</div>
                          <div>{sale.amount} lbs @ ${sale.price}/lb</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="intelligence">
            <MarketIntelligence />
          </TabsContent>

          <TabsContent value="marketplace">
            <ProductListings />
          </TabsContent>

          <TabsContent value="farmer">
            <FarmerDashboard />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
