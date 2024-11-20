"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, Users, Bed, Bath, Wifi, Car, Coffee, MapPin } from 'lucide-react';
import { hotelImages } from '@/data/imageUrls';
import { accommodationDetails } from '@/data/accommodationDetails';
import Header from '@/components/header';
import Footer from '@/components/footer';

const LodgingDetail = () => {
  const searchParams = useSearchParams();
  const [title, setTitle] = useState<string | undefined>(undefined);
  const [accommodation, setAccommodation] = useState<{ title: string; description: string; link: string; } | null>(null);

  useEffect(() => {
    const queryTitle = searchParams.get('title');
    if (queryTitle) {
      setTitle(decodeURIComponent(queryTitle));
    }
  }, [searchParams]);

  useEffect(() => {
    if (title) {
      const foundAccommodation = accommodationDetails.find(acc => acc.title === title);
      setAccommodation(foundAccommodation || null);
    } else {
      setAccommodation(null);
    }
  }, [title]);

  const handleBookingClick = () => {
    if (accommodation && accommodation.link) {
      window.open(accommodation.link, '_blank');
    } else {
      alert('외부 링크를 찾을 수 없습니다.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <Link href="/" className="text-blue-500 hover:underline mb-4 inline-block">&larr; 목록으로 돌아가기</Link>
        
        <h1 className="text-3xl font-bold mb-6">{title ? `${title}` : '기본 제목'}</h1>
        
        <div className="flex items-center justify-between mb-6">
          <div className="text-2xl font-semibold">₩150,000 / 박</div>
          <div className="flex items-center">
            <Star className="text-yellow-400 mr-1" />
            <span className="font-semibold mr-2">4.9</span>
            <span className="text-gray-500">(132 후기)</span>
          </div>
        </div>
        <p className="text-gray-600 mb-6">
          <MapPin className="inline mr-2" />
          서울특별시 중구 명동길 14, 302호
        </p>

        <div className="flex flex-col gap-4">
          {hotelImages.length > 0 && (
            <Image 
              src={hotelImages[Math.floor(Math.random() * hotelImages.length)]} 
              alt="숙소 대표 이미지" 
              width={800} 
              height={400} 
              className="rounded-lg w-full h-auto"
            />
          )}
          <div className="grid grid-cols-3 gap-4">
            {hotelImages.slice(1, 4).map((image, index) => (
              <Image 
                key={index}
                src={hotelImages[Math.floor(Math.random() * hotelImages.length)]} 
                alt={`숙소 이미지 ${index + 1}`} 
                width={300} 
                height={200} 
                className="rounded-lg w-full h-auto"
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 my-6">
          <Button className="flex-1" onClick={handleBookingClick}>실시간 예약하기</Button>
          <Button variant="outline" className="flex-1">문의하기</Button>
        </div>

        <Tabs defaultValue="description" className="mt-8">
          <TabsList>
            <TabsTrigger value="description">설명</TabsTrigger>
            <TabsTrigger value="amenities">편의시설</TabsTrigger>
            <TabsTrigger value="reviews">후기</TabsTrigger>
          </TabsList>
          <TabsContent value="description">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">숙소 설명</h3>
                <p className="mb-4">
                  109 하우스는 서울 시내 중심에 위치해 있어 편리한 교통과 함께 도시의 주요 명소들을 쉽게 방문할 수 있습니다. 
                  현대적인 인테리어와 편안한 분위기로 여행객들에게 안락한 휴식 공간을 제공합니다.
                </p>
                <p className="mb-4">
                  <strong>주소:</strong> 서울특별시 중구 명동길 14, 302호
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Users className="mr-2" />
                    <span>최대 4인 수용</span>
                  </div>
                  <div className="flex items-center">
                    <Bed className="mr-2" />
                    <span>퀸 사이즈 침대 2개</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="mr-2" />
                    <span>욕실 1개</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-2" />
                    <span>서울시 중구</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="amenities">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">편의시설</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Wifi className="mr-2" />
                    <span>무료 Wi-Fi</span>
                  </div>
                  <div className="flex items-center">
                    <Car className="mr-2" />
                    <span>무료 주차</span>
                  </div>
                  <div className="flex items-center">
                    <Coffee className="mr-2" />
                    <span>커피 메이커</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="mr-2" />
                    <span>샴푸/컨디셔너</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="reviews">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">게스트 후기</h3>
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <div className="flex items-center mb-2">
                      <Star className="text-yellow-400 mr-1" />
                      <span className="font-semibold">5.0</span>
                    </div>
                    <p className="text-gray-700">
                      &quot;정말 좋은 숙소였습니다. 깨끗하고 위치도 좋아서 편하게 지냈어요. 호스트님도 친절하셔서 다음에 또 이용하고 싶어요!&quot;
                    </p>
                    <p className="text-gray-500 text-sm mt-2">- 김철수, 2023년 5월</p>
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <Star className="text-yellow-400 mr-1" />
                      <span className="font-semibold">4.5</span>
                    </div>
                    <p className="text-gray-700">
                      &quot;전체적으로 만족스러웠습니다. 다만 주변이 조금 시끄러워서 예민하신 분들은 참고하세요.&quot;
                    </p>
                    <p className="text-gray-500 text-sm mt-2">- 이영희, 2023년 4월</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default LodgingDetail;
