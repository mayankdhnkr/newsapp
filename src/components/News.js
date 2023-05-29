import React, {useEffect,useState} from "react";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

import newsBanner from "./assets/newsBanner.png";

const News = (props) => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const updatePage = async() => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(70);
        console.log(parsedData);

        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)

        props.setProgress(100);
    }

     const fetchMoreData = async() =>{
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1)
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);

        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
    }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
        updatePage();

    }, [])

        return (
            <div className="container my-3">
                <h1 className="text-center mb-4 fw-bolder" style={{marginTop:"90px"}}>
                    NewsMonkey -{" "}
                    {capitalizeFirstLetter(props.category)} Headlines
                </h1>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={
                        articles.length !== totalResults
                    }
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row gx-0">
                            {articles.map((element) => {
                                return (
                                    <div className="col-md-4" key={element.url}>
                                        <NewsItem
                                            title={
                                                element.title
                                                    ? element.title.slice(0, 45)
                                                    : "None"
                                            }
                                            description={
                                                element.description
                                                    ? element.description.slice(
                                                          0,
                                                          88
                                                      )
                                                    : "None"
                                            }
                                            imageUrl={
                                                element.urlToImage
                                                    ? element.urlToImage
                                                    : newsBanner
                                            }
                                            newsUrl={element.url}
                                            author={
                                                element.author
                                                    ? element.author
                                                    : "Unknown"
                                            }
                                            publishedAt={element.publishedAt}
                                            source={element.source.name}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </div>
        );
}

News.defaultProps = {
        country: "in",
        pageSize: 8,
        category: "general",
    };

News.propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    };

export default News;
