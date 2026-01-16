"use client"

import { useEffect, useState } from "react"
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
import { getCurrentUser, logout, type UserRole } from "@/lib/auth"

const allMenuItems = [
  {
    title: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard,
    roles: ['super_admin', 'school_admin', 'district_admin'] as UserRole[],
  },
  {
    title: "Verification",
    href: "/dashboard/verification",
    icon: CheckCircle,
    roles: ['super_admin', 'school_admin'] as UserRole[],
  },
  {
    title: "Schools",
    href: "/dashboard/schools",
    icon: School,
    roles: ['super_admin', 'district_admin'] as UserRole[],
  },
  {
    title: "Students",
    href: "/dashboard/students",
    icon: Users,
    roles: ['super_admin', 'school_admin', 'district_admin'] as UserRole[],
  },
  {
    title: "Challenges",
    href: "/dashboard/challenges",
    icon: Target,
    roles: ['super_admin'] as UserRole[],
  },
  {
    title: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3,
    roles: ['super_admin', 'school_admin', 'district_admin'] as UserRole[],
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const [user, setUser] = useState<ReturnType<typeof getCurrentUser>>(null)
  
  useEffect(() => {
    setUser(getCurrentUser())
  }, [])
  
  // Filter menu items based on user role
  const menuItems = allMenuItems.filter(item => 
    user ? item.roles.includes(user.role) : true
  )
  
  const getUserInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase()
  }

  return (
    <div className="flex h-full w-64 flex-col bg-white border-r border-gray-200">
      {/* Logo */}
      <div className="flex h-20 items-center gap-3 px-6 border-b border-gray-200">
        <Image
          src="/EcoSync.png"
          alt="EcoSync Logo"
          width={48}
          height={48}
          priority
          className="shrink-0"
        />
        <div>
          <h1 className="text-lg font-bold text-gray-900">EcoSync</h1>
          <p className="text-xs text-gray-500">Admin Portal</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-4">
        {menuItems.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon
          
          return (
            <Link key={item.href} href={item.href}>
              <div
                className={cn(
                  "flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-green-500 text-white"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                )}
              >
                <Icon className="h-5 w-5" />
                {item.title}
              </div>
            </Link>
          )
        })}
      </nav>

      {/* User Section */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-3 mb-3 p-3 rounded-lg bg-gray-50">
          <Avatar>
            <AvatarFallback className="bg-green-500 text-white font-semibold">
              {user ? getUserInitials(user.name) : 'U'}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-900 truncate">
              {user?.name || 'User'}
            </p>
            <p className="text-xs text-gray-500 truncate">
              {user?.email || ''}
            </p>
          </div>
        </div>
        <Button 
          variant="outline" 
          className="w-full justify-start text-gray-700 hover:bg-gray-100 rounded-lg" 
          size="sm"
          onClick={logout}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Sign out
        </Button>
      </div>
    </div>
  )
}

