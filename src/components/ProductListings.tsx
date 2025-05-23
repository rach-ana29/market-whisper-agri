
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Star, Filter, Heart } from "lucide-react";

const ProductListings = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("recent");

  const products = [
    {
      id: 1,
      name: "Organic Roma Tomatoes",
      farmer: "Green Valley Farm",
      location: "Fresno, CA",
      price: 3.75,
      quantity: 500,
      unit: "lbs",
      quality: "Premium",
      organic: true,
      rating: 4.8,
      description: "Fresh, vine-ripened organic Roma tomatoes perfect for sauces and cooking.",
      harvestDate: "2024-03-15",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Sweet Corn",
      farmer: "Sunrise Acres",
      location: "Iowa City, IA",
      price: 4.10,
      quantity: 1200,
      unit: "lbs",
      quality: "Grade A",
      organic: false,
      rating: 4.6,
      description: "Sweet, tender corn harvested at peak freshness.",
      harvestDate: "2024-03-14",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Winter Wheat",
      farmer: "Heritage Farm",
      location: "Topeka, KS",
      price: 6.90,
      quantity: 2000,
      unit: "lbs",
      quality: "Premium",
      organic: true,
      rating: 4.9,
      description: "High-protein winter wheat ideal for artisan bread making.",
      harvestDate: "2024-03-10",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      name: "Baby Spinach",
      farmer: "Leafy Greens Co.",
      location: "Salinas, CA",
      price: 8.50,
      quantity: 150,
      unit: "lbs",
      quality: "Premium",
      organic: true,
      rating: 4.7,
      description: "Tender baby spinach leaves, perfect for salads and cooking.",
      harvestDate: "2024-03-16",
      image: "/placeholder.svg"
    },
    {
      id: 5,
      name: "Red Potatoes",
      farmer: "Mountain View Farm",
      location: "Boise, ID",
      price: 2.25,
      quantity: 800,
      unit: "lbs",
      quality: "Grade A",
      organic: false,
      rating: 4.4,
      description: "Fresh red potatoes with smooth skin and creamy texture.",
      harvestDate: "2024-03-12",
      image: "/placeholder.svg"
    },
    {
      id: 6,
      name: "Organic Carrots",
      farmer: "Rainbow Harvest",
      location: "Portland, OR",
      price: 3.20,
      quantity: 300,
      unit: "lbs",
      quality: "Premium",
      organic: true,
      rating: 4.8,
      description: "Sweet, crunchy organic carrots grown in rich Pacific Northwest soil.",
      harvestDate: "2024-03-13",
      image: "/placeholder.svg"
    },
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.farmer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-green-800">Marketplace</h2>
          <p className="text-green-600">Fresh produce directly from farmers</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <Input
            placeholder="Search products or farmers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-64 bg-white/70 border-green-200"
          />
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full sm:w-40 bg-white/70 border-green-200">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recent">Most Recent</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="border-green-200 text-green-700 hover:bg-green-50">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="bg-white/70 backdrop-blur-sm border-green-200 hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <CardTitle className="text-lg text-green-800 mb-1">{product.name}</CardTitle>
                  <CardDescription className="flex items-center text-green-600">
                    <MapPin className="w-3 h-3 mr-1" />
                    {product.farmer} • {product.location}
                  </CardDescription>
                </div>
                <Button variant="ghost" size="icon" className="text-green-600 hover:bg-green-100">
                  <Heart className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="aspect-video bg-gradient-to-br from-green-100 to-amber-100 rounded-lg flex items-center justify-center">
                <div className="text-green-600 text-sm">Product Image</div>
              </div>
              
              <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {product.organic && (
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                    Organic
                  </Badge>
                )}
                <Badge variant="outline" className="border-green-200 text-green-700">
                  {product.quality}
                </Badge>
                <div className="flex items-center text-sm text-green-600">
                  <Star className="w-3 h-3 mr-1 fill-current" />
                  {product.rating}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-green-800">
                    ${product.price.toFixed(2)}
                    <span className="text-sm font-normal text-green-600">/{product.unit}</span>
                  </div>
                  <div className="text-sm text-green-600">
                    {product.quantity} {product.unit} available
                  </div>
                </div>
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  Contact Farmer
                </Button>
              </div>
              
              <div className="text-xs text-gray-500 pt-2 border-t border-green-100">
                Harvested: {new Date(product.harvestDate).toLocaleDateString()}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Button variant="outline" className="border-green-200 text-green-700 hover:bg-green-50">
          Load More Products
        </Button>
      </div>
    </div>
  );
};

export default ProductListings;
