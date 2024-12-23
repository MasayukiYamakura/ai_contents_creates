'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function BlogGenerator() {
  const [keyword, setKeyword] = useState('')
  const [generatedContent, setGeneratedContent] = useState('')

  const handleGenerate = () => {
    // ここでAI生成ロジックを実装
    setGeneratedContent('生成されたブログ記事がここに表示されます。')
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <Input
          type="text"
          placeholder="キーワードを入力"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="mb-4"
        />
        <div className="grid grid-cols-2 gap-4 mb-4">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="文章量" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="small">小</SelectItem>
              <SelectItem value="medium">中</SelectItem>
              <SelectItem value="large">大</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="文章テイスト" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="formal">フォーマル</SelectItem>
              <SelectItem value="casual">カジュアル</SelectItem>
              <SelectItem value="friendly">フレンドリー</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button onClick={handleGenerate} className="w-full">記事を生成</Button>
      </div>
      <Textarea
        placeholder="生成された記事がここに表示されます"
        value={generatedContent}
        readOnly
        className="h-64"
      />
    </div>
  )
}

