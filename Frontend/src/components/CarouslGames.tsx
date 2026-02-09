import * as React from "react"
import { Card, CardContent } from "./ui/card"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel"


export function CarouslGames() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-[12rem] sm:max-w-xs md:max-w-sm"
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="GameDisplayed relative">
                
                <CardContent className="flex aspect-square items-center justify-center p-0 m-0">
                  <img src="../public/Skarmbild_2026-02-09_102204.png" alt="" className="h-full" />
                </CardContent>
                <div className="hoverEffektGame absolute bottom-0 bg-black opacity-70 rounded-xl w-full h-[40%]"></div>
                <div className="hoverEffektGame  absolute bottom-0  rounded-xl w-full h-[40%] p-4">
                    <h2>Spel</h2>
                </div>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
