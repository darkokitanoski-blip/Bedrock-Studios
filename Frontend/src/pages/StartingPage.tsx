import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom';
import Header from '../components/Header';
import {Article, ArticleSub} from '../components/Article';
import Footer from '../components/Footer';
import { Spinner } from '../components/ui/spinner';
import SideBar from '../components/SideBar';
import { CarouslGames } from '../components/carouslGames';

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
     
      <main className='p-4 lg:flex lg:items-center lg:flex-col relative'>
        {/* <h1 className='text-6xl'>InNews</h1> */}

        <section className='flex flex-wrap gap-1  justify-center md:justify-start lg:justify-center lg:max-w-[1300px] lg:mt-[550px]'>
        <div className='sideBar flex justufy-center flex-col lg:absolute relative  top-0  md:right-4 w-[95%] rounded-2xl md:mt-[10px] lg:mt-[840px] lg:w-[70%] lg:max-w-[1200px] lg:h-[440px]  p-4 overflow-auto over'>
            <h1 className='liveParagraph text-6xl'>Live</h1>
            <hr className='opacity-30'/>
        </div>
          {loading ? (<div className='h-screen'><Spinner></Spinner></div>) : 
          ( dataArticles.map((e: any, i) => 
            i === 0 ? 
            (<Article key={i} image={e.image_url} dateArticle={e.published_at} 
            headingArticle={e.title} briefArticle={e.summary} index={e.id}></Article>) :
            (<ArticleSub key={i} image={e.image_url} dateArticle={e.published_at} 
            headingArticle={e.title} briefArticle={e.summary} index={e.id} ></ArticleSub>)
          )
          
          )

          }
          <SideBar></SideBar>

        </section>
      </main>
      <div className='carouselDiv flex justify-center flex-col  h-[100vh] items-center'>
        <h1 className='text-7xl mb-5'>OUR TOP PICK </h1>
        <CarouslGames></CarouslGames>
      </div>
      <Footer></Footer>

    </>

  )
}

export default StartingPage
