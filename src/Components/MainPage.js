import React from 'react';
import { Link } from 'react-router-dom';
import Book from './Reusables/Book';
import Loader from './Reusables/Loader';


class SearchPage extends React.Component {

  state = {
    books: [],
    loading: true
  }
  componentDidMount() {
    this.setState({
      books: this.props.books,
      loading: false
    })
  }

  render() {
    const { books } = this.props;
    const { updateBookShelf } = this.props;

    return (
      <div className="list-books">

        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        {
          (!this.state.loading) ?
            (<div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {
                        books.filter((element) =>
                          element.shelf === "currentlyReading"
                        ).map(element => <Book key={element.id} data={element} updateBookShelf={updateBookShelf} />)
                      }
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {
                        books.filter((element) =>
                          element.shelf === "wantToRead"
                        ).map(element => <Book key={element.id} data={element} updateBookShelf={updateBookShelf} />)
                      }
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {
                        books.filter((element) =>
                          element.shelf === "read"
                        ).map(element => <Book key={element.id} data={element} updateBookShelf={updateBookShelf} />)
                      }
                    </ol>
                  </div>
                </div>
              </div>
            </div>) :
            (<div><Loader /> </div>)
        }
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