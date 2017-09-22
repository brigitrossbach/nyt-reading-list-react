import React from 'react'

const Search = (props) => {
  return(
    <div className="ui input">
    <form onSubmit={props.handleSubmit}>
    <input type="text" value={props.searchTerm} onChange={props.handleChange} />
    </form>
    </div>
  )
}

export default Search
