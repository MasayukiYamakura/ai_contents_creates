'use client'

import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface HeaderProps {
  onOpenSidebar: () => void
}

export default function Header({ onOpenSidebar }: HeaderProps) {
  return (
    <header className="bg-gray-900 text-white p-4 flex items-center">
      <Button variant="ghost" size="icon" className="text-white mr-4" onClick={onOpenSidebar}>
        <Menu className="h-6 w-6" />
      </Button>
      <h1 className="text-2xl font-bold">AI Blog Generator</h1>
    </header>
  )
}

