"use client"

import { useState, useEffect } from "react"
import { getCurrentUser } from "@/lib/auth"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Users, TrendingUp, Award, Search, Filter } from "lucide-react"

// Mock data
const students = [
  {
    id: 1,
    name: "Jean Uwimana",
    email: "jean.uwimana@student.rw",
    school: "Kigali International School",
    district: "Gasabo",
    points: 892,
    actionsCompleted: 45,
    energySaved: 128,
    joinedDate: "2026-01-05",
    status: "active",
    rank: 1
  },
  {
    id: 2,
    name: "Grace Mutesi",
    email: "grace.mutesi@student.rw",
    school: "Green Hills Academy",
    district: "Gasabo",
    points: 845,
    actionsCompleted: 42,
    energySaved: 115,
    joinedDate: "2026-01-06",
    status: "active",
    rank: 2
  },
  {
    id: 3,
    name: "David Habimana",
    email: "david.h@student.rw",
    school: "Riviera High School",
    district: "Kicukiro",
    points: 798,
    actionsCompleted: 38,
    energySaved: 102,
    joinedDate: "2026-01-07",
    status: "active",
    rank: 3
  },
  {
    id: 4,
    name: "Alice Murekatete",
    email: "alice.m@student.rw",
    school: "Lycée de Kigali",
    district: "Nyarugenge",
    points: 756,
    actionsCompleted: 36,
    energySaved: 98,
    joinedDate: "2026-01-08",
    status: "active",
    rank: 4
  },
  {
    id: 5,
    name: "Patrick Niyonzima",
    email: "patrick.n@student.rw",
    school: "Kigali International School",
    district: "Gasabo",
    points: 689,
    actionsCompleted: 32,
    energySaved: 89,
    joinedDate: "2026-01-09",
    status: "active",
    rank: 5
  },
]

export default function StudentsPage() {
  const [user, setUser] = useState<ReturnType<typeof getCurrentUser>>(null)

  useEffect(() => {
    setUser(getCurrentUser())
  }, [])

  // Filter students based on role
  const filteredStudents = students.filter(student => {
    if (user?.role === 'school_admin') {
      // Show only students from "Kigali International School"
      return student.school === "Kigali International School"
    }
    if (user?.role === 'district_admin') {
      // Show students from Gasabo district only
      return student.district === "Gasabo"
    }
    // Super admin sees all
    return true
  })

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className={`h-1 w-10 rounded-full ${
              user?.role === 'school_admin' ? 'bg-blue-500' : 
              user?.role === 'district_admin' ? 'bg-purple-500' : 
              'bg-green-500'
            }`}></div>
            <span className={`text-xs font-semibold uppercase tracking-wider ${
              user?.role === 'school_admin' ? 'text-blue-600' : 
              user?.role === 'district_admin' ? 'text-purple-600' : 
              'text-green-600'
            }`}>
              {user?.role === 'school_admin' ? 'Your Students' : 
               user?.role === 'district_admin' ? 'District Students' : 
               'All Students'}
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight">
            {user?.role === 'school_admin' ? 'Your Students' : 'Students Management'}
          </h1>
          <p className="text-muted-foreground mt-1">
            {user?.role === 'school_admin' 
              ? 'Monitor and manage your school\'s student participation'
              : user?.role === 'district_admin'
              ? 'View student participation across Gasabo District'
              : 'Monitor and manage student participation and performance'
            }
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className={user?.role === 'school_admin' ? 'border-l-4 border-l-blue-500' : user?.role === 'district_admin' ? 'border-l-4 border-l-purple-500' : ''}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{filteredStudents.length}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {user?.role === 'school_admin' ? 'In your school' : 
               user?.role === 'district_admin' ? 'In district' : 
               'Registered in program'}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active This Week</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {user?.role === 'school_admin' ? '98' : 
               user?.role === 'district_admin' ? '456' : 
               '1,045'}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-success font-medium">+8.2%</span> vs last week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Top Performer</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">892 pts</div>
            <p className="text-xs text-muted-foreground mt-1">
              {filteredStudents.length > 0 ? filteredStudents[0].name : 'N/A'}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Actions</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">38.6</div>
            <p className="text-xs text-muted-foreground mt-1">Per student this month</p>
          </CardContent>
        </Card>
      </div>

      {/* Students Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>All Students</CardTitle>
              <CardDescription>Complete list of students in the program</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative w-64">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search students..." className="pl-10" />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Filter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Schools</SelectItem>
                  <SelectItem value="kis">KIS</SelectItem>
                  <SelectItem value="gha">GHA</SelectItem>
                  <SelectItem value="riviera">Riviera</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Rank</TableHead>
                <TableHead>Student Name</TableHead>
                <TableHead>School</TableHead>
                <TableHead>District</TableHead>
                <TableHead>Points</TableHead>
                <TableHead>Actions</TableHead>
                <TableHead>Energy Saved</TableHead>
                <TableHead>Joined</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStudents.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">
                      {student.rank}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium">{student.name}</p>
                      <p className="text-xs text-muted-foreground">{student.email}</p>
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{student.school}</TableCell>
                  <TableCell className="text-muted-foreground">{student.district}</TableCell>
                  <TableCell>
                    <span className="font-bold text-primary">{student.points}</span>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{student.actionsCompleted}</Badge>
                  </TableCell>
                  <TableCell className="font-medium">
                    {student.energySaved} kWh
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {student.joinedDate}
                  </TableCell>
                  <TableCell>
                    <Badge variant="success">Active</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

