import { Card, CardContent } from "./ui/card"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselItem,
  CarouselContentAuto
} from "./ui/carousel"


export function AutoCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="CarouselAuto w-375 sm:max-w-xs md:max-w-sm"
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContentAuto>
      <CarouselItem className=" basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="GameDisplayed relative">
                
                <CardContent className="flex aspect-square items-center justify-center p-0 m-0">
                  <img src="../public/Skarmbild_2026-02-09_102204.png" alt="" className="h-full" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className=" basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="GameDisplayed relative">
                
                <CardContent className="flex aspect-square items-center justify-center p-0 m-0">
                  <img src="../public/newpic2.png" alt="" className="h-full" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className=" basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="GameDisplayed relative">
                
                <CardContent className="flex aspect-square items-center justify-center p-0 m-0">
                  <img src="../public/image_1.jpg" alt="" className="h-full" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className=" basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="GameDisplayed relative">
                
                <CardContent className="flex aspect-square items-center justify-center p-0 m-0">
                  <img src="../public/Skarmbild_2026-02-09_102204.png" alt="" className="h-full" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className=" basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="GameDisplayed relative">
                
                <CardContent className="flex aspect-square items-center justify-center p-0 m-0">
                  <img src="../public/mayogame3.png" alt="" className="h-full" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className=" basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="GameDisplayed relative">
                
                <CardContent className="flex aspect-square items-center justify-center p-0 m-0">
                  <img src="../public/wasted.png" alt="" className="h-full" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className=" basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="GameDisplayed relative">
                
                <CardContent className="flex aspect-square items-center justify-center p-0 m-0">
                  <img src="../public/mayogaming2.png" alt="" className="h-full" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className=" basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="GameDisplayed relative">
                
                <CardContent className="flex aspect-square items-center justify-center p-0 m-0">
                  <img src="../public/Skarmbild_2026-02-09_102104.png" alt="" className="h-full" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

          <CarouselItem className=" basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="GameDisplayed relative">
                
                <CardContent className="flex aspect-square items-center justify-center p-0 m-0">
                  <img src="../public/image_1.jpg" alt="" className="h-full" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className=" basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="GameDisplayed relative">
                
                <CardContent className="flex aspect-square items-center justify-center p-0 m-0">
                  <img src="../public/newpic2.png" alt="" className="h-full" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className=" basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="GameDisplayed relative">
                
                <CardContent className="flex aspect-square items-center justify-center p-0 m-0">
                  <img src="../public/newpic.png" alt="" className="h-full" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className=" basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="GameDisplayed relative">
                
                <CardContent className="flex aspect-square items-center justify-center p-0 m-0">
                  <img src="../public/Skarmbild_2026-02-09_102204.png" alt="" className="h-full" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
      </CarouselContentAuto>

    </Carousel>
  )
}
