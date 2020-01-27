import React from 'react';
import { update } from '../../BooksAPI';


class Book extends React.Component {

  state = {}

  handleChange(e) {
    console.log(e.target.value);
    //update the book with this id 
    // this.props.updateBookShelf(this.props.data, e.target.value);
  }


  render() {

    console.log(this.props.data)
    const { title, imageLinks } = this.props.data;
    const author = (this.props.data.authors) ? this.props.data.authors[0] : "";


    return (
      <div>
        <li>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks.thumbnail})` }}></div>
              <div className="book-shelf-changer">
                <select value="wantToRead" onChange={this.handleChange.bind(this)} >
                  <option value="move" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{author}</div>
          </div>
        </li>
      </div>
    )
  }

}

export default Book;