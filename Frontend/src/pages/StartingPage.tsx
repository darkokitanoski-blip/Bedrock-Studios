import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom';
import Header from '../components/Header';

import Footer from '../components/Footer';

import { CarouslGames } from '../components/CarouslGames';
import { AutoCarousel } from '../components/AutoCarousel';
import { useRef } from 'react';

const StartingPage = () => {

  const videoRef = useRef<HTMLVideoElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const titleGameRef = useRef<HTMLHeadingElement>(null);
  const pGameRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const image = imageRef.current;
    const title = titleGameRef.current;
    const logoNintendo = logoRef.current
    const logoPc = logoRef.current
    const p = pGameRef.current
    if (!video || !image || !title || !p || !logoNintendo || !logoPc) return;
  
    let currentTurn = 1;
    let timeout: NodeJS.Timeout;
  
    const loopVideo = () => {
      video.style.transition = "opacity 1s ease";
      image.style.transition = "opacity 1s ease";
      video.style.opacity = "0";
  
      setTimeout(() => {
        if (currentTurn === 1) {
          video.style.transition = "opacity 1s ease";
          video.style.opacity = "0";
          image.style.transition = "opacity 1s ease";
          title.style.transition = "opacity 1s ease";
          video.src = "/compressed.mp4";
          image.src = "/newpic2.png";
          title.innerHTML = "Streets n' Heist";
          logoNintendo.style.opacity = "1"
          logoPc.style.transform = "translate(290%, 0px)"
          p.innerHTML = " Delve into the thrill of grand theft adventures. High-stakes heists, daring chases, and an open world waiting for you."
          currentTurn = 0;
        } else {
          video.style.transition = "opacity 1s ease";
          video.style.opacity = "0";
          image.style.transition = "opacity 1s ease";
          title.style.transition = "opacity 1s ease";
          video.src = "/mayagame.mp4";
          image.src = "/MAYOgame.png";
          title.innerHTML = "Parry Vs God";
          logoNintendo.style.opacity = "0"
          p.innerHTML = "Explore this open world game where you meet a strong boss. Can you defeat it?"
          currentTurn = 1;
        }
  
        video.load();
        video.style.opacity = "1";
        video.play();
        
      }, 5000);
  
      timeout = setTimeout(loopVideo, 18000);
    };
  
    loopVideo();
  
    return () => clearTimeout(timeout);
  }, []);
  


  return (
    <>
      <Header></Header>
     
      <main className=' lg:flex lg:items-center lg:flex-col relative '>
        <img ref={imageRef} className='w-full' src="../public/newpic2.png" alt="" />
        <video ref={videoRef} src="../public/compressed.mp4" loop autoPlay muted></video>
        <div className="InfoDiv p-7  ">
          <h1 ref={titleGameRef} className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight bottom-[35%] absolute drop-shadow-lg leading-tight">
            Streets n' Heist
          </h1>
          <p ref={pGameRef} className="mt-4 text-lg md:text-xl lg:text-xl text-wrap w-[40%] text-white/90 bottom-[30%] absolute drop-shadow-md">
            Delve into the thrill of grand theft adventures. High-stakes heists, daring chases, and an open world waiting for you.
          </p>

          <div className='platforms h-[5vh] bottom-[20%] absolute flex w-[13%]'>
            <p className='absolute -translate-y-7'>Avalialbe platoforms:</p>
              <img src="../public/xbox.png" alt="" />
              <img src="../public/ps.png" alt="" />
              <img ref={logoRef} src="../public/nintendo.png" alt="" />
              <img ref={logoRef} id='pcPic' src="../public/pc.png" alt="" />
          </div>

          <div className='platforms h-[5vh] right-20 bottom-[37%] absolute flex  w-[13%]'>
            <div className="buttons">
                <button className="blob-btn">

                  <h2 className='text-md'>Download Now</h2>
                  <span className="blob-btn__inner">
                    <span className="blob-btn__blobs">
                      <span className="blob-btn__blob"></span>
                      <span className="blob-btn__blob"></span>
                      <span className="blob-btn__blob"></span>
                      <span className="blob-btn__blob"></span>
                    </span>
                  </span>
                </button>
                <br/>
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                  <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
                    <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          <div className='platforms h-[5vh] right-20 bottom-[28%] absolute w-[13%]'>
            <div className="buttonsOpenGame">
                <button className="OpenGameBtn blob-btn">

                  <h2 className='text-md'>Open Game Page</h2>
                  <span className="blob-btn__inner">
                    <span className="blob-btn__blobs">
                      <span className="blob-btn__blob"></span>
                      <span className="blob-btn__blob"></span>
                      <span className="blob-btn__blob"></span>
                      <span className="blob-btn__blob"></span>
                    </span>
                  </span>
                </button>
                <br/>
            </div>
          </div>
      </div>
      
      </main>
      <div className='automaticCarouselDiv'>

        <AutoCarousel></AutoCarousel>
        <div id='delayedCarousel'>

          <AutoCarousel></AutoCarousel>
        </div>
        <span className='opacityShadowDiv absolute'>
          <div className='ShadowDivText'>
            <h1>Spelbibliotek</h1>
            <p className='text-wrap max-w-[35%]'>Alla Bedrock Studios spel på ett ställe - börja med din aventyr här!</p>
          </div>
        </span>
      </div>
      <div className='carouselDiv flex justify-center flex-col h-[100vh] items-center'>
        <h1 className='text-7xl mb-5'>OUR TOP PICK </h1>
        <CarouslGames></CarouslGames>
      </div>
      <Footer></Footer>

    </>

  )
}

export default StartingPage
