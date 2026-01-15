"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  AreaChart,
  Area,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from "recharts"
import { exportToCSV } from "@/lib/export"
import { 
  TrendingUp, 
  Download, 
  Calendar,
  Zap,
  Droplet,
  Recycle,
  Target
} from "lucide-react"

// Mock data
const monthlyImpact = [
  { month: "Sep", energy: 145, water: 89, waste: 120 },
  { month: "Oct", energy: 178, water: 102, waste: 145 },
  { month: "Nov", energy: 212, water: 125, waste: 168 },
  { month: "Dec", energy: 245, water: 148, waste: 189 },
  { month: "Jan", energy: 289, water: 167, waste: 212 },
]

const districtPerformance = [
  { district: "Gasabo", students: 456, actions: 1234, energy: 892 },
  { district: "Kicukiro", students: 342, actions: 987, energy: 678 },
  { district: "Nyarugenge", students: 289, actions: 856, energy: 589 },
]

const challengeTypes = [
  { name: "Energy", value: 45, color: "#fb923c" },
  { name: "Water", value: 30, color: "#3b82f6" },
  { name: "Waste", value: 25, color: "#22c55e" },
]

const schoolComparison = [
  { school: "KIS", engagement: 85, impact: 92, completion: 88 },
  { school: "GHA", engagement: 78, impact: 85, completion: 82 },
  { school: "Riviera", engagement: 72, impact: 78, completion: 75 },
  { school: "Lycée", engagement: 80, impact: 82, completion: 79 },
]

const weeklyTrends = [
  { week: "Week 1", submissions: 145, verified: 128, rejected: 17 },
  { week: "Week 2", submissions: 167, verified: 148, rejected: 19 },
  { week: "Week 3", submissions: 189, verified: 165, rejected: 24 },
  { week: "Week 4", submissions: 212, verified: 189, rejected: 23 },
]

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Impact Analytics</h1>
          <p className="text-muted-foreground mt-1">
            Comprehensive environmental impact tracking and insights
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue="30">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Time period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7">Last 7 days</SelectItem>
              <SelectItem value="30">Last 30 days</SelectItem>
              <SelectItem value="90">Last 90 days</SelectItem>
              <SelectItem value="365">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Energy Saved</CardTitle>
            <Zap className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,982 kWh</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-success font-medium">+18.2%</span> vs last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Water Preserved</CardTitle>
            <Droplet className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,856 L</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-success font-medium">+14.7%</span> vs last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Waste Diverted</CardTitle>
            <Recycle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">845 kg</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-success font-medium">+22.5%</span> vs last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">CO₂ Offset</CardTitle>
            <TrendingUp className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.8 tons</div>
            <p className="text-xs text-muted-foreground mt-1">
              Carbon emissions prevented
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Impact Trends */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Monthly Impact Trends</CardTitle>
              <CardDescription>Environmental savings across all categories over time</CardDescription>
            </div>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => exportToCSV(monthlyImpact, "monthly-impact.csv")}
            >
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </CardHeader>
        <CardContent className="pl-2">
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={monthlyImpact}>
              <defs>
                <linearGradient id="colorEnergy" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#fb923c" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#fb923c" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorWater" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorWaste" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" stroke="#64748b" fontSize={12} />
              <YAxis stroke="#64748b" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#ffffff', 
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px'
                }}
              />
              <Legend />
              <Area 
                type="monotone" 
                dataKey="energy" 
                stroke="#fb923c" 
                fillOpacity={1} 
                fill="url(#colorEnergy)"
                name="Energy (kWh)"
              />
              <Area 
                type="monotone" 
                dataKey="water" 
                stroke="#3b82f6" 
                fillOpacity={1} 
                fill="url(#colorWater)"
                name="Water (L)"
              />
              <Area 
                type="monotone" 
                dataKey="waste" 
                stroke="#22c55e" 
                fillOpacity={1} 
                fill="url(#colorWaste)"
                name="Waste (kg)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* District Performance & Challenge Distribution */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>District Performance</CardTitle>
            <CardDescription>Energy savings by district</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={districtPerformance}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="district" stroke="#64748b" fontSize={12} />
                <YAxis stroke="#64748b" fontSize={12} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#ffffff', 
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="energy" fill="#22c55e" radius={[8, 8, 0, 0]} name="Energy (kWh)" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Challenge Type Distribution</CardTitle>
            <CardDescription>Breakdown by challenge category</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={challengeTypes}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {challengeTypes.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-2 mt-4">
              {challengeTypes.map((item) => (
                <div key={item.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span>{item.name}</span>
                  </div>
                  <span className="font-medium">{item.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* School Performance Radar */}
      <Card>
        <CardHeader>
          <CardTitle>School Performance Comparison</CardTitle>
          <CardDescription>Multi-dimensional performance analysis across schools</CardDescription>
        </CardHeader>
        <CardContent className="pl-2">
          <ResponsiveContainer width="100%" height={400}>
            <RadarChart data={schoolComparison}>
              <PolarGrid stroke="#e2e8f0" />
              <PolarAngleAxis dataKey="school" stroke="#64748b" fontSize={12} />
              <PolarRadiusAxis stroke="#64748b" fontSize={12} />
              <Radar 
                name="Engagement" 
                dataKey="engagement" 
                stroke="#3b82f6" 
                fill="#3b82f6" 
                fillOpacity={0.3}
              />
              <Radar 
                name="Impact" 
                dataKey="impact" 
                stroke="#22c55e" 
                fill="#22c55e" 
                fillOpacity={0.3}
              />
              <Radar 
                name="Completion" 
                dataKey="completion" 
                stroke="#fb923c" 
                fill="#fb923c" 
                fillOpacity={0.3}
              />
              <Legend />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Weekly Verification Trends */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Weekly Verification Trends</CardTitle>
              <CardDescription>Submission and verification patterns over the past month</CardDescription>
            </div>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => exportToCSV(weeklyTrends, "weekly-trends.csv")}
            >
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </CardHeader>
        <CardContent className="pl-2">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={weeklyTrends}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="week" stroke="#64748b" fontSize={12} />
              <YAxis stroke="#64748b" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#ffffff', 
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px'
                }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="submissions" 
                stroke="#64748b" 
                strokeWidth={2}
                dot={{ fill: '#64748b', r: 4 }}
                name="Submissions"
              />
              <Line 
                type="monotone" 
                dataKey="verified" 
                stroke="#22c55e" 
                strokeWidth={2}
                dot={{ fill: '#22c55e', r: 4 }}
                name="Verified"
              />
              <Line 
                type="monotone" 
                dataKey="rejected" 
                stroke="#ef4444" 
                strokeWidth={2}
                dot={{ fill: '#ef4444', r: 4 }}
                name="Rejected"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}

