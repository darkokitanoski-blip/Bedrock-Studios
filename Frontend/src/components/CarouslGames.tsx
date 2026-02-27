import { Card, CardContent } from "./ui/card"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel"



// Carousel-komponent som är inte automatisk och används för att redovisa spel.
export function CarouslGames() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-48 sm:max-w-xs md:max-w-sm "
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent>
      <CarouselItem className="basis-1/1 flex  justify-center md:block lg:basis-1/3" onClick={() => window.location.href = "/streetsnheist"}>
        <div className="p-2">
          <Card className="relative overflow-hidden rounded-2xl group">

            <CardContent className="p-0 aspect-square">
              <img
                src="/newpic.png"
                alt="Streets n Heists"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </CardContent>

            {/* Gradient overlay */}
            <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-[100%] md:opacity-0  group-hover:opacity-100 transition-opacity duration-500" />

            {/* Text */}
            <div className="absolute inset-x-0 bottom-5 md:bottom-0 p-5 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 md:opacity-0">
              <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight text-white">
                Streets n Heists
              </h2>
              <p className="text-sm text-white/70 mt-1">
                Action · Crime · Open World
              </p>
            </div>

          </Card>
        </div>
      </CarouselItem>


<CarouselItem className="basis-1/1 flex justify-center md:block lg:basis-1/3" onClick={() => window.location.href = "/parryvsgod"}>
  <div className="p-2">
    <Card className="relative overflow-hidden rounded-2xl group">

      <CardContent className="p-0 aspect-square">
        <img
          src="/image_1.jpg"
          alt="Streets n Heists"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </CardContent>

      {/* Gradient overlay */}
      <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-[100%] md:opacity-0  group-hover:opacity-100 transition-opacity duration-500" />

      {/* Text */}
      <div className="absolute inset-x-0 bottom-5 md:bottom-0 p-5 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 md:opacity-0">
        <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight text-white">
          Parry vs God
        </h2>
        <p className="text-sm text-white/70 mt-1">
          Action · RPG · Open World
        </p>
      </div>

    </Card>
  </div>
</CarouselItem>
<CarouselItem className="basis-1/1 flex  justify-center md:block lg:basis-1/3" onClick={() => window.location.href = "/streetsnheist"}>
        <div className="p-2">
          <Card className="relative overflow-hidden rounded-2xl group">

            <CardContent className="p-0 aspect-square">
              <img
                src="/newpic.png"
                alt="Streets n Heists"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </CardContent>

            {/* Gradient overlay */}
            <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-[100%] md:opacity-0  group-hover:opacity-100 transition-opacity duration-500" />

            {/* Text */}
            <div className="absolute inset-x-0 bottom-5 md:bottom-0 p-5 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 md:opacity-0">
              <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight text-white">
                Streets n Heists
              </h2>
              <p className="text-sm text-white/70 mt-1">
                Action · Crime · Open World
              </p>
            </div>

          </Card>
        </div>
      </CarouselItem>
      <CarouselItem className="basis-1/1 flex justify-center md:block lg:basis-1/3" onClick={() => window.location.href = "/parryvsgod"}>
  <div className="p-2">
    <Card className="relative overflow-hidden rounded-2xl group">

      <CardContent className="p-0 aspect-square">
        <img
          src="/image_1.jpg"
          alt="Streets n Heists"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </CardContent>

      {/* Gradient overlay */}
      <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-[100%] md:opacity-0  group-hover:opacity-100 transition-opacity duration-500" />

      {/* Text */}
      <div className="absolute inset-x-0 bottom-5 md:bottom-0 p-5 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 md:opacity-0">
        <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight text-white">
          Parry vs God
        </h2>
        <p className="text-sm text-white/70 mt-1">
          Action · RPG · Open World
        </p>
      </div>

    </Card>
  </div>
</CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
