// sidebar component
import { ArticleSub } from './Article'
import { Spinner } from './ui/spinner'
import { useState, useEffect } from 'react'

const SideBar = () => {

  interface Article {
    id: number;
    title: string;
    summary: string;
    published_at: string;
  }

  const [dataArticles, setDataarticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [offset, setOffset] = useState(10)

    useEffect(() => {
      const fetching = async () => {
        if (offset < 100) {
          try {
            const res = await fetch(`https://api.spaceflightnewsapi.net/v4/articles/?format=json&limit=7&offset=${offset}`);
            const resjson = await res.json();
            
            setDataarticles(resjson.results);
            setLoading(false);
            

            const timer = setTimeout(() => {
              setOffset(prev => prev + 10);
            }, 15000);

            return () => clearTimeout(timer);
          } catch (error) {
            console.error(error);
            setLoading(true);
          }
        } else {
          const timer = setTimeout(() => {
            setOffset(0);
          }, 15000);
          return () => clearTimeout(timer);
        }
      };

      fetching();
    }, [offset]);

  return (
    <div className='sideBar flex z-0 justufy-center flex-col md:absolute relative md:h-[87.3%] top-0 md:w-[28%] md:right-4 w-[95%] rounded-2xl md:mt-[520px] lg:mt-[440px] lg:w-[70%] lg:max-w-[1200px] lg:h-[440px]  p-4 overflow-auto over'>
        <h1 className='text-6xl'>HighLights</h1>
        <hr className='opacity-30'/>
        <section id='highlights' className=' flex  md:flex-col lg:mt-[80px] gap-5 justify-center md:justify-start lg:justify-center lg:w-full '>
          
          {loading ? (<Spinner></Spinner>) : 
          ( dataArticles.map((e, i) => 
            
            i === 0 ? 
            null :
            (<ArticleSub key={i} dateArticle={e.published_at} 
            headingArticle={e.title} briefArticle={e.summary} index={e.id} ></ArticleSub>)
           
          )
          
          )

          }
        </section>
    </div>
  )
}

export default SideBar
