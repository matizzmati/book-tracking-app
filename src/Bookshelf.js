import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SingleShelf from './SingleShelf'

class Bookshelf extends Component {
  
  render() {
    const { books } = this.props

    let currentlyRead = books.filter((book) => book.shelf === 'currentlyReading')
    let wantToRead = books.filter((book) => book.shelf === 'wantToRead')
    let read = books.filter((book) => book.shelf === 'read')

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <SingleShelf onUpdateBook={this.props.onUpdateBook} books={currentlyRead} title="Currently Reading" />
            <SingleShelf onUpdateBook={this.props.onUpdateBook} books={wantToRead} title="Want to Read" />
            <SingleShelf onUpdateBook={this.props.onUpdateBook} books={read} title="Read" />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default Bookshelf