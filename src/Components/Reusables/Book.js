import React from 'react';


class Book extends React.Component {

  state = {
    shelf: ""
  }

  handleChange(e) {
    this.setState({ shelf: e.target.value })
    this.props.updateBookShelf(this.props.data, e.target.value);
  }

  componentDidMount() {
    this.setState({
      shelf: this.props.data.shelf
    })
  }


  render() {
    const { title } = this.props.data;
    const author = (this.props.data.authors) ? this.props.data.authors : [];
    return (
      <div>
        <li>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{
                width: 128, height: 193, backgroundImage: (this.props.data.imageLinks) ? `url("${this.props.data.imageLinks.thumbnail}")` : ""
              }}></div>
              <div className="book-shelf-changer">
                <select value={this.state.shelf || "none"} onChange={this.handleChange.bind(this)} >
                  <option value="move" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{

              author.map((element) => {
                return element;
              })

            }</div>
          </div>
        </li>
      </div>
    )
  }

}

export default Book;