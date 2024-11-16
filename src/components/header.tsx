import { Menu } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { regions } from '@/data/regions'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center">
        <Link href="/" className="text-rose-500 text-2xl font-bold mr-auto">STAY Inside</Link>
        <nav className="hidden md:flex items-center justify-center space-x-4">
          {regions.map((region) => (
            <Link key={region.name} href={`/region?name=${encodeURIComponent(region.name)}`} className="text-gray-500 hover:text-gray-700">{region.name}</Link>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              {regions.map((region) => (
                <DropdownMenuItem key={region.name} asChild>
                  <Link href={`/region?name=${encodeURIComponent(region.name)}`}>{region.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}