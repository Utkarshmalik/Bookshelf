import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import {
  BrowserRouter,
  Switch,
  Route,
  Router
} from "react-router-dom";
import SearchPage from './Components/SearchPage';
import MainPage from './Components/MainPage';
import { update, getAll, search, get } from './BooksAPI';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from './Components/Reusables/Loader';



class BooksApp extends React.Component {
  state = {

    /*
    my State will contain the id's of all the books in the respective shleves 
    */

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

    //check if the element is present in main page or not


    // if (shelf === "none")
    //   return;

    update(book, shelf);


    if (book.shelf === undefined) {
      book.shelf = shelf;
      this.state.books.push(book);
      console.log(this.state.books);
      this.setState({ books: this.state.books }, console.log(this.state.books))
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
    }, console.log(this.state.books))

  }

  render() {

    return (

      <BrowserRouter>

        <div className="app">
          {
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
              (<div> <Loader /> </div>)


          }

        </div>
      </BrowserRouter>

    )
  }
}

export default BooksApp
