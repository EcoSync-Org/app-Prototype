"use client"

import { Bell, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Header() {
  return (
    <header className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b bg-white/80 backdrop-blur-xl shadow-sm px-6">
      {/* Search */}
      <div className="flex-1 max-w-md">
        <div className="relative group">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400 group-focus-within:text-green-500 transition-colors" />
          <Input
            type="search"
            placeholder="Search students, schools, challenges..."
            className="pl-10 bg-gray-50 border-gray-200 focus:bg-white focus:border-green-500 focus:ring-green-500 transition-all rounded-xl"
          />
        </div>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="relative hover:bg-green-50 rounded-xl transition-all group">
          <Bell className="h-5 w-5 text-gray-600 group-hover:text-green-600 transition-colors" />
          <Badge 
            className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-gradient-to-r from-green-500 to-emerald-600 border-0 animate-pulse"
          >
            3
          </Badge>
        </Button>
      </div>
    </header>
  )
}

