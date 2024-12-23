'use client'

import { useState, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import { useApiKey } from '../contexts/ApiKeyContext'

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const { apiKey, setApiKey } = useApiKey()
  const [tempApiKey, setTempApiKey] = useState(apiKey)

  useEffect(() => {
    setTempApiKey(apiKey)
  }, [apiKey])

  const handleSave = () => {
    setApiKey(tempApiKey)
    onClose()
  }

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6">
          <Button 
            variant="ghost" 
            size="icon"
            className="absolute right-2 top-2"
            onClick={onClose}
          >
            <X className="h-6 w-6" />
          </Button>
          <h2 className="text-2xl font-semibold mb-6 mt-8">API設定</h2>
          <Input 
            type="password" 
            placeholder="APIキーを入力" 
            className="mb-4"
            value={tempApiKey}
            onChange={(e) => setTempApiKey(e.target.value)}
          />
          <Button className="w-full bg-gray-900 hover:bg-gray-800" onClick={handleSave}>保存</Button>
        </div>
      </div>
    </>
  )
}

