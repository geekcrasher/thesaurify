import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import { Toaster } from "@/components/ui/toaster"

function App() {

  return (
    <main className="min-h-screen w-full flex flex-col relative">
      <Navbar />
      <Outlet />
      <Toaster />
    </main>
  )
}

export default App
