import React from 'react';
import { Link } from 'react-router-dom';
import Book from './Reusables/Book';


class SearchPage extends React.Component {



  render() {

    console.log(this.props);

    const { currentlyReading, wantToRead, read } = this.props.books;
    const { updateBookShelf } = this.props;

    console.log(currentlyReading);

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          <div>

            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">

                  {currentlyReading.map(element => <Book key={element.id} data={element} updateBookShelf={updateBookShelf} />)
                  }

                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {wantToRead.map(element => <Book key={element.id} data={element} updateBookShelf={updateBookShelf} />)
                  }
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {read.map(element => <Book key={element.id} data={element} updateBookShelf={updateBookShelf} />)
                  }
                </ol>
              </div>
            </div>
          </div>
        </div>

        <Link to="/search">
          <div className="open-search">
            <button />
          </div>
        </Link>

      </div>
    )

  }

}


export default SearchPage;