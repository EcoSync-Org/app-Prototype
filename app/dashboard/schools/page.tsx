"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { School, Plus, Users, TrendingUp, MapPin, Mail, Phone, Edit, Trash2 } from "lucide-react"

// Mock data
const schools = [
  {
    id: 1,
    name: "Kigali International School",
    district: "Gasabo",
    students: 120,
    activeStudents: 98,
    totalActions: 456,
    energySaved: 892,
    email: "admin@kis.rw",
    phone: "+250 788 123 456",
    status: "active"
  },
  {
    id: 2,
    name: "Green Hills Academy",
    district: "Gasabo",
    students: 95,
    activeStudents: 87,
    totalActions: 398,
    energySaved: 756,
    email: "admin@gha.rw",
    phone: "+250 788 234 567",
    status: "active"
  },
  {
    id: 3,
    name: "Riviera High School",
    district: "Kicukiro",
    students: 88,
    activeStudents: 76,
    totalActions: 342,
    energySaved: 689,
    email: "admin@riviera.rw",
    phone: "+250 788 345 678",
    status: "active"
  },
  {
    id: 4,
    name: "Lycée de Kigali",
    district: "Nyarugenge",
    students: 102,
    activeStudents: 89,
    totalActions: 325,
    energySaved: 645,
    email: "admin@lycee.rw",
    phone: "+250 788 456 789",
    status: "active"
  },
]

export default function SchoolsPage() {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [selectedSchool, setSelectedSchool] = useState<any>(null)
  const [formData, setFormData] = useState({
    name: "",
    district: "",
    email: "",
    phone: "",
  })

  const handleAddSchool = () => {
    console.log("Adding school:", formData)
    setIsAddDialogOpen(false)
    setFormData({ name: "", district: "", email: "", phone: "" })
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Schools Management</h1>
          <p className="text-muted-foreground mt-1">
            Manage schools participating in the EcoSync program
          </p>
        </div>
        <Button onClick={() => setIsAddDialogOpen(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Add School
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Schools</CardTitle>
            <School className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground mt-1">Across 3 districts</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,248</div>
            <p className="text-xs text-muted-foreground mt-1">Enrolled in program</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Students</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,045</div>
            <p className="text-xs text-muted-foreground mt-1">83.7% engagement rate</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Combined Impact</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,982 kWh</div>
            <p className="text-xs text-muted-foreground mt-1">Total energy saved</p>
          </CardContent>
        </Card>
      </div>

      {/* Schools Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Schools</CardTitle>
          <CardDescription>Overview of schools in the EcoSync program</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>School Name</TableHead>
                <TableHead>District</TableHead>
                <TableHead>Students</TableHead>
                <TableHead>Active</TableHead>
                <TableHead>Total Actions</TableHead>
                <TableHead>Energy Saved</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {schools.map((school) => (
                <TableRow key={school.id}>
                  <TableCell className="font-medium">{school.name}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      {school.district}
                    </div>
                  </TableCell>
                  <TableCell>{school.students}</TableCell>
                  <TableCell>
                    <span className="text-success font-medium">{school.activeStudents}</span>
                  </TableCell>
                  <TableCell>{school.totalActions}</TableCell>
                  <TableCell className="font-medium text-primary">
                    {school.energySaved} kWh
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Mail className="w-3 h-3" />
                        {school.email}
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Phone className="w-3 h-3" />
                        {school.phone}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="success">Active</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="w-4 h-4 text-destructive" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Add School Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New School</DialogTitle>
            <DialogDescription>
              Register a new school to the EcoSync program
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">School Name</Label>
              <Input
                id="name"
                placeholder="e.g., Kigali International School"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="district">District</Label>
              <Select 
                value={formData.district}
                onValueChange={(value) => setFormData({ ...formData, district: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select district" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gasabo">Gasabo</SelectItem>
                  <SelectItem value="kicukiro">Kicukiro</SelectItem>
                  <SelectItem value="nyarugenge">Nyarugenge</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@school.rw"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+250 788 123 456"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddSchool}>
              <Plus className="w-4 h-4 mr-2" />
              Add School
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

