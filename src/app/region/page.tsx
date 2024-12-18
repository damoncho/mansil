"use client";

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { hotelImages } from '@/data/imageUrls';
import { accommodationDetails } from '@/data/accommodationDetails';
import Link from 'next/link';
import Image from 'next/image';

// 클라이언트 컴포넌트
const RegionPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RegionContent />
    </Suspense>
  );
};

const RegionContent = () => {
  const [regionName, setRegionName] = useState<string | undefined>(undefined);
  const searchParams = useSearchParams();
  const [shuffledAccommodations, setShuffledAccommodations] = useState<{ title: string; description: string; link: string; }[]>([]);

  useEffect(() => {
    const name = searchParams.get('name');
    if (name) {
      setRegionName(name);
    }
  }, [searchParams]);

  useEffect(() => {
    if (accommodationDetails.length > 0) {
      const shuffled = [...accommodationDetails].sort(() => Math.random() - 0.5);
      setShuffledAccommodations(shuffled);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <h2 className="text-2xl font-bold mb-6">{regionName ? `${regionName} 추천 숙소` : '추천 숙소'}</h2>
        <div className="mb-8">
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
                        alt={`숙소 ${index + 1} 이미지`}
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
      <Footer />
    </div>
  );
};

export default RegionPage;