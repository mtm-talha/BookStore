import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import BookList from './components/booksList';
const books = [
  {id: 1, bookTitle: 'abcdef', cover:'asdcx', author: 'qazwsxl'},
  {id: 2, bookTitle: 'abcdef', cover:'asdcx', author: 'qazwsxl'},
  {id: 3, bookTitle: 'abcdef', cover:'asdcx', author: 'qazwsxl'},
  {id: 4, bookTitle: 'abcdef', cover:'asdcx', author: 'qazwsxall'},
  {id: 5, bookTitle: 'abcdef', cover:'asdcx', author: 'qazwsxuch'},
  {id: 6, bookTitle: 'abcdef9',cover:'asdcx', author: 'qazwsx5'},
  {id: 7, bookTitle: 'abcdef9',cover:'asdcx', author: 'qazwsx'}
];
const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: null,
      hits: [],
    };
  }
  componentDidMount() {
    // fetch(API + DEFAULT_QUERY)
    //   .then(response => response.json())
    //   .then(data => this.setState({ hits: data.hits }));
      fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.json())
      .then(books => this.setState({ books: books }));
  }
  render() {
      console.log(this.state.books)


    return (
      <div className="App">
       <BookList books={books}/>
      </div>
    );
  }
}

export default App;
