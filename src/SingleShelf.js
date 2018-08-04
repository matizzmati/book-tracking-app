import React, { Component } from 'react'
import Book from './Book'

class SingleShelf extends Component {
  
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">  
            {this.props.books.map((book, index) => (
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

export default SingleShelf