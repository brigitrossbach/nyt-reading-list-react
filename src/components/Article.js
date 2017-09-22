import React from 'react'

const Article = ({article, onReadingClick}) => {
  return(
  <div className="card" id={article._id}>
  <div className="content">
  <div className="header"><a href={article.web_url}>{article.headline.main}</a></div>
  <div className="description">{article.snippet}</div>
  <br />
  <button className="ui button" onClick={onReadingClick}>Add to Reading List</button>
  </div>
  </div>
)
}

export default Article
