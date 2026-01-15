"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail, Lock, ArrowRight } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    setTimeout(() => {
      window.location.href = "/dashboard"
    }, 1000)
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Clean Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 relative overflow-hidden">
        {/* Diagonal Stripes Pattern - Covering Entire Background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="diagonalStripes" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="60" y2="60" stroke="white" strokeWidth="3"/>
                <line x1="15" y1="0" x2="75" y2="60" stroke="white" strokeWidth="3"/>
                <line x1="30" y1="0" x2="90" y2="60" stroke="white" strokeWidth="3"/>
                <line x1="45" y1="0" x2="105" y2="60" stroke="white" strokeWidth="3"/>
                <line x1="-15" y1="0" x2="45" y2="60" stroke="white" strokeWidth="3"/>
                <line x1="-30" y1="0" x2="30" y2="60" stroke="white" strokeWidth="3"/>
              </pattern>
            </defs>
            
            {/* Apply pattern to entire background */}
            <rect x="0" y="0" width="100%" height="100%" fill="url(#diagonalStripes)"/>
          </svg>
        </div>

        {/* Content - Centered */}
        <div className="relative z-10 flex items-center justify-center w-full p-12">
          <div className="text-center">
            {/* Large Logo */}
            <div className="mb-8">
              <Image
                src="/EcoSync.png"
                alt="EcoSync"
                width={200}
                height={200}
                priority
                className="mx-auto drop-shadow-2xl relative z-20"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-8 left-0 right-0 text-center z-10">
          <p className="text-sm text-white/60">© 2026 EcoSync. All rights reserved.</p>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden text-center mb-8">
            <Image
              src="/EcoSync.png"
              alt="EcoSync"
              width={80}
              height={80}
              priority
              className="mx-auto mb-3"
            />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              EcoSync
            </h1>
          </div>

          {/* Welcome */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back</h2>
            <p className="text-gray-600">Sign in to your account</p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email Address
              </Label>
              <div className="relative group">
                <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400 group-focus-within:text-green-500 transition-colors" />
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@ecosync.rw"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-11 h-12 border-2 border-gray-200 focus:border-green-500 rounded-xl"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Password
                </Label>
                <a href="#" className="text-sm font-medium text-green-600 hover:text-green-700">
                  Forgot?
                </a>
              </div>
              <div className="relative group">
                <Lock className="absolute left-3 top-3.5 h-5 w-5 text-gray-400 group-focus-within:text-green-500 transition-colors" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-11 h-12 border-2 border-gray-200 focus:border-green-500 rounded-xl"
                  required
                />
              </div>
            </div>

            {/* Submit */}
            <Button 
              type="submit" 
              className="w-full h-12 text-base font-semibold bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 rounded-xl shadow-lg hover:shadow-xl transition-all group"
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign in"}
              {!isLoading && <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />}
            </Button>
          </form>

          {/* Help */}
          <p className="text-center text-sm text-gray-600 mt-8">
            Need help?{" "}
            <a href="#" className="font-medium text-green-600 hover:text-green-700">
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
