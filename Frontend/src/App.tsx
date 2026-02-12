import { useEffect, useState } from 'react'
import './App.css'

  interface Article {
    id: number;
    title: string; 
    url: string;
    image_url: string;
    summary: string;
    news_site: string;
  }

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState<Article[]>([])

  useEffect(() => {
    const fetchData = async () => {
        try {
            const res = await fetch("https://api.spaceflightnewsapi.net/v4/articles/?format=json&limit=10&offset=80")
            const resawait = await res.json()
            console.log(resawait.results)
            setData(resawait.results)
        } catch (err) {
              console.log(err)
            }
        }
    fetchData()
  }, [])
  

}

export default App
