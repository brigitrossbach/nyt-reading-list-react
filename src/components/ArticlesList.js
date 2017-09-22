import React from 'react'
import Article from './Article'

const ArticlesList=(props) => {

const allArticles = props.articles.map((article, index) => <Article key={index} article={article} onReadingClick={props.onReadingClick}/>)

    return(
      <div className="all-articles">
      <div className="ui cards">
      {allArticles}
      </div>
      <button onClick={props.onLoadClick}>Load More Articles</button>
      </div>

    )


}

export default ArticlesList
