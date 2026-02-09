
import { Spinner } from './ui/spinner'
import { Link } from 'react-router-dom'

// ovoj komonent ke bide za sekoj artikl sto ke se pojavuva na pocetna strana!

const ArticleSub = ({image="", headingArticle="", dateArticle="", briefArticle="", index=0}) => {


  if (headingArticle === "") {
    return (<Spinner></Spinner>)
  }
  console.log(index)

  return (
    <div className='articles z-10  rounded-2xl bg-black lg:w-97 p-8 w-[90%] md:h-[400px] md:overflow-auto md:w-[35%] sm:h-fit md:p-3'>
        <Link to={`/article/${index}`} className='w-full h-full'>
            {image ? (
                  <img src={image} className='w-full h-52 lg:h-55 lg:w-100 md:h-36 '  alt="image Article" />
            ) : null}

            <p className='dateArticle'>
              {dateArticle.slice(0, 10)}
            </p>
            <h1 className='headingArticle text-2xl text-white'>
              {headingArticle}
            </h1>
            <p className='briefArticle text-white'>
              {briefArticle.split("", 159)}
              ...
            </p>
        </Link>
    </div>
  )

}

const Article = ({image="", headingArticle="", dateArticle="", briefArticle="", index=0}) => {

  if (image === "") {
    return (<Spinner></Spinner>)
  }

  return (
    
    <div className='articles z-10 rounded-2xl md:h-[410px] lg:h-[531.75px]  lg:min-h-fit  bg-black w-[90%] lg:p-4 md:w-[100%] lg:w-[780px] items-center md:p-14 p-8 flex md:flex-row md:flex-row flex-col-reverse '>
        <Link to={`/article/${index}`}>
          <div className='lg:30% '>
            <h1 className='headingArticle text-white text-4xl'>
              {headingArticle}
            </h1>
            <p className='dateArticle '>
              {dateArticle.slice(0, 10)}
            </p>
            <p className='briefArticle text-white'>
              {briefArticle}
            </p>
          </div>
          <img src={image} className='md:w-[50%] lg:w-[70%] lg:h-[300px] md:h-54 w-full md:pl-10' alt="image Article" />
        </Link>
    </div>
  )
}

export {Article, ArticleSub}
