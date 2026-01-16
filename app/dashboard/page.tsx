"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Users, 
  CheckCircle, 
  Target,
  Zap, 
  TrendingUp,
  School
} from "lucide-react"
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import { getCurrentUser, type UserRole } from "@/lib/auth"

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
  const [user, setUser] = useState<ReturnType<typeof getCurrentUser>>(null)

  useEffect(() => {
    setUser(getCurrentUser())
  }, [])

  if (!user) return null

  // Render different dashboards based on role
  if (user.role === 'school_admin') {
    return <SchoolAdminDashboard />
  }

  if (user.role === 'district_admin') {
    return <DistrictAdminDashboard />
  }

  // Default: Super Admin Dashboard
  return <SuperAdminDashboard />
}

// Super Admin Dashboard (Green Theme)
function SuperAdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <div className="h-1 w-10 bg-green-500 rounded-full"></div>
          <span className="text-xs font-semibold text-green-600 uppercase tracking-wider">Live Dashboard</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Dashboard Overview
        </h1>
        <p className="text-gray-600">
          Monitor student engagement and environmental impact across all schools
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border border-gray-200 hover:shadow-md transition-shadow bg-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-700">Active Students</CardTitle>
            <div className="p-2 bg-green-100 rounded-lg">
              <Users className="h-4 w-4 text-green-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">1,248</div>
            <p className="text-xs text-gray-500 mt-1">
              <span className="text-green-600 font-medium">+12.5%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card className="border border-gray-200 hover:shadow-md transition-shadow bg-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-700">Total Submissions</CardTitle>
            <div className="p-2 bg-blue-100 rounded-lg">
              <Target className="h-4 w-4 text-blue-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">3,456</div>
            <p className="text-xs text-gray-500 mt-1">
              <span className="text-green-600 font-medium">+341</span> this week
            </p>
          </CardContent>
        </Card>

        <Card className="border border-gray-200 hover:shadow-md transition-shadow bg-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-700">Verified Actions</CardTitle>
            <div className="p-2 bg-emerald-100 rounded-lg">
              <CheckCircle className="h-4 w-4 text-emerald-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">2,891</div>
            <p className="text-xs text-gray-500 mt-1">
              <span className="font-medium">83.6%</span> success rate
            </p>
          </CardContent>
        </Card>

        <Card className="border border-gray-200 hover:shadow-md transition-shadow bg-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-700">Total Impact</CardTitle>
            <div className="p-2 bg-orange-100 rounded-lg">
              <Zap className="h-4 w-4 text-orange-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">892 kWh</div>
            <p className="text-xs text-gray-500 mt-1">
              Energy saved this month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid gap-6 md:grid-cols-7">
        {/* Weekly Submissions Chart */}
        <Card className="col-span-4 border border-gray-200 bg-white">
          <CardHeader className="border-b">
            <CardTitle className="text-gray-900">Weekly Submissions</CardTitle>
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
        <Card className="col-span-3 border border-gray-200 bg-white">
          <CardHeader className="border-b">
            <CardTitle className="text-gray-900">Verification Status</CardTitle>
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

      {/* Top Performing Schools */}
      <Card className="border border-gray-200 bg-white">
        <CardHeader className="border-b">
          <CardTitle className="text-gray-900">Top Performing Schools</CardTitle>
          <CardDescription>Schools leading in verified eco-actions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topSchools.map((school, index) => (
              <div key={school.name} className="flex items-center gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600 font-bold text-sm">
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-medium truncate">{school.name}</p>
                  </div>
                  <div className="flex items-center gap-4 mt-1 text-xs text-gray-500">
                    <span>{school.students} students</span>
                    <span>•</span>
                    <span>{school.actions} actions</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-green-600">{school.impact} kWh</p>
                  <p className="text-xs text-gray-500">saved</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// School Admin Dashboard (Blue/Teal Theme - School Focused)
function SchoolAdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <div className="h-1 w-10 bg-blue-500 rounded-full"></div>
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">School Dashboard</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Kigali International School
        </h1>
        <p className="text-gray-600">
          Monitor your school&apos;s eco-impact and student engagement
        </p>
      </div>

      {/* School-Specific Stats - Horizontal Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-l-4 border-l-blue-500 border border-gray-200 bg-white">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-gray-700">Your Students</CardTitle>
              <Users className="h-5 w-5 text-blue-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">120</div>
            <p className="text-xs text-gray-500 mt-1">
              <span className="text-blue-600 font-medium">98 active</span> this week
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-teal-500 border border-gray-200 bg-white">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-gray-700">Pending Verification</CardTitle>
              <Target className="h-5 w-5 text-teal-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">23</div>
            <p className="text-xs text-gray-500 mt-1">
              <span className="text-orange-600 font-medium">Needs review</span>
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-cyan-500 border border-gray-200 bg-white">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-gray-700">School Impact</CardTitle>
              <Zap className="h-5 w-5 text-cyan-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">892 kWh</div>
            <p className="text-xs text-gray-500 mt-1">
              Total energy saved
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Impact Chart - Larger */}
      <Card className="border border-gray-200 bg-white">
        <CardHeader className="border-b bg-blue-50">
          <CardTitle className="text-gray-900">Your School&apos;s Impact</CardTitle>
          <CardDescription>Monthly environmental savings</CardDescription>
        </CardHeader>
        <CardContent className="pl-2">
          <ResponsiveContainer width="100%" height={350}>
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
                stroke="#0ea5e9" 
                strokeWidth={3}
                dot={{ fill: '#0ea5e9', r: 5 }}
                name="Energy (kWh)"
              />
              <Line 
                type="monotone" 
                dataKey="water" 
                stroke="#14b8a6" 
                strokeWidth={3}
                dot={{ fill: '#14b8a6', r: 5 }}
                name="Water (Liters)"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="border border-blue-200 bg-blue-50">
        <CardHeader>
          <CardTitle className="text-gray-900">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-2">
            <button className="p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow text-left">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Review Submissions</p>
                  <p className="text-xs text-gray-500">23 pending verification</p>
                </div>
              </div>
            </button>
            <button className="p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow text-left">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-teal-100 rounded-lg">
                  <Users className="h-5 w-5 text-teal-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">View Students</p>
                  <p className="text-xs text-gray-500">Manage your 120 students</p>
                </div>
              </div>
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// District Admin Dashboard (Purple/Indigo Theme - District Overview)
function DistrictAdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <div className="h-1 w-10 bg-purple-500 rounded-full"></div>
          <span className="text-xs font-semibold text-purple-600 uppercase tracking-wider">District Overview</span>
          <Badge variant="outline" className="ml-2 text-xs">Read-Only</Badge>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Gasabo District
        </h1>
        <p className="text-gray-600">
          Monitor environmental impact across all district schools
        </p>
      </div>

      {/* District-Wide Stats - Grid Layout */}
      <div className="grid gap-6 md:grid-cols-4">
        <Card className="border border-purple-200 bg-purple-50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-purple-900">Total Schools</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-700">5</div>
            <p className="text-xs text-purple-600 mt-1">In your district</p>
          </CardContent>
        </Card>

        <Card className="border border-indigo-200 bg-indigo-50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-indigo-900">Total Students</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-indigo-700">1,248</div>
            <p className="text-xs text-indigo-600 mt-1">Across all schools</p>
          </CardContent>
        </Card>

        <Card className="border border-violet-200 bg-violet-50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-violet-900">Total Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-violet-700">3,456</div>
            <p className="text-xs text-violet-600 mt-1">Verified eco-actions</p>
          </CardContent>
        </Card>

        <Card className="border border-fuchsia-200 bg-fuchsia-50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-fuchsia-900">District Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-fuchsia-700">2,982 kWh</div>
            <p className="text-xs text-fuchsia-600 mt-1">Total energy saved</p>
          </CardContent>
        </Card>
      </div>

      {/* Schools Performance Table */}
      <Card className="border border-gray-200 bg-white">
        <CardHeader className="border-b bg-purple-50">
          <CardTitle className="text-gray-900 flex items-center gap-2">
            <School className="h-5 w-5 text-purple-600" />
            Schools Performance
          </CardTitle>
          <CardDescription>Overview of all schools in Gasabo District</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-4">
            {topSchools.map((school, index) => (
              <div key={school.name} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 text-purple-600 font-bold">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">{school.name}</p>
                  <div className="flex items-center gap-4 mt-1 text-xs text-gray-500">
                    <span>{school.students} students</span>
                    <span>•</span>
                    <span>{school.actions} actions</span>
                    <span>•</span>
                    <span className="text-purple-600 font-medium">{school.impact} kWh saved</span>
                  </div>
                </div>
                <div className="px-4 py-2 bg-white border border-gray-200 rounded-lg">
                  <p className="text-sm text-gray-500">View Details</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Info Banner */}
      <Card className="border border-purple-200 bg-purple-50">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <School className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <p className="font-semibold text-purple-900">Read-Only Access</p>
              <p className="text-sm text-purple-700 mt-1">
                As a District Admin, you have view-only access to monitor schools and students in Gasabo District. 
                Contact system administrators for data modifications.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
