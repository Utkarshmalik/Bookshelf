import React from 'react';
import { search } from '../BooksAPI';
import Book from './Reusables/Book';
import { Link } from 'react-router-dom';
import Loader from './Reusables/Loader';

class SearchPage extends React.Component {

  state = {
    text: "",
    books: [],
    loading: false
  }



  handleChange(e) {

    var val = e.target.value;
    this.setState({ text: val, books: [], loading: true })

    if (val.length === 0) {
      this.setState({ loading: false })
      return;
    }

    search(val).then(
      data => {
        console.log(data)
        this.setState({ books: (data && !data.error) ? data : [], loading: false })
      }
    )

  }



  render() {

    // console.log(this.props)

    const { updateBookShelf } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">

          <Link to='/'  >

            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            {
            }
            <input value={this.state.text} type="text" onChange={this.handleChange.bind(this)} placeholder="Search by title or author" />

          </div>



        </div>


        {
          (this.state.loading) ? (

            <Loader />
          ) :
            (
              <div className="search-books-results">
                <ol className="books-grid">
                  {
                    this.state.books.map(element =>
                      <Book key={element.id} data={element} updateBookShelf={updateBookShelf} />
                    )}

                </ol>

              </div>
            )
        }
      </div>
    )

  }

}


export default SearchPage;