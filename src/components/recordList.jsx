import React, { Component } from 'react';

class RecordList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
       
        let filteredBook=this.props.books.filter(function(book) {
            var match = book.bookTitle.toLowerCase().indexOf(this.props.inputvalue.toLowerCase());
            return (match !== -1);
          }.bind(this));
        let content;        
      let items = filteredBook.map(function(item) {
        return <div key={item.id}><h4>BookTitle: {item.bookTitle}</h4>
        <p>Author: {item.author}</p></div>;
      });
      content=<div key={items.id}>{items} </div>
    
        
        return ( <div>
            <h2>Result Page</h2>
            <button onClick={this.props.backbutton}>Back</button>
        <p>{this.props.inputvalue}</p>
           <div><h1>List of Books</h1>
           
           {content}
         </div> 
        </div>);
    }
}
 
export default RecordList;