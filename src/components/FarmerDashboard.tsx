
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Plus, Eye, Edit, Trash2, Package, DollarSign, TrendingUp, Users } from "lucide-react";

const FarmerDashboard = () => {
  const [showAddProduct, setShowAddProduct] = useState(false);

  const myProducts = [
    { id: 1, name: "Organic Tomatoes", price: 3.75, quantity: 500, status: "active", views: 234, inquiries: 12 },
    { id: 2, name: "Sweet Corn", price: 4.10, quantity: 1200, status: "active", views: 189, inquiries: 8 },
    { id: 3, name: "Winter Wheat", price: 6.90, quantity: 2000, status: "sold", views: 156, inquiries: 15 },
  ];

  const salesData = [
    { month: "Jan", sales: 8400, orders: 24 },
    { month: "Feb", sales: 9200, orders: 28 },
    { month: "Mar", sales: 10800, orders: 32 },
    { month: "Apr", sales: 12400, orders: 38 },
  ];

  const recentInquiries = [
    { id: 1, buyer: "Fresh Market Co.", product: "Organic Tomatoes", message: "Interested in weekly supply", date: "2024-03-16" },
    { id: 2, buyer: "Local Food Hub", product: "Sweet Corn", message: "Need 500 lbs for event", date: "2024-03-15" },
    { id: 3, buyer: "Artisan Bakery", product: "Winter Wheat", message: "Looking for high-protein wheat", date: "2024-03-14" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-green-800">Farmer Dashboard</h2>
          <p className="text-green-600">Manage your products and sales</p>
        </div>
        <Button onClick={() => setShowAddProduct(true)} className="bg-green-600 hover:bg-green-700 text-white">
          <Plus className="w-4 h-4 mr-2" />
          Add Product
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-white/70 backdrop-blur-sm border-green-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-700">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-800">$40,800</div>
            <p className="text-xs text-green-600">+15% from last month</p>
          </CardContent>
        </Card>

        <Card className="bg-white/70 backdrop-blur-sm border-green-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-700">Active Listings</CardTitle>
            <Package className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-800">12</div>
            <p className="text-xs text-green-600">2 pending approval</p>
          </CardContent>
        </Card>

        <Card className="bg-white/70 backdrop-blur-sm border-green-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-700">Total Orders</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-800">122</div>
            <p className="text-xs text-green-600">+8 this week</p>
          </CardContent>
        </Card>

        <Card className="bg-white/70 backdrop-blur-sm border-green-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-700">Buyer Inquiries</CardTitle>
            <Users className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-800">35</div>
            <p className="text-xs text-green-600">5 unread</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="products" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="products">My Products</TabsTrigger>
          <TabsTrigger value="analytics">Sales Analytics</TabsTrigger>
          <TabsTrigger value="inquiries">Buyer Inquiries</TabsTrigger>
        </TabsList>

        <TabsContent value="products" className="space-y-4">
          <Card className="bg-white/70 backdrop-blur-sm border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Product Listings</CardTitle>
              <CardDescription>Manage your current product offerings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {myProducts.map((product) => (
                  <div key={product.id} className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-amber-50 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <h3 className="font-medium text-green-800">{product.name}</h3>
                        <Badge variant={product.status === "active" ? "default" : "secondary"} 
                               className={product.status === "active" ? "bg-green-100 text-green-800" : ""}>
                          {product.status}
                        </Badge>
                      </div>
                      <div className="text-sm text-green-600 mt-1">
                        ${product.price}/lb • {product.quantity} lbs available
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {product.views} views • {product.inquiries} inquiries
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="icon" className="text-green-600 hover:bg-green-100">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-green-600 hover:bg-green-100">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-red-600 hover:bg-red-100">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <Card className="bg-white/70 backdrop-blur-sm border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Sales Performance</CardTitle>
              <CardDescription>Your sales trend over the last 4 months</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={salesData}>
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
                  <Bar dataKey="sales" fill="#22c55e" name="Sales ($)" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="inquiries" className="space-y-4">
          <Card className="bg-white/70 backdrop-blur-sm border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Recent Inquiries</CardTitle>
              <CardDescription>Messages from potential buyers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentInquiries.map((inquiry) => (
                  <div key={inquiry.id} className="p-4 bg-amber-50 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div className="font-medium text-green-800">{inquiry.buyer}</div>
                      <div className="text-sm text-green-600">{new Date(inquiry.date).toLocaleDateString()}</div>
                    </div>
                    <div className="text-sm text-green-600 mb-2">
                      Product: {inquiry.product}
                    </div>
                    <p className="text-sm text-gray-700 mb-3">{inquiry.message}</p>
                    <div className="flex space-x-2">
                      <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                        Reply
                      </Button>
                      <Button size="sm" variant="outline" className="border-green-200 text-green-700">
                        View Profile
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {showAddProduct && (
        <Card className="bg-white/70 backdrop-blur-sm border-green-200">
          <CardHeader>
            <CardTitle className="text-green-800">Add New Product</CardTitle>
            <CardDescription>List a new product for sale</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input placeholder="Product name" className="bg-white/70 border-green-200" />
              <Select>
                <SelectTrigger className="bg-white/70 border-green-200">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="vegetables">Vegetables</SelectItem>
                  <SelectItem value="fruits">Fruits</SelectItem>
                  <SelectItem value="grains">Grains</SelectItem>
                  <SelectItem value="herbs">Herbs</SelectItem>
                </SelectContent>
              </Select>
              <Input placeholder="Price per unit" type="number" className="bg-white/70 border-green-200" />
              <Input placeholder="Quantity available" type="number" className="bg-white/70 border-green-200" />
            </div>
            <Textarea placeholder="Product description" className="bg-white/70 border-green-200" />
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setShowAddProduct(false)} className="border-green-200 text-green-700">
                Cancel
              </Button>
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                List Product
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default FarmerDashboard;
