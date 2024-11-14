"use client";

import { Menu, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'
// import Image from 'next/image'  // 사용하지 않는 경우 주석 처리 또는 삭제
import Link from 'next/link'
import { useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export default function Home() {
  const regions = ["서울", "부산", "제주", "강원", "경기", "인천"]
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-rose-500 text-2xl font-bold">STAY Inside</Link>
          <nav className="hidden md:flex items-center space-x-4">
            {regions.map((region) => (
              <Link key={region} href={`#${region}`} className="text-gray-500 hover:text-gray-700">{region}</Link>
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
                  <DropdownMenuItem key={region} asChild>
                    <Link href={`#${region}`}>{region}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 flex-grow">
        <section>
          <h2 className="text-2xl font-bold mb-6">인기 여행지</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {regions.map((region) => (
              <Card key={region}>
                <CardContent className="p-0">
                  <div className="w-full h-48 bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-600">{region} 이미지</span>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-start p-4">
                  <h3 className="font-semibold mb-2">{region}</h3>
                  <p className="text-gray-500 mb-2">인기 여행지</p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">추천 숙소</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <Card key={item}>
                <CardContent className="p-0">
                  <div className="w-full h-48 bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-600">숙소 {item} 이미지</span>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-start p-4">
                  <h3 className="font-semibold mb-2">멋진 숙소 {item}</h3>
                  <p className="text-gray-500 mb-2">서울, 한국</p>
                  <p className="font-semibold">₩100,000 / 박</p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">회사 정보</h3>
              <ul className="space-y-2 text-sm">
                <li>상호 : 주식회사 만실 | 대표이사 : 신승문</li>
                <li>사업자등록번호 : 728-88-02744</li>
                <li>개인정보관리책임자 : 신승문</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">연락처</h3>
              <ul className="space-y-2 text-sm">
                <li>대표전화 : 1511-0000</li>
                <li>주소 : 경기도 하남시 미사강변중앙로 210,405호(망월동,메디피아타워)</li>
                <li>Email : mansil@support.com</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              Copyright (c) 만실. All rights reserved.
            </div>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </Link>
              <Link href="https://www.instagram.com/stayinside_o/" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Youtube size={20} />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}