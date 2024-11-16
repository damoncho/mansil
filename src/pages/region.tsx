"use client";

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'; // useRouter 훅을 import
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { hotelImages } from '@/data/imageUrls'
import { accommodationDetails } from '@/data/accommodationDetails'
import { regions } from '@/data/regions'
import Header from '@/components/header' // Header 컴포넌트를 import
import Footer from '@/components/footer' // Footer 컴포넌트를 import

export default function RegionListings() {
  const router = useRouter();
  const { name } = router.query; // 쿼리에서 지역 이름을 가져옴
  const [regionName, setRegionName] = useState('');
  const [shuffledAccommodations, setShuffledAccommodations] = useState<{ title: string; description: string; link: string; }[]>([]);

  useEffect(() => {
    if (router.isReady && name) { // router.isReady를 추가하여 라우터가 준비되었는지 확인
      setRegionName(name as string); // name이 존재할 때만 setRegionName 호출
      localStorage.setItem('regionName', name as string); // 지역 이름을 로컬 스토리지에 저장
    } else {
      const storedRegionName = localStorage.getItem('regionName');
      if (storedRegionName) {
        setRegionName(storedRegionName); // 로컬 스토리지에서 지역 이름을 가져옴
      }
    }
  }, [router.isReady, name]); // 의존성 배열에 router.isReady 추가

  useEffect(() => {
    if (accommodationDetails.length > 0) {
      const shuffled = [...accommodationDetails].sort(() => Math.random() - 0.5);
      setShuffledAccommodations(shuffled);
    }
  }, [accommodationDetails]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header /> {/* Header 컴포넌트를 사용하여 헤더를 대체 */}
      <main className="container mx-auto px-4 py-8 flex-grow">
        <h2 className="text-2xl font-bold mb-6">{regionName ? `${regionName} 추천 숙소` : '추천 숙소'}</h2> {/* 지역 이름을 포함하여 제목 표시 */}
        <div key={regionName} className="mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {shuffledAccommodations.map((accommodation, index) => {
              const randomImageIndex = Math.floor(Math.random() * hotelImages.length);
              const imageUrl = hotelImages[randomImageIndex];
              return (
                <Link href={`/lodging-detail?title=${encodeURIComponent(accommodation.title)}`} key={index}>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-0">
                      <Image
                        src={imageUrl.toString()}
                        alt={`${regionName} 숙소 ${index + 1} 이미지`}
                        width={800}
                        height={600}
                        className="w-full h-48 object-cover rounded-t-lg"
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
      </main>
      <Footer /> {/* Footer 컴포넌트를 사용하여 푸터를 추가 */}
    </div>
  )
}