import React from 'react';
import { search } from '../BooksAPI';
import Book from './Reusables/Book';
import { Link } from 'react-router-dom';


class SearchPage extends React.Component {



  state = {
    text: "",
    books: []
  }

  handleChange(e) {

    var val = e.target.value;
    this.setState({ text: val, books: [] })

    if (val.length === 0) {
      return;
    }

    search(val).then(
      data => {
        this.setState(prevState => ({ books: (data && !data.error) ? data : [] }))
      }
    )

  }



  render() {


    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/'>
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            {
              /*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
               */
            }


            <input value={this.state.text} type="text" onChange={this.handleChange.bind(this)} placeholder="Search by title or author" />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">

            {

              this.state.books.map(element =>

                <Book key={element.id} data={element} />
              )}


          </ol>

        </div>
      </div>
    )

  }

}


export default SearchPage;