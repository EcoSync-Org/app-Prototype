"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { 
  LayoutDashboard, 
  CheckCircle, 
  School, 
  Target, 
  BarChart3, 
  LogOut,
  Users
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const menuItems = [
  {
    title: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Verification",
    href: "/dashboard/verification",
    icon: CheckCircle,
  },
  {
    title: "Schools",
    href: "/dashboard/schools",
    icon: School,
  },
  {
    title: "Students",
    href: "/dashboard/students",
    icon: Users,
  },
  {
    title: "Challenges",
    href: "/dashboard/challenges",
    icon: Target,
  },
  {
    title: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3,
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-full w-64 flex-col bg-gradient-to-b from-white to-gray-50 border-r border-gray-200 shadow-sm">
      {/* Logo */}
      <div className="flex h-16 items-center gap-3 px-4 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl blur opacity-20"></div>
          <Image
            src="/EcoSync.png"
            alt="EcoSync Logo"
            width={40}
            height={40}
            priority
            className="shrink-0 relative"
          />
        </div>
        <div>
          <h1 className="text-lg font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-blue-600 bg-clip-text text-transparent">
            EcoSync
          </h1>
          <p className="text-xs text-gray-500">Admin Portal</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-3">
        {menuItems.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon
          
          return (
            <Link key={item.href} href={item.href}>
              <div
                className={cn(
                  "flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-all duration-200 group",
                  isActive
                    ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/30 scale-[1.02]"
                    : "text-gray-600 hover:bg-green-50 hover:text-green-700 hover:scale-[1.02]"
                )}
              >
                <Icon className={cn(
                  "h-5 w-5 transition-transform group-hover:scale-110",
                  isActive ? "text-white" : "text-gray-500 group-hover:text-green-600"
                )} />
                {item.title}
              </div>
            </Link>
          )
        })}
      </nav>

      {/* User Section */}
      <div className="p-4 border-t border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="flex items-center gap-3 mb-3 p-2 rounded-xl bg-gradient-to-r from-green-50 to-blue-50">
          <Avatar className="ring-2 ring-green-200">
            <AvatarFallback className="bg-gradient-to-br from-green-500 to-emerald-600 text-white font-semibold">
              SA
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-800 truncate">Super Admin</p>
            <p className="text-xs text-gray-500 truncate">admin@ecosync.rw</p>
          </div>
        </div>
        <Button 
          variant="outline" 
          className="w-full justify-start border-gray-200 hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-all rounded-xl" 
          size="sm"
        >
          <LogOut className="mr-2 h-4 w-4" />
          Sign out
        </Button>
      </div>
    </div>
  )
}

