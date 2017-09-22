import React, { Component } from 'react';
import ArticlesList from './ArticlesList'
import Nav from './Nav'
import Search from './Search'
import ReadingList from './ReadingList'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import './App.css';

class App extends Component {

state={
  articles: [],
  searchTerm: '',
  i: 0,
  readingList: []
}


componentDidMount(){
    this.fetchInitialArticles(0)
  }
  //
  // let baseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json"
  // let API_KEY = 'a69e1cdbb16b4f23841c8f01be77f31a'

  fetchArticles=()=>{
    let term=this.state.searchTerm
    fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=a69e1cdbb16b4f23841c8f01be77f31a`)
    .then((res) => res.json())
    .then((json) => this.setState({articles: json.response.docs}))
  }

  fetchInitialArticles=()=>{
    let counter = this.state.i
    let currentState = this.state.articles
    fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?page=${counter}&api-key=a69e1cdbb16b4f23841c8f01be77f31a`)
    .then((res) => res.json())
    .then((json) => this.setState({articles: currentState.concat(json.response.docs)}))
    .then(this.setState({i: this.state.i + 1}))
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit=(event) => {
    event.preventDefault()
    this.fetchArticles()
  }

  handleLoadClick=() => {
    this.fetchInitialArticles()
  }

  handleReadingClick = (event) => {
    let allArticles = this.state.articles
    let currentReadingList = this.state.readingList
    let eventId=event.target.parentElement.parentElement.id
    let article = allArticles.find((eachArticle)=> {
      return eachArticle._id === eventId
    })
    let newState = [...currentReadingList, article]
    this.setState({readingList: newState})
    console.log(this.state.readingList)
  }


  render() {
    return (
    <Router>
    <div className="App">
    <Nav />
    <Search searchTerm = {this.state.searchTerm} handleChange = {this.handleChange} handleSubmit={this.handleSubmit}/>
    <br />
    <Route exact path='/' render={({match})=> (
      <ArticlesList articles={this.state.articles} onLoadClick={this.handleLoadClick} onReadingClick={this.handleReadingClick} />
    )} />
    <Route exact path='/readinglist' render={({match}) => (
      <ReadingList readingList={this.state.readingList}/>
    )} />
    </div>
    </Router>
    )
  }
}

export default App;
//<Route exact path='/readinglist' render={ReadingList} />
