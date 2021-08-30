import "../App.css";
import NewsCard from './NewsCard'
import LiveCard from './LiveCard'
import ShowMoreButton from './ShowMoreButton'
import { useEffect, useState } from "react";

const HomeNews = () => {
  let [news, setNews] = useState([]);
  
  useEffect(() =>{
    fetch('https://saurav.tech/NewsAPI/top-headlines/category/health/in.json')
    .then((response) => response.json())
    .then((response) => {
      setNews(response.articles)})
  }, [])
  
  return (
    <div className="homenews">
      <div className="homenewsleft">
        <div className="newstitleshome">
          <div className="newstitleleft">
            <p className="lateststoryunderline">Latest Stories</p>
            <p>Thinks</p>
            <p>Health</p>
          </div>
          <div className="newstitleright">
            <svg
              width="28"
              height="24"
              viewBox="0 0 28 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.9992 24H1.71417C0.766232 24 0 23.2321 0 22.2858V18.8558C0 17.9096 0.766232 17.1417 1.71417 17.1417H11.9992C12.9454 17.1417 13.7133 17.9096 13.7133 18.8558V22.2858C13.7133 23.2321 12.9454 24 11.9992 24ZM11.9992 19.7129C11.9992 19.2415 11.6135 18.8558 11.1421 18.8558H2.57125C2.09814 18.8558 1.71417 19.2415 1.71417 19.7129V21.4271C1.71417 21.9019 2.09814 22.2858 2.57125 22.2858H11.1421C11.6135 22.2858 11.9992 21.9019 11.9992 21.4271V19.7129ZM11.9992 15.4275H1.71417C0.766232 15.4275 0 14.6613 0 13.7133V10.285C0 9.33878 0.766232 8.57083 1.71417 8.57083H11.9992C12.9454 8.57083 13.7133 9.33878 13.7133 10.285V13.7133C13.7133 14.6613 12.9454 15.4275 11.9992 15.4275ZM11.9992 11.1421C11.9992 10.6707 11.6135 10.285 11.1421 10.285H2.57125C2.09814 10.285 1.71417 10.6707 1.71417 11.1421V12.8562C1.71417 13.3311 2.09814 13.7133 2.57125 13.7133H11.1421C11.6135 13.7133 11.9992 13.3311 11.9992 12.8562V11.1421ZM11.9992 6.85834H1.71417C0.766232 6.85834 0 6.09211 0 5.14417V1.71417C0 0.769661 0.766232 0 1.71417 0H11.9992C12.9454 0 13.7133 0.769661 13.7133 1.71417V5.14417C13.7133 6.09211 12.9454 6.85834 11.9992 6.85834ZM11.9992 2.57125C11.9992 2.09985 11.6135 1.71417 11.1421 1.71417H2.57125C2.09814 1.71417 1.71417 2.09985 1.71417 2.57125V4.28709C1.71417 4.7602 2.09814 5.14417 2.57125 5.14417H11.1421C11.6135 5.14417 11.9992 4.7602 11.9992 4.28709V2.57125Z"
                fill="black"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M25.7124 23.9983H18.8558C17.9078 23.9983 17.1416 23.2321 17.1416 22.2858V1.71584C17.1416 0.767906 17.9078 0 18.8558 0H25.7124C26.6587 0 27.4266 0.767906 27.4266 1.71584V22.2858C27.4266 23.2321 26.6587 23.9983 25.7124 23.9983ZM25.7124 2.57125C25.7124 2.09985 25.3267 1.71584 24.8553 1.71584H19.7129C19.2397 1.71584 18.8558 2.09985 18.8558 2.57125V21.4271C18.8558 21.9002 19.2397 22.2858 19.7129 22.2858H24.8553C25.3267 22.2858 25.7124 21.9002 25.7124 21.4271V2.57125Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
        <div className="newscards">
        {
          news.map((news) => <NewsCard key={news.publishedAt} news={news} />)
        }
        </div>
        <ShowMoreButton />
      </div>
      <div className="homenewsright">
        <LiveCard/>
      </div>
    </div>
  );
};

export default HomeNews;
