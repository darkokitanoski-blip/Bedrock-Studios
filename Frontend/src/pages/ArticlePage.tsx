import { useEffect } from 'react'
import SideBar from '../components/SideBar'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { Spinner } from '../components/ui/spinner'
import Footer from '../components/Footer'

const ArticlePage = () => {

  type Article = {
    title: string,
    img_url: string,
    summary: string,  
    published_at: string,
    image_url: string,
    url: string
  }

  const [dataArticles, setDataarticles] = useState<Article | null>(null)
  const [loading, setLoading] = useState(true)

  const indexId = useParams()

  useEffect(() => {
    const fetching = async () => {
      try {
        const res = await fetch("https://api.spaceflightnewsapi.net/v4/articles/?format=json&limit=100");
        const resjson = await res.json()

        setDataarticles(resjson.results)
        const theNewsArticle = resjson.results.filter((e: any) => {
            return String(e.id) === indexId.id
        })
        setDataarticles(theNewsArticle[0])
                setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(true)
      }
    }

    fetching()
    // na sekoj nov params, da se fetcha od ponovo!
  }, [indexId])

  return (
    
    <>
      <Header></Header>
      {loading  && dataArticles ? (<div className='h-screen'><Spinner></Spinner></div>) : (
        <div className='flex flex-col md:flex-row min-h-[100vh] max-w-[1900px] items-center lg:pr-44 lg:pl-44 lg:mt-10 p-10 '>

            <div className='lg:w-[50%] md:w-[60%]'>
                <h1 className='text-7xl'>{dataArticles?.title}</h1>
                {dataArticles?.image_url === null? <Spinner></Spinner>:<img src={dataArticles?.image_url} className='sm:max-h-[500px] min-h-100' alt="image" /> }
                <p>{dataArticles?.published_at}</p>
                <p className='w-[100%]'>{dataArticles?.summary}</p>
                <br />
                <p></p>
                <a href={dataArticles?.url} className='w-[100px]' target='_blank'>Read more(source)</a>
            </div>
            <div className='md:absolute lg:w-[50%] lg:translate-x-[73%] lg:h-screen md:-translate-x-[7%] md:-translate-y-[70%] md:h-[80%] md:w-[100%] lg:md:-translate-y-[0%] '>

              <SideBar></SideBar>
            </div>
        </div>
    )
    }
    <Footer></Footer>
    </>
  )
}

export default ArticlePage
