import Link from 'next/link'
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">회사 정보</h3>
            <ul className="space-y-2 text-sm">
              <li>상호 : 주식회사 만실</li>
              <li>대표 : 신승문</li>
              <li>사업자등록번호 : 728-88-02744</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">연락처</h3>
            <ul className="space-y-2 text-sm">
              <li>대표전화 : 1511-0000</li>
              <li>주소 : 경기도 하남시 미사강변중앙로 210,405호(망월동,메디피아타워)</li>
              <li>Email : mansil@support.com</li>
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
  )
}