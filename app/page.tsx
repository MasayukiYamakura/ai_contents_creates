'use client'

import { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import BlogGenerator from './components/BlogGenerator'
import { ApiKeyProvider } from './contexts/ApiKeyContext'

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <ApiKeyProvider>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header onOpenSidebar={() => setIsSidebarOpen(true)} />
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        <main className="flex-1 p-8 max-w-4xl mx-auto w-full">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">AI駆動ブログ記事生成ツール</h1>
          <BlogGenerator />
        </main>
      </div>
    </ApiKeyProvider>
  )
}

