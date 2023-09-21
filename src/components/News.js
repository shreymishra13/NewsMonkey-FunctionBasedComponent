import React, { useEffect, useState } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner'


const News = (props) => {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const newsUpdate = async (page, category) => {
    props.setProgress(10);
    setLoading(true);
    props.setProgress(30);
    let url = "https://newsapi.org/v2/top-headlines?country=" + props.country + "&category=" + category + "&apiKey=7d1be05007f347bbb7e01e726825a52e&page=" + page + "&pageSize=" + props.pages;
    props.setProgress(60);
    let articles = await fetch(url);
    props.setProgress(80);
    let parsedArticles = await articles.json();
    props.setProgress(100);
    setArticles(parsedArticles.articles);
    setTotalResults(parsedArticles.totalResults);
    setLoading(false);

  }

  useEffect(()=>{
    newsUpdate(page,props.category)
 // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  const handleForPrev = async () => {
    setPage(page-1)
    newsUpdate(page,props.category);

  }
  const handleForNext = async () => {

    
    setPage(page+1)
    newsUpdate(page, props.category);


  }



  let category =props.category
  //capitalizing the first letter
  category = category.charAt(0).toUpperCase() + category.slice(1);
  return (

    <div className="container my-3"  >
      <div className="row my-3">
        <h1 className="text-center" style={{marginTop:"85px"}}>
          NewsMonkey - Top Headlines for Today
        </h1>
        <h2 className="text-center">
          Category : {category}

        </h2>
        {loading && <Spinner />}


        {articles.map((element) => {
          if (!(element.title === null || element.url === null || element.description === null || element.title === "[Removed]")) {
            return (<div className="col-md-3 my-3" key={element.url}>
              {!loading && <NewsItems title={element.title.slice(0, 40)} description={element.description.slice(0, 160)} picUrl={element.urlToImage} url={element.url} author={element.author === null ? "Unknown" : element.author} time={element.publishedAt} />}

            </div>)
          }
          else {
            return null;
          }

        })}

      </div>
      <div className="container d-flex justify-content-center my-3">
        <button disabled={page <= 1} className="btn btn-dark mx-3" onClick={handleForPrev}>
          &larr; Prev

        </button>
        <button disabled={page > (totalResults / 20)} className="btn btn-dark mx-3" onClick={handleForNext}>
          Next &rarr;

        </button>
      </div>



    </div>



  )
}

export default News;