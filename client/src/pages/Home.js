import { useEffect,useState } from "react"
import NewsItems from "../../../client/src/components/NewsItems"
import PropTypes from 'prop-types'
const Home = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
} 

const updateNews = async ()=> {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=a86141db9baa418e8562752d987d53e9&page=1&pageSize=5`; 
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json()
    props.setProgress(70);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100);
}

useEffect(() => {
  console.log(props.category);
    document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
 
    updateNews(); 
    // eslint-disable-next-line
}, [])


const fetchMoreData = async () => {   
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1) 
    let data = await fetch(url);
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  };
    return (
      <>
      <div className="newsContainer text-center">
      <h2>Top Headlines</h2>
      </div>
      <div className="flex flex-wrap justify-start">
        <NewsItems />
        <NewsItems />
        <NewsItems />
        <NewsItems />
        <NewsItems />
        <NewsItems />
        <NewsItems />
        <NewsItems />
        <NewsItems />
      </div>
       </>
      
    )
  }
  
  export default Home