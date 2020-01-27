import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import SearchPage from './Components/SearchPage';
import MainPage from './Components/MainPage';
import { update, getAll, search } from './BooksAPI';


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */

    books: []

  }

  componentDidMount() {

  }

  updateBookShelf(book, shelf) {

    console.log(book);
    console.log(shelf)

    update(book, shelf).then(
      data => console.log(data)
    )

    update(book, shelf).then(
      data => this.setState(state => ({ books: data }))
    )
  }

  render() {
    return (

      <BrowserRouter>
        <div className="app">

          <Switch>
            <Route exact path="/">
              <MainPage books={this.state.books} />
            </Route>
            <Route exact path="/search">
              <SearchPage books={this.state.books} />
            </Route>
            <Route path="/">
              page not found
            </Route>
          </Switch>



        </div>
      </BrowserRouter>

    )
  }
}

export default BooksApp
