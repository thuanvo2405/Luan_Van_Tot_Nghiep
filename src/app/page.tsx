import Card from "@/components/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import Image from "next/image";
import img from "public/image.png";
import place from "public/place.png";

export default function Home() {
  return (
    <div>
      <nav className="h-[60px] bg-blue-200 w-full flex items-center justify-center mb-4">
        <ul className="flex h-full items-center w-[1284px] gap-2">
          <li>
            <Button variant="destructive">Nhạc sống</Button>
          </li>
          <li>
            <Button>Sân khấu và nghệ thuật</Button>
          </li>
          <li>
            <Button>Thể thao</Button>
          </li>
          <li>
            <Button>Khác</Button>
          </li>
        </ul>
      </nav>

      <div className="w-[1284px] mx-auto relative">
        <div>
          <Carousel opts={{ align: "start" }}>
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="basis-1/2 relative">
                  <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
                    <Image
                      src={img}
                      alt={`slide-${index}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-4 left-4">
                      <Button>Xem chi tiết</Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute top-1/2 left-2 -translate-y-1/2 z-10" />
            <CarouselNext className="absolute top-1/2 right-2 -translate-y-1/2 z-10" />
          </Carousel>

          <div className="flex justify-center mt-4 space-x-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="w-3 h-3 rounded-full bg-gray-300" />
            ))}
          </div>
        </div>

        <div className="mt-8">
          <p className="font-semibold text-lg mb-3">Sự kiện đặt biệt</p>
          <Carousel opts={{ align: "start" }}>
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="basis-1/4 relative">
                  <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
                    <Image
                      src={img}
                      alt={`slide-${index}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute top-1/2 left-2 -translate-y-1/2 z-10" />
            <CarouselNext className="absolute top-1/2 right-2 -translate-y-1/2 z-10" />
          </Carousel>
        </div>

        <div className="mt-8">
          <p className="font-semibold text-lg mb-3">Nhạc sống</p>
          <div className="flex gap-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <Card key={index} />
            ))}
          </div>
        </div>

        <div className="mt-8">
          <p className="font-semibold text-lg mb-3">Sân khấu & Nghệ thuật</p>
          <div className="flex gap-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <Card key={index} />
            ))}
          </div>
        </div>
        <div className="mt-8">
          <p className="font-semibold text-lg mb-3">Thể loại khác</p>
          <div className="flex gap-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <Card key={index} />
            ))}
          </div>
        </div>
        <div className="mt-8">
          <p className="font-semibold text-lg mb-3">Sự kiện theo khu vực</p>
          <div className="flex gap-4 ">
            {Array.from({ length: 4 }).map((_, index) => (
              <Link
                href="/"
                key={index}
                className="relative rounded-2xl overflow-hidden"
              >
                <Image
                  src={place}
                  alt={`slide-${index}`}
                  className="aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-800"></div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
