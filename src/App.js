import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Bookshelf from './Bookshelf'
import BookSearch from './BookSearch'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
  
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  moveBook = (book, e) => {
    book.shelf=e.target.value
    this.setState({books: this.state.books}) 
    BooksAPI.update(book, e.target.value).then(() => {
      BooksAPI.getAll().then((books) => {
        this.setState({ books: books })
      })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <Bookshelf
            books={this.state.books}
            onUpdateBook={this.moveBook}
          />
        )}/>
        <Route path="/search" render={({ history }) => (
          <BookSearch
            books={this.state.books}
            onUpdateBook={this.moveBook}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
