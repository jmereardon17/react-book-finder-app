import React, { Component } from 'react';
import Header from './Header';
import Book from './Book';
import Footer from './Footer';
import '../App.css';

class App extends Component {

  state = {
    bookResults: []
  };

  // key counter
  prevBookId = 1;

  bookAPI = 'https://www.googleapis.com/books/v1/volumes?';

  handleSubmit = (e) => {
    this.removeBooks();
    const query = e.target.value;
    const searchString = `${this.bookAPI}q=intitle:${query}&hl=as_pt=BOOKS&cd=1}`;
    query.length === 0
      ? this.removeBooks()
      : this.fetchData(searchString);
  }

  fetchData = api => {
    fetch(api)
      .then(response => response.json())
      .then(data => this.checkInvalidDataEntries(data))
      .then(data => this.generateBooks(data))
      .catch(error => console.log(error));
  }

  checkInvalidDataEntries = data => {
    // check if the data object contains properties; set if not
    if (!data.imageLinks) {
      data.imageLinks = { 
        thumbnail: 'https://www.esm.rochester.edu/uploads/NoPhotoAvailable-710x888.jpg' 
      }
    }
    if (!data.authors) {
      data.authors = 'No Author Information';
    }
    if (!data.publisher) {
      data.publisher = 'No Publisher Information';
    }
    return data;
  }

  generateBooks = data => {
    data.items.forEach( book => {
      const id = this.prevBookId += 1;
      const verifiedData = this.checkInvalidDataEntries(book.volumeInfo);
      const { imageLinks: { thumbnail }, title, authors, publisher, infoLink, previewLink } = verifiedData;
      const bookData = { thumbnail, title, authors, publisher, infoLink, previewLink, id };
      this.setState( prevState => {
        return {
          bookResults: [...prevState.bookResults, bookData]
        };
      });
    });
  }

  removeBooks = () => {
    this.setState( prevState => {
      return {
        bookResults: prevState.bookResults = []
      };
    });
  }

  render() {
    return (
      <div className="App">
        <Header 
          title="React Book Finder App"
          lead="Using the Google Books API (Application programming interface)."
          handleSubmit={ this.handleSubmit }
        />
        <main className="container border-top pt-5">
          <div className="row">
            { this.state.bookResults.map(book =>
              <Book
                thumbnail={book.thumbnail}
                title={book.title}
                authors={book.authors}
                infoLink={book.infoLink}
                previewLink={book.previewLink}
                key={book.id}
              />
            )}
          </div>
        </main>
        <Footer copyright="Jamie Reardon" />
      </div>
    );
  }
}

export default App;
