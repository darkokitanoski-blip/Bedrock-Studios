import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom';
import Header from '../components/Header';
import {Article, ArticleSub} from '../components/Article';
import Footer from '../components/Footer';
import { Spinner } from '../components/ui/spinner';
import SideBar from '../components/SideBar';
import { CarouslGames } from '../components/CarouslGames';
import { AutoCarousel } from '../components/AutoCarousel';

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


  return (
    <>
      <Header></Header>
     
      <main className=' lg:flex lg:items-center lg:flex-col relative '>
        <img className='w-full' src="../public/newpic2.png" alt="" />
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
