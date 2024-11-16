"use client";

import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { hotelImages } from '@/data/imageUrls'
import { regions } from '@/data/regions' // regions 데이터를 가져옵니다.
import { accommodationDetails } from '@/data/accommodationDetails' // accommodationDetails 데이터를 가져옵니다.
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">인기 여행지</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {regions.map((region) => (
              <Link href={`/region?name=${region.name}`} key={region.name} className="group">
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src={region.image} // 문자열 경로를 직접 사용
                    alt={`${region.name} 이미지`}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{region.name}</h3>
                    <p className="text-sm">{region.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">추천 숙소</h2>
          {regions.map((region, index) => (
            <div key={region.name} className="mb-8">
              <h3 className="text-xl font-semibold mb-4">{region.name}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((item) => {
                  const imageUrl = hotelImages[(index * 4 + item - 1) % hotelImages.length];
                  const accommodation = accommodationDetails[(index * 4 + item - 1) % accommodationDetails.length];
                  return (
                    <Link href={`/lodging-detail?title=${encodeURIComponent(accommodation.title)}`} key={item}>
                      <Card>
                        <CardContent className="p-0">
                          <Image
                            src={imageUrl.toString()}
                            alt={`${region.name} 숙소 ${item} 이미지`}
                            width={800}
                            height={600}
                            className="w-full h-48 object-cover rounded-t-lg" // 상단 라운딩 클래스 추가
                          />
                        </CardContent>
                        <CardFooter className="flex flex-col items-start p-4">
                          <h3 className="font-semibold mb-2">{accommodation.title}</h3>
                          <p className="text-gray-500 mb-2">{accommodation.description}</p>
                        </CardFooter>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  )
}