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
import { update, getAll, search, get } from './BooksAPI';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from './Components/Reusables/Loader';



class BooksApp extends React.Component {
  state = {

    /*
    my State will contain the id's of all the books in the respective shleves 
    */
    loading: true,
    books: { currentlyReading: [], wantToRead: [], read: [] }
  }

  componentDidMount() {

    getAll().then(
      data => {
        console.log(data);

        const shelf1 = data.filter((element) => {
          return element.shelf === "currentlyReading";
        })

        const shelf2 = data.filter((element) => {
          return element.shelf === "wantToRead";
        })

        const shelf3 = data.filter((element) => {
          return element.shelf === "read";
        })

        this.setState({ books: { currentlyReading: shelf1, wantToRead: shelf2, read: shelf3 }, loading: false }, console.log(this.state))

      }
    )
  }

  updateBookShelf(book, shelf) {

    console.log(book);
    console.log(shelf)

    console.log("frfr")

    update(book, shelf).then(
      data => {
        console.log(data)

        const { currentlyReading, wantToRead, read } = data;

        var shelf1 = []

        
        currentlyReading.forEach(element => {
          get(element).then(
            data => shelf1.push(data)
          )
        });

        var shelf2 = []

        wantToRead.forEach(element => {
          get(element).then(
            data => shelf2.push(data)
          )
        });

        var shelf3 = []

        read.forEach(element => {
          get(element).then(
            data => shelf3.push(data)
          )
        });

        return { currentlyReading: shelf1, wantToRead: shelf2, read: shelf3 };
      }
    ).then(


      data => this.setState(state => ({ books: data }))

      //data => console.log(data)
    )



  }

  render() {
    return (

      <BrowserRouter>
        <div className="app">
          {
            (!this.state.loading) ? (
              <Switch>
                <Route exact path="/">
                  <MainPage updateBookShelf={this.updateBookShelf.bind(this)} books={this.state.books} />
                </Route>
                <Route exact path="/search">
                  <SearchPage books={this.state.books} />
                </Route>
                <Route path="/">
                  page not found
            </Route>
              </Switch>
            ) :
              (<div> <Loader /> </div>)


          }
        </div>
      </BrowserRouter>

    )
  }
}

export default BooksApp
