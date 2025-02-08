'use client'
import Image from 'next/image'
import * as React from 'react'
import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'

export default function ProductSlider() {
  const images = [
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80&w=400&h=300",
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400&h=300",
    "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&q=80&w=400&h=300",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
  ];

  return (
    <div className="flex justify-center">
      <Carousel
        className="w-full max-w-full"
        plugins={[
          Autoplay({
            delay: 2000, // Auto-slide every 2 seconds
            stopOnInteraction: false, 
          }),
        ]}
      >
        <CarouselContent className="w-full flex-nowrap">
          {images.map((src, index) => (
            <CarouselItem key={index} className="flex justify-center items-center">
              <div className="relative w-full h-96 mt-12"> 
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className='opacity-10'/>
        <CarouselPrevious className='opacity-10'/>
      </Carousel>
    </div>
  );
}
