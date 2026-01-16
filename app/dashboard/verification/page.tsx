"use client"

import { useState, useEffect } from "react"
import { getCurrentUser } from "@/lib/auth"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
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
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, XCircle, Clock, Eye, AlertCircle, Image as ImageIcon } from "lucide-react"

// Mock data - will be replaced with real API data
const submissions = [
  {
    id: 1,
    student: "Jean Uwimana",
    school: "Kigali International School",
    challenge: "Waste Sorting Challenge",
    type: "Waste",
    submittedAt: "2026-01-15 10:30",
    aiConfidence: 0.92,
    status: "pending",
    imageUrl: "/api/placeholder/400/300"
  },
  {
    id: 2,
    student: "Grace Mutesi",
    school: "Green Hills Academy",
    challenge: "Solar Peak Usage",
    type: "Energy",
    submittedAt: "2026-01-15 09:45",
    aiConfidence: 0.88,
    status: "pending",
    imageUrl: "/api/placeholder/400/300"
  },
  {
    id: 3,
    student: "David Habimana",
    school: "Riviera High School",
    challenge: "Water Conservation",
    type: "Water",
    submittedAt: "2026-01-15 09:15",
    aiConfidence: 0.75,
    status: "pending",
    imageUrl: "/api/placeholder/400/300"
  },
  {
    id: 4,
    student: "Alice Murekatete",
    school: "Lycée de Kigali",
    challenge: "Lights Off Challenge",
    type: "Energy",
    submittedAt: "2026-01-15 08:50",
    aiConfidence: 0.95,
    status: "verified",
    imageUrl: "/api/placeholder/400/300"
  },
]

export default function VerificationPage() {
  const [selectedSubmission, setSelectedSubmission] = useState<any>(null)
  const [filter, setFilter] = useState("all")
  const [rejectReason, setRejectReason] = useState("")
  const [user, setUser] = useState<ReturnType<typeof getCurrentUser>>(null)

  useEffect(() => {
    setUser(getCurrentUser())
  }, [])

  const handleVerify = (id: number) => {
    // Will be connected to API
    console.log("Verified:", id)
    setSelectedSubmission(null)
  }

  const handleReject = (id: number) => {
    // Will be connected to API
    console.log("Rejected:", id, "Reason:", rejectReason)
    setSelectedSubmission(null)
    setRejectReason("")
  }

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 0.9) return "text-success"
    if (confidence >= 0.7) return "text-warning"
    return "text-destructive"
  }

  const getConfidenceBadge = (confidence: number) => {
    if (confidence >= 0.9) return "success"
    if (confidence >= 0.7) return "warning"
    return "destructive"
  }

  const filteredSubmissions = submissions.filter(sub => {
    // Filter by school for school admins
    if (user?.role === 'school_admin') {
      // Assuming school admin's school is "Kigali International School"
      if (sub.school !== "Kigali International School") return false
    }
    
    // Filter by status
    if (filter === "all") return true
    return sub.status === filter
  })

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className={`h-1 w-10 rounded-full ${user?.role === 'school_admin' ? 'bg-blue-500' : 'bg-green-500'}`}></div>
            <span className={`text-xs font-semibold uppercase tracking-wider ${user?.role === 'school_admin' ? 'text-blue-600' : 'text-green-600'}`}>
              {user?.role === 'school_admin' ? 'School Verification' : 'All Submissions'}
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Verification Queue</h1>
          <p className="text-muted-foreground mt-1">
            {user?.role === 'school_admin' 
              ? 'Review and verify submissions from your school'
              : 'Review and verify student eco-action submissions'
            }
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
            <Clock className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground mt-1">Awaiting manual verification</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Verified Today</CardTitle>
            <CheckCircle className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground mt-1">83.6% approval rate</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Rejected Today</CardTitle>
            <XCircle className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground mt-1">Low confidence or invalid</p>
          </CardContent>
        </Card>
      </div>

      {/* Submissions Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Submissions</CardTitle>
              <CardDescription>Recent eco-action submissions requiring review</CardDescription>
            </div>
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Submissions</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="verified">Verified</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student</TableHead>
                <TableHead>School</TableHead>
                <TableHead>Challenge</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Submitted</TableHead>
                <TableHead>AI Confidence</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredSubmissions.map((submission) => (
                <TableRow key={submission.id}>
                  <TableCell className="font-medium">{submission.student}</TableCell>
                  <TableCell className="text-muted-foreground">{submission.school}</TableCell>
                  <TableCell>{submission.challenge}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{submission.type}</Badge>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {submission.submittedAt}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Badge variant={getConfidenceBadge(submission.aiConfidence)}>
                        {(submission.aiConfidence * 100).toFixed(0)}%
                      </Badge>
                    </div>
                  </TableCell>
                  <TableCell>
                    {submission.status === "pending" && (
                      <Badge variant="warning">
                        <Clock className="w-3 h-3 mr-1" />
                        Pending
                      </Badge>
                    )}
                    {submission.status === "verified" && (
                      <Badge variant="success">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                    {submission.status === "rejected" && (
                      <Badge variant="destructive">
                        <XCircle className="w-3 h-3 mr-1" />
                        Rejected
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedSubmission(submission)}
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      Review
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Review Dialog */}
      <Dialog open={!!selectedSubmission} onOpenChange={(open) => !open && setSelectedSubmission(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Review Submission</DialogTitle>
            <DialogDescription>
              Verify the eco-action submission and take appropriate action
            </DialogDescription>
          </DialogHeader>

          {selectedSubmission && (
            <div className="space-y-4">
              {/* Student Info */}
              <div className="grid grid-cols-2 gap-4 p-4 bg-muted rounded-lg">
                <div>
                  <Label className="text-muted-foreground">Student</Label>
                  <p className="font-medium">{selectedSubmission.student}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">School</Label>
                  <p className="font-medium">{selectedSubmission.school}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Challenge</Label>
                  <p className="font-medium">{selectedSubmission.challenge}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">AI Confidence</Label>
                  <p className={`font-bold ${getConfidenceColor(selectedSubmission.aiConfidence)}`}>
                    {(selectedSubmission.aiConfidence * 100).toFixed(0)}%
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="border rounded-lg overflow-hidden bg-muted/50">
                <div className="aspect-video flex items-center justify-center bg-muted">
                  <ImageIcon className="w-16 h-16 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground ml-2">Submission Image</p>
                </div>
              </div>

              {/* AI Analysis */}
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-blue-900">AI Analysis</p>
                    <p className="text-sm text-blue-700 mt-1">
                      Image appears to show proper waste sorting with recyclables separated. 
                      High confidence match for &quot;Waste Sorting Challenge&quot; criteria.
                    </p>
                  </div>
                </div>
              </div>

              {/* Reject Reason */}
              <div className="space-y-2">
                <Label htmlFor="reason">Rejection Reason (if rejecting)</Label>
                <Select value={rejectReason} onValueChange={setRejectReason}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a reason..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="unclear">Image unclear or blurry</SelectItem>
                    <SelectItem value="incorrect">Incorrect challenge type</SelectItem>
                    <SelectItem value="incomplete">Action incomplete</SelectItem>
                    <SelectItem value="duplicate">Duplicate submission</SelectItem>
                    <SelectItem value="fraudulent">Suspected fraudulent activity</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          <DialogFooter className="gap-2">
            <Button
              variant="outline"
              onClick={() => setSelectedSubmission(null)}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={() => selectedSubmission && handleReject(selectedSubmission.id)}
              disabled={!rejectReason}
            >
              <XCircle className="w-4 h-4 mr-2" />
              Reject
            </Button>
            <Button
              variant="success"
              onClick={() => selectedSubmission && handleVerify(selectedSubmission.id)}
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              Verify & Approve
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

