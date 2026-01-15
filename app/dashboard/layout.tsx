import { Sidebar } from "@/components/dashboard/sidebar"
import { Header } from "@/components/dashboard/header"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto relative">
          {/* Decorative background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-200 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute top-1/2 -left-40 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-emerald-200 rounded-full blur-3xl opacity-20"></div>
          </div>
          <div className="container mx-auto p-6 relative">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

