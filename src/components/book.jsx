import React, { Component } from 'react';

class Book extends Component {
    
    render() {  
        let id=this.props.bookid;
        console.log(id);
        let bookdetail=this.props.books.find(book=>book.id===id);
        console.log(bookdetail);
    //     let content='';
    //   const items=   bookdetail.map(item=>
    //    <div key={item.id}><h4>BookTitle: {item.bookTitle}</h4>
    //         <p>Author: {item.author}</p>
    //         <p>Cover: {item.cover}</p></div>
    //       );
    //       content=<div>{items}</div> 
           
        const {backbutton}=this.props;  
        // console.log("booksdetail:"+this.props.books);   
        return (
            <div> <button onClick={backbutton}>Back Button</button> 
                <div>
                    <h1>Book Detail Page</h1>
                    {/* {content} */}
                    {/* {bookdetail} */}
                  <li>  <h3> Book Title </h3><label>{bookdetail.bookTitle}</label>
                   </li><li><h3> Cover </h3><label>{bookdetail.cover}</label>
                   </li><li> <h3> Author </h3><label>{bookdetail.author}</label></li>
                    {/* <label>Cumulative Rating</label><label>{this.props.book.cumulativerating}</label>
                    <label>Rating/Reviews</label><label>{this.props.book.review}</label> */}
                    </div>
                    </div>
            
             );
    }
}
 
export default Book;