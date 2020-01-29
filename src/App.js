import React from 'react'
import './App.css'
import {
  BrowserRouter, Route,
} from "react-router-dom";
import SearchPage from './Components/SearchPage';
import MainPage from './Components/MainPage';
import { update, getAll } from './BooksAPI';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from './Components/Reusables/Loader';


class BooksApp extends React.Component {

  state = {
    loading: true,
    books: []

  }

  componentDidMount() {

    getAll().then(
      data => {
        this.setState({ books: data, loading: false });
      }
    )
  }


  updateBookShelf(book, shelf) {
    update(book, shelf);
    if (book.shelf === undefined) {
      book.shelf = shelf;
      this.state.books.push(book);
      this.setState({ books: this.state.books })
      return;
    }

    this.setState({
      books: this.state.books.map(
        (element) => {
          if (element.id === book.id) {
            element.shelf = shelf
          }

          return element;
        }
      )
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">{
          (!this.state.loading) ? (
            <div>
              <Route exact path="/">
                <MainPage updateBookShelf={this.updateBookShelf.bind(this)} books={this.state.books} />
              </Route>
              <Route exact path="/search" render={({ history }) => {
                return (
                  <SearchPage updateBookShelf={(book, shelf) => {
                    this.updateBookShelf(book, shelf)
                    history.push('/');

                  }} books={this.state.books} />)

              }} />
            </div>
          ) :
            (<div> <Loader />
            </div>
            )
        }
        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
