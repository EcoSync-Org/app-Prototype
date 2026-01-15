"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail, Lock, Leaf, Droplet, Zap, Sun, Wind, ArrowRight } from "lucide-react"

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
      {/* Left Side - Illustration/Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {/* Floating circles */}
          <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-yellow-300/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between p-12 text-white w-full">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-white/20 backdrop-blur-sm p-2 rounded-2xl">
              <Image
                src="/EcoSync.png"
                alt="EcoSync Logo"
                width={50}
                height={50}
                priority
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold">EcoSync</h1>
              <p className="text-sm text-white/80">Admin Portal</p>
            </div>
          </div>

          {/* Main illustration area */}
          <div className="flex-1 flex flex-col justify-center items-center space-y-8">
            <div className="relative">
              {/* Central eco illustration */}
              <div className="relative w-80 h-80">
                {/* Central circle */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-40 h-40 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center border-4 border-white/30">
                    <Leaf className="w-16 h-16 text-white" />
                  </div>
                </div>

                {/* Orbiting elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 animate-bounce">
                  <div className="w-16 h-16 bg-yellow-400/30 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-yellow-300/50">
                    <Sun className="w-8 h-8 text-yellow-100" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 animate-bounce delay-200">
                  <div className="w-16 h-16 bg-blue-400/30 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-blue-300/50">
                    <Droplet className="w-8 h-8 text-blue-100" />
                  </div>
                </div>

                <div className="absolute left-0 top-1/2 -translate-y-1/2 animate-bounce delay-300">
                  <div className="w-16 h-16 bg-orange-400/30 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-orange-300/50">
                    <Zap className="w-8 h-8 text-orange-100" />
                  </div>
                </div>

                <div className="absolute right-0 top-1/2 -translate-y-1/2 animate-bounce delay-100">
                  <div className="w-16 h-16 bg-cyan-400/30 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-cyan-300/50">
                    <Wind className="w-8 h-8 text-cyan-100" />
                  </div>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="text-center space-y-4 max-w-md">
              <h2 className="text-4xl font-bold leading-tight">
                Transform Students into Eco-Leaders
              </h2>
              <p className="text-lg text-white/90">
                Rwanda&apos;s first AI-powered sustainability platform connecting smart energy with verified environmental action
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold">1,248</div>
                <div className="text-sm text-white/70">Active Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">2,982</div>
                <div className="text-sm text-white/70">kWh Saved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">5</div>
                <div className="text-sm text-white/70">Schools</div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-sm text-white/70">
            © 2026 EcoSync. Empowering Rwanda&apos;s sustainable future.
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="w-full max-w-md space-y-8">
          {/* Mobile logo */}
          <div className="lg:hidden text-center mb-8">
            <div className="inline-flex items-center justify-center mb-4">
              <Image
                src="/EcoSync.png"
                alt="EcoSync Logo"
                width={80}
                height={80}
                priority
              />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              EcoSync
            </h1>
          </div>

          {/* Welcome header */}
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-gray-900">Welcome back!</h2>
            <p className="text-gray-600">Sign in to access your admin dashboard</p>
          </div>

          {/* Login form */}
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-4">
              {/* Email input */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email Address
                </Label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-green-500 transition-colors" />
                  </div>
                  <Input
                    id="email"
                    type="email"
                    placeholder="admin@ecosync.rw"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-12 h-12 border-2 border-gray-200 focus:border-green-500 focus:ring-green-500 rounded-xl transition-all"
                    required
                  />
                </div>
              </div>

              {/* Password input */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                    Password
                  </Label>
                  <a 
                    href="#" 
                    className="text-sm font-medium text-green-600 hover:text-green-700 transition-colors"
                  >
                    Forgot password?
                  </a>
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-green-500 transition-colors" />
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-12 h-12 border-2 border-gray-200 focus:border-green-500 focus:ring-green-500 rounded-xl transition-all"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Sign in button */}
            <Button 
              type="submit" 
              className="w-full h-12 text-base font-semibold bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-xl shadow-lg shadow-green-500/30 transition-all duration-300 transform hover:scale-[1.02] group"
              disabled={isLoading}
            >
              {isLoading ? (
                "Signing in..."
              ) : (
                <>
                  Sign in to Dashboard
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-gradient-to-br from-gray-50 to-white text-gray-500">
                  Secure Admin Access
                </span>
              </div>
            </div>

            {/* Info card */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-100 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <Leaf className="h-5 w-5 text-green-600 mt-0.5" />
                </div>
                <div className="text-sm text-gray-700">
                  <strong className="font-semibold">Authorized Access Only</strong>
                  <p className="mt-1 text-gray-600">
                    This portal is for EcoSync administrators, school coordinators, and authorized ministry officials.
                  </p>
                </div>
              </div>
            </div>
          </form>

          {/* Help link */}
          <div className="text-center text-sm text-gray-600">
            Need help accessing your account?{" "}
            <a href="#" className="font-medium text-green-600 hover:text-green-700">
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
