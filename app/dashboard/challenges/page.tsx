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
import { Target, Plus, Edit, Trash2, Power, Zap, Droplet, Recycle, Users } from "lucide-react"

// Mock data
const challenges = [
  {
    id: 1,
    title: "Waste Sorting Challenge",
    type: "Waste",
    description: "Properly sort recyclables, organic, and general waste",
    points: 50,
    impact: "Reduces landfill waste",
    participants: 342,
    completions: 289,
    status: "active",
    icon: Recycle
  },
  {
    id: 2,
    title: "Solar Peak Usage",
    type: "Energy",
    description: "Use heavy appliances during midday solar peak hours",
    points: 75,
    impact: "2-3 kWh saved per action",
    participants: 256,
    completions: 198,
    status: "active",
    icon: Zap
  },
  {
    id: 3,
    title: "Water Conservation",
    type: "Water",
    description: "Collect and reuse greywater for plants",
    points: 60,
    impact: "10-15 liters saved",
    participants: 189,
    completions: 145,
    status: "active",
    icon: Droplet
  },
  {
    id: 4,
    title: "Lights Off Challenge",
    type: "Energy",
    description: "Turn off all unnecessary lights during daylight hours",
    points: 40,
    impact: "1-2 kWh saved per day",
    participants: 425,
    completions: 378,
    status: "active",
    icon: Power
  },
]

export default function ChallengesPage() {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    description: "",
    points: "",
    impact: "",
  })

  const handleAddChallenge = () => {
    console.log("Adding challenge:", formData)
    setIsAddDialogOpen(false)
    setFormData({ title: "", type: "", description: "", points: "", impact: "" })
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Energy": return "text-orange-600 bg-orange-100"
      case "Water": return "text-blue-500 bg-blue-100"
      case "Waste": return "text-green-600 bg-green-100"
      default: return "text-gray-600 bg-gray-100"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Energy": return Zap
      case "Water": return Droplet
      case "Waste": return Recycle
      default: return Target
    }
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Challenge Management</h1>
          <p className="text-muted-foreground mt-1">
            Create and manage eco-challenges for students
          </p>
        </div>
        <Button onClick={() => setIsAddDialogOpen(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Create Challenge
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Challenges</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground mt-1">Across all categories</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Participants</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,212</div>
            <p className="text-xs text-muted-foreground mt-1">Students engaged</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completions</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,010</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-success font-medium">83.3%</span> success rate
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Most Popular</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-base font-bold">Lights Off</div>
            <p className="text-xs text-muted-foreground mt-1">425 participants</p>
          </CardContent>
        </Card>
      </div>

      {/* Challenge Cards Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
        {challenges.map((challenge) => {
          const Icon = challenge.icon
          return (
            <Card key={challenge.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg ${getTypeColor(challenge.type)}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{challenge.title}</CardTitle>
                      <CardDescription className="mt-1">
                        {challenge.description}
                      </CardDescription>
                    </div>
                  </div>
                  <Badge variant="success">Active</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Points Value</span>
                    <span className="font-bold text-primary">{challenge.points} pts</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Impact</span>
                    <span className="font-medium">{challenge.impact}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Participants</span>
                    <span className="font-medium">{challenge.participants}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Completions</span>
                    <span className="font-medium text-success">{challenge.completions}</span>
                  </div>
                  
                  <div className="pt-3 flex items-center gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Edit className="w-4 h-4 mr-1" />
                      Edit
                    </Button>
                    <Button variant="outline" size="sm">
                      <Trash2 className="w-4 h-4 text-destructive" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Detailed Table View */}
      <Card>
        <CardHeader>
          <CardTitle>All Challenges</CardTitle>
          <CardDescription>Complete overview of all challenges in the system</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Challenge</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Points</TableHead>
                <TableHead>Participants</TableHead>
                <TableHead>Completions</TableHead>
                <TableHead>Success Rate</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {challenges.map((challenge) => {
                const Icon = getTypeIcon(challenge.type)
                const successRate = ((challenge.completions / challenge.participants) * 100).toFixed(1)
                
                return (
                  <TableRow key={challenge.id}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className={`p-1.5 rounded ${getTypeColor(challenge.type)}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-medium">{challenge.title}</p>
                          <p className="text-xs text-muted-foreground">{challenge.impact}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{challenge.type}</Badge>
                    </TableCell>
                    <TableCell className="font-bold text-primary">{challenge.points}</TableCell>
                    <TableCell>{challenge.participants}</TableCell>
                    <TableCell className="font-medium">{challenge.completions}</TableCell>
                    <TableCell>
                      <span className="text-success font-medium">{successRate}%</span>
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
                )
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Add Challenge Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Create New Challenge</DialogTitle>
            <DialogDescription>
              Design a new eco-challenge for students to complete
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Challenge Title</Label>
              <Input
                id="title"
                placeholder="e.g., Waste Sorting Challenge"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="type">Challenge Type</Label>
              <Select 
                value={formData.type}
                onValueChange={(value) => setFormData({ ...formData, type: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="energy">Energy</SelectItem>
                  <SelectItem value="water">Water</SelectItem>
                  <SelectItem value="waste">Waste</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                placeholder="Describe what students need to do..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="points">Points Value</Label>
                <Input
                  id="points"
                  type="number"
                  placeholder="50"
                  value={formData.points}
                  onChange={(e) => setFormData({ ...formData, points: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="impact">Expected Impact</Label>
                <Input
                  id="impact"
                  placeholder="e.g., 2-3 kWh saved"
                  value={formData.impact}
                  onChange={(e) => setFormData({ ...formData, impact: e.target.value })}
                />
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddChallenge}>
              <Plus className="w-4 h-4 mr-2" />
              Create Challenge
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

