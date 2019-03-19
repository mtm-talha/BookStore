import React, { Component } from 'react';

import Book from './book';

import RecordList from './recordList';
class BooksList extends Component {
    constructor(){
        super();
        this.state={
            searchbook:'',            
            searchpageComponent:true,
            recordlistComponent:false,
            bookdetailComponent:false,
            bookid:'',
        }
        this.handleAllResult = this.handleAllResult.bind(this);
    }
    SearchPage = () => {
        this.setState({
          ...this.state,
          searchbook:'',
          recordlistComponent: false,          
          bookdetailComponent:false,
          searchpageComponent: true
        })
    }
    handleChange(event) {
        this.setState({
            searchbook: event.target.value
        });
      }
      
      handleAllResult(event) {
          this.setState({
            recordlistComponent: !this.state.recordlistComponent,
            searchpageComponent:!this.state.searchpageComponent
          })
        console.log(this.state.searchbook);
      }
      handleBookDetail(index) {
        this.setState({
            bookid:index,
            bookdetailComponent: !this.state.bookdetailComponent,
            searchpageComponent:!this.state.searchpageComponent
          })
    }
    render() { 
        // let filteredBook='';
        if(this.state.searchbook!==''){

            //  filteredBook=this.props.books.filter(
            //     (book)=>{
            //         return book.bookTitle.toLowerCase().indexOf(this.state.searchbook.toLowerCase())!==-1;
            //     }
            // ).map(book => <li>
            //     {book.bookTitle} {book.id}
            // </li>);
        
       
        var filteredBook=this.props.books.filter(function(book) {
            var match = book.bookTitle.toLowerCase().indexOf(this.state.searchbook.toLowerCase());
            return (match !== -1);
          }.bind(this));
        console.log(filteredBook.length);
        var content;
        if(filteredBook.length>5){
            const items = filteredBook.slice(0, 5).map(
                (item) => <li onClick={this.handleBookDetail.bind(this,item.id)}  key={item.id}><h4>BookTitle: {item.bookTitle}</h4>
                <p>Author: {item.author}</p></li>);
                 content=<div> <ul key={items.id}>{items}<li onClick={this.handleAllResult}>Remaining {filteredBook.length-5} Results</li></ul></div>
                
        }
        else{
      var items = filteredBook.map((item) =>
        <div onClick={this.handleBookDetail.bind(this,item.id)}   key={item.id}><h4>BookTitle: {item.bookTitle}</h4>
        <p>Author: {item.author}</p></div>
      );
      content=<div key={items.id}>{items} </div>
    }
    //   content =filteredBook.map((book)=>{
    //     return <Book book={book} key={book.id} backbutton={this.SearchPage}/>})
    
    
}
        return ( 
            <div>
                 {this.state.searchpageComponent && <div>
                     
       <h1>Books List</h1>
       <input type="text" value={this.state.searchbook}
                onChange={this.handleChange.bind(this)}/>
                <button onClick={this.handleAllResult}>Search</button>
                {content}
                {/* {filteredBook} */}
        {/* <ul>
            {filteredBook.map((book)=>{
                return <Book book={book} key={book.id} backbutton={this.SearchPage}/>}
            )}
            </ul>  */}
            {/* <p>{this.state.searchbook}</p> */}
            </div>}
            {this.state.recordlistComponent && <RecordList books={this.props.books} inputvalue={this.state.searchbook} backbutton={this.SearchPage}/>}
            {this.state.bookdetailComponent && <Book bookid={this.state.bookid} books={this.props.books} backbutton={this.SearchPage}/>}
            </div>
                
            );
    }
}
 
export default BooksList;