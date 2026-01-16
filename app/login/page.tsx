"use client"

import Image from "next/image"
import { Shield, School, Building2, ArrowRight } from "lucide-react"

const roles = [
  {
    id: "super_admin",
    name: "Super Admin",
    description: "Full access to all features and schools",
    icon: Shield,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: "school_admin",
    name: "School Admin",
    description: "Manage your school's students & verification",
    icon: School,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: "district_admin",
    name: "District Admin",
    description: "View district-wide impact (read-only)",
    icon: Building2,
    gradient: "from-purple-500 to-fuchsia-500",
  },
]

const setPortal = (roleId: string) => {
  const roleNames: Record<string, string> = {
    super_admin: "Super Admin",
    school_admin: "School Admin",
    district_admin: "District Admin",
  }

  if (typeof window === "undefined") return
  localStorage.setItem("userRole", roleId)
  localStorage.setItem("userEmail", `${roleId}@ecosync.rw`)
  localStorage.setItem("userName", roleNames[roleId])
  window.location.href = "/dashboard"
}

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-linear-to-br from-green-500 via-emerald-500 to-teal-500 relative overflow-hidden">
        {/* Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="diagonalStripes" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="60" y2="60" stroke="white" strokeWidth="3" />
                <line x1="15" y1="0" x2="75" y2="60" stroke="white" strokeWidth="3" />
                <line x1="30" y1="0" x2="90" y2="60" stroke="white" strokeWidth="3" />
                <line x1="45" y1="0" x2="105" y2="60" stroke="white" strokeWidth="3" />
                <line x1="-15" y1="0" x2="45" y2="60" stroke="white" strokeWidth="3" />
                <line x1="-30" y1="0" x2="30" y2="60" stroke="white" strokeWidth="3" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#diagonalStripes)" />
          </svg>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center w-full p-12 text-center text-white">
          <Image src="/EcoSync.png" alt="EcoSync" width={220} height={220} priority className="mb-6" />
          <h2 className="text-3xl font-bold mb-4">EcoSync</h2>
          <p className="text-lg font-light max-w-md leading-relaxed opacity-95">
            Rwanda's first AI-powered sustainability platform connecting smart energy with verified environmental action
          </p>
        </div>

        <div className="absolute bottom-8 left-0 right-0 text-center z-10">
          <p className="text-sm text-white/70">© 2026 EcoSync. All rights reserved.</p>
        </div>
      </div>

      {/* Right Side - Portal Selection */}
      <div className="flex-1 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-xl space-y-8">
          {/* Header */}
          <div className="text-center space-y-3">
            <div className="lg:hidden mx-auto mb-6">
              <Image src="/EcoSync.png" alt="EcoSync" width={80} height={80} priority />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">Select Portal</h1>
            <p className="text-gray-600 text-lg">Choose your admin portal to continue</p>
          </div>

          {/* Portal Cards */}
          <div className="space-y-4">
            {roles.map((portal) => {
              const Icon = portal.icon
              return (
                <button
                  key={portal.id}
                  onClick={() => setPortal(portal.id)}
                  className="group w-full flex items-center gap-5 p-6 bg-white border-2 border-gray-200 rounded-2xl hover:border-green-500 transition-all cursor-pointer"
                >
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-linear-to-br ${portal.gradient} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-left">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{portal.name}</h3>
                    <p className="text-sm text-gray-500">{portal.description}</p>
                  </div>

                  {/* Arrow */}
                  <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-green-500 group-hover:translate-x-1 transition-all" />
                </button>
              )
            })}
          </div>

          {/* Footer Note */}
          <div className="text-center">
            <p className="text-sm text-gray-500">
              No credentials required • Instant access
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
