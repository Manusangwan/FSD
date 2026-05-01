import Header from "./components/Header"
import Footer from "./components/Footer"
import { useEffect, useState } from "react"

function App() {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("search")
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 6;
  

  const fetchNews = (query) => {    
    setLoading(true)

    fetch(`https://newsapi.org/v2/everything?q=${query}&from=2026-03-20&sortBy=popularity&apiKey=d0b087ca214c471fab3884ef07f3565f`)
      .then(res => res.json())
      .then(data => {
        setNews(data.articles)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchNews(search)
  }, [])
  const lastIndex = currentPage*itemPerPage;
  const firstIndex = ((currentPage-1)*itemPerPage)+1;

  const currentNews = news.slice(firstIndex-1, lastIndex);
  const totalPages = news.length / itemPerPage;
  setCurrentPage(currentPage+1);


  return (
    <div>
      <Header />

      <div className="search">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search news..."
        />
        <button onClick={() => fetchNews(search)}>
          Search
        </button>
      </div>

      {loading ? (
        <p>Loading news...</p>
      ) : (
        <ul>
          {currentNews.map((article, index) => (
            <li key={index}>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
            </li>
          ))}
        </ul>
      )}

      <Footer />
    </div>
  )
}

export default App