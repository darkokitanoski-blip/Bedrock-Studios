import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom';
import Header from '../components/Header';
import {Article, ArticleSub} from '../components/Article';
import Footer from '../components/Footer';
import { Spinner } from '../components/ui/spinner';
import SideBar from '../components/SideBar';
import { CarouslGames } from '../components/CarouslGames';
import { AutoCarousel } from '../components/AutoCarousel';
import { useRef } from 'react';

const StartingPage = () => {

  const [dataArticles, setDataarticles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetching = async () => {
      try {
        const res = await fetch("https://api.spaceflightnewsapi.net/v4/articles/?format=json&limit=14");
        const resjson = await res.json()
        setLoading(false)
        setDataarticles(resjson.results)
        console.log(resjson.results)
      } catch (error) {
        console.log(error)
        setLoading(true)
      }
    }

    fetching()
  }, [])

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    const video = videoRef.current;
    let fadeInTimeout: NodeJS.Timeout;
    let fadeOutTimeout: NodeJS.Timeout;

    const loopVideo = () => {
      video.style.opacity = "0";
      video.style.transition = "opacity 1s ease";
      fadeInTimeout = setTimeout(() => {
        video.style.opacity = "1";
      }, 5000);

      fadeOutTimeout = setTimeout(() => {
        video.style.opacity = "0";
        loopVideo();
      }, 18000);
    };

    loopVideo();

    return () => {
      clearTimeout(fadeInTimeout);
      clearTimeout(fadeOutTimeout);
    };
  }, []);


  return (
    <>
      <Header></Header>
     
      <main className=' lg:flex lg:items-center lg:flex-col relative '>
        <img className='w-full' src="../public/newpic2.png" alt="" />
        <video ref={videoRef} src="../public/compressed.mp4" loop autoPlay muted></video>
        <div className="p-7">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight bottom-[35%] absolute drop-shadow-lg leading-tight">
            Streets n' Heist
          </h1>
          <p className="mt-4 text-lg md:text-xl lg:text-xl text-wrap w-[40%] text-white/90 bottom-[30%] absolute drop-shadow-md">
            Delve into the thrill of grand theft adventures. High-stakes heists, daring chases, and an open world waiting for you.
          </p>
          <div className='platforms bottom-0 absolute flex w-[20%]'>
              <img src="../public/xbox.png" alt="" />
              <img src="../public/ps.png" alt="" />
              <img src="../public/nintendo.png" alt="" />
          </div>
      </div>
      </main>
      <div className='automaticCarouselDiv'>

        <AutoCarousel></AutoCarousel>
        <AutoCarousel></AutoCarousel>
        <span className='opacityShadowDiv absolute'>
          <div className='ShadowDivText'>
            <h1>Spelbibliotek</h1>
            <p className='text-wrap max-w-[35%]'>Alla Bedrock Studios spel på ett ställe - börja med din aventyr här!</p>
          </div>
        </span>
      </div>
      <div className='carouselDiv flex justify-center flex-col  h-[100vh] items-center'>
        <h1 className='text-7xl mb-5'>OUR TOP PICK </h1>
        <CarouslGames></CarouslGames>
      </div>
      <Footer></Footer>

    </>

  )
}

export default StartingPage
