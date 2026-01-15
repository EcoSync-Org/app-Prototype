"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Users, 
  CheckCircle, 
  XCircle, 
  Zap, 
  Droplet, 
  TrendingUp,
  School,
  Target
} from "lucide-react"
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"

// Mock data - will be replaced with real API data
const weeklySubmissions = [
  { day: "Mon", submissions: 45 },
  { day: "Tue", submissions: 52 },
  { day: "Wed", submissions: 48 },
  { day: "Thu", submissions: 61 },
  { day: "Fri", submissions: 55 },
  { day: "Sat", submissions: 38 },
  { day: "Sun", submissions: 42 },
]

const impactData = [
  { month: "Jan", energy: 120, water: 80 },
  { month: "Feb", energy: 150, water: 95 },
  { month: "Mar", energy: 180, water: 110 },
  { month: "Apr", energy: 220, water: 130 },
]

const verificationStatus = [
  { name: "Verified", value: 156, color: "#22c55e" },
  { name: "Pending", value: 23, color: "#fb923c" },
  { name: "Rejected", value: 12, color: "#ef4444" },
]

const topSchools = [
  { name: "Kigali International School", students: 120, actions: 456, impact: 892 },
  { name: "Green Hills Academy", students: 95, actions: 398, impact: 756 },
  { name: "Riviera High School", students: 88, actions: 342, impact: 689 },
  { name: "Lycée de Kigali", students: 102, actions: 325, impact: 645 },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="relative">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-green-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -top-10 -left-10 w-48 h-48 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
        <div className="relative">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-1 w-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
            <span className="text-sm font-semibold text-green-600 uppercase tracking-wider">Live Dashboard</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            Dashboard Overview
          </h1>
          <p className="text-muted-foreground mt-2 text-lg">
            Monitor student engagement and environmental impact across all schools
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-lg transition-all duration-300 group hover:scale-[1.02]">
          <div className="absolute top-0 right-0 w-20 h-20 bg-green-400/10 rounded-full blur-2xl"></div>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-900">Active Students</CardTitle>
            <div className="p-2 bg-green-500 rounded-lg group-hover:scale-110 transition-transform">
              <Users className="h-4 w-4 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-700">1,248</div>
            <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              <span className="font-medium">+12.5%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-blue-50 to-cyan-50 hover:shadow-lg transition-all duration-300 group hover:scale-[1.02]">
          <div className="absolute top-0 right-0 w-20 h-20 bg-blue-400/10 rounded-full blur-2xl"></div>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-900">Total Submissions</CardTitle>
            <div className="p-2 bg-blue-500 rounded-lg group-hover:scale-110 transition-transform">
              <Target className="h-4 w-4 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-700">3,456</div>
            <p className="text-xs text-blue-600 mt-1 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              <span className="font-medium">+341</span> this week
            </p>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-emerald-50 to-teal-50 hover:shadow-lg transition-all duration-300 group hover:scale-[1.02]">
          <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-400/10 rounded-full blur-2xl"></div>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-emerald-900">Verified Actions</CardTitle>
            <div className="p-2 bg-emerald-500 rounded-lg group-hover:scale-110 transition-transform">
              <CheckCircle className="h-4 w-4 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-emerald-700">2,891</div>
            <p className="text-xs text-emerald-600 mt-1">
              <span className="font-medium">83.6%</span> success rate
            </p>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-orange-50 to-amber-50 hover:shadow-lg transition-all duration-300 group hover:scale-[1.02]">
          <div className="absolute top-0 right-0 w-20 h-20 bg-orange-400/10 rounded-full blur-2xl"></div>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-orange-900">Total Impact</CardTitle>
            <div className="p-2 bg-orange-500 rounded-lg group-hover:scale-110 transition-transform">
              <Zap className="h-4 w-4 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-orange-700">892 kWh</div>
            <p className="text-xs text-orange-600 mt-1">
              Energy saved this month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid gap-4 md:grid-cols-7">
        {/* Weekly Submissions Chart */}
        <Card className="col-span-4 border-0 shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 border-b">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
              <CardTitle className="text-green-900">Weekly Submissions</CardTitle>
            </div>
            <CardDescription>Student eco-action submissions over the past week</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={weeklySubmissions}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis 
                  dataKey="day" 
                  stroke="#64748b"
                  fontSize={12}
                />
                <YAxis stroke="#64748b" fontSize={12} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#ffffff', 
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="submissions" fill="#22c55e" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Verification Status */}
        <Card className="col-span-3 border-0 shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50 border-b">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 bg-blue-500 rounded-full animate-pulse"></div>
              <CardTitle className="text-blue-900">Verification Status</CardTitle>
            </div>
            <CardDescription>Current week&apos;s verification breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={verificationStatus}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {verificationStatus.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-2 mt-4">
              {verificationStatus.map((item) => (
                <div key={item.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span>{item.name}</span>
                  </div>
                  <span className="font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Impact Trends */}
      <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
        <CardHeader className="bg-gradient-to-r from-orange-50 via-green-50 to-blue-50 border-b">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 bg-orange-500 rounded-full animate-pulse"></div>
            <CardTitle className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
              Environmental Impact Trends
            </CardTitle>
          </div>
          <CardDescription>Cumulative energy and water savings over time</CardDescription>
        </CardHeader>
        <CardContent className="pl-2">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={impactData}>
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
              <Line 
                type="monotone" 
                dataKey="energy" 
                stroke="#fb923c" 
                strokeWidth={3}
                dot={{ fill: '#fb923c', r: 4 }}
                name="Energy (kWh)"
              />
              <Line 
                type="monotone" 
                dataKey="water" 
                stroke="#3b82f6" 
                strokeWidth={3}
                dot={{ fill: '#3b82f6', r: 4 }}
                name="Water (Liters)"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Top Performing Schools */}
      <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
        <CardHeader className="bg-gradient-to-r from-green-50 to-teal-50 border-b">
          <div className="flex items-center gap-2">
            <School className="h-5 w-5 text-green-600" />
            <CardTitle className="text-green-900">Top Performing Schools</CardTitle>
          </div>
          <CardDescription>Schools leading in verified eco-actions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topSchools.map((school, index) => (
              <div key={school.name} className="flex items-center gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-medium truncate">{school.name}</p>
                  </div>
                  <div className="flex items-center gap-4 mt-1 text-xs text-muted-foreground">
                    <span>{school.students} students</span>
                    <span>•</span>
                    <span>{school.actions} actions</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-primary">{school.impact} kWh</p>
                  <p className="text-xs text-muted-foreground">saved</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

