import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class BookSearch extends Component {
  
  state = {
    searchedBooks: []
  }

  handleSearch = (e) => {
    if (e.target.value.length > 0) {
      BooksAPI.search(e.target.value).then(searchedBooks => {
        this.setState({ searchedBooks: searchedBooks})
      })
    }
    else {
      this.setState({searchedBooks: []})
    } 
  }

  render() {
    let categorizedBooks = []
    if (this.state.searchedBooks.length > 0) {
      this.state.searchedBooks.forEach((bookNotCategorized) => {
        this.props.books.forEach((book) => {
          if (bookNotCategorized.id === book.id) {  
            bookNotCategorized.shelf = book.shelf
          }     
        })
        categorizedBooks.push(bookNotCategorized)
      })
    }
    

    return ( 
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input onChange={this.handleSearch} type="text" placeholder="Search by title or author" />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {categorizedBooks.map((book, index) => (
              <Book
                key={index} 
                book={book}
                onUpdateBook={this.props.onUpdateBook}
              />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookSearch