import { SidebarProvider, SidebarTrigger } from "@/src/components/ui/sidebar"
import { Metadata } from "next"
import { AppSidebar } from "./components"


export const metadata: Metadata = {
    title: "Dashboard | TechView",
    description: "Dashboard page",
}

export default function DashboardLayout({children} : {children : React.ReactNode}) {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <SidebarProvider>
      <AppSidebar />
        <main className="w-full min-h-screen p-6">
             <SidebarTrigger />
            <div className="flex justify-between"></div>
                {children}
        </main>
         </SidebarProvider>
    </div>
  )
}
