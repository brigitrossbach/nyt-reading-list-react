import React from 'react'
import Article from './Article'

const ReadingList = (props) => {
  console.log(props)
  const allArticles = props.readingList.map((article, index) => <Article key={index} article={article}/>)

      return(
        <div className="reading-list">
          <div className="ui cards">
            {allArticles}
          </div>
        </div>
      )


  }

  export default ReadingList
