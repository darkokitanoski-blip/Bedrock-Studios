import * as React from "react"
import { Card, CardContent } from "./ui/card"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselContentAuto
} from "./ui/carousel"


export function AutoCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="CarouselAuto w-[1500px] sm:max-w-xs md:max-w-sm"
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContentAuto>
        {Array.from({ length: 55 }).map((_, index) => (
          <CarouselItem key={index} className=" basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="GameDisplayed relative">
                
                <CardContent className="flex aspect-square items-center justify-center p-0 m-0">
                  <img src="../public/Skarmbild_2026-02-09_102204.png" alt="" className="h-full" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContentAuto>

    </Carousel>
  )
}
