import React from 'react'

const NewsItem = (props) =>{
    let {title,description,imageUrl,newsUrl,author,publishedAt,source} = props;
    let date=new Date(publishedAt).toGMTString();
    return (
      <div className='my-3'>
        <div className="card mx-3">
          <img src={imageUrl} className="card-img-top" alt="news-img"/>
          <span class="badge text-bg-primary" style={{borderRadius:'0',}}>{source}</span>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">By <b>{author}</b>  on  <b>{date}</b> </small></p>
            <a href={newsUrl} target='blank' className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  
}

export default NewsItem