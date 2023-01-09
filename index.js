
  import {bookData} from "./book-data.js";

  const divSelect = document.querySelector("#bookshelfContainer");
  
  const cBookshelf = document.createElement("ul");

  
  class BookShelf {
    constructor () {
      //array to store Book 's as an array of objects
        this.inventory = [];;
   }
  
   //function that adds Book's into the array
   addToBookShelf(addBook) {
    return this.inventory.push(addBook);
    }

    
    renderBS () {
      divSelect.appendChild(cBookshelf);
      console.log("created BS");
    }
  }
  
  //instance of Bookshelf that will be used to call the function addToBookShelf
  const addBooks =  new BookShelf();
  
  const createBS = new BookShelf();
  createBS.renderBS();
  
  const ulSelect = document.querySelector("ul");

  const cLineItem = document.createElement('LI');

  class Book {
      constructor(obj){
  
        //properties of the book-data used for Book instances
          this.author = obj.author,
          this.language = obj.language,
          this.subject = obj.subject,
          this.title = obj.title;
    
      }

      //adds books to bookshelf 
      renderB (bookInfo) {
       ulSelect.appendChild(document.createElement('LI'));
       ulSelect.lastChild.innerHTML=bookInfo;
      //  ulSelect.style.listStyleType='none';
      }

   }

   //loop that creates instances of Book that transfer the bookdata key value pairs into it

   for (let i= 0; i < bookData.length; i++) {
    const theBook = new Book(bookData[i]);

  //adds Book 's into into the BookShelf array after it's created

    addBooks.addToBookShelf(theBook);

    //turns book data from object into a string

    let bookDToStr = `Title: ${theBook.title}; Author: ${theBook.author}; Language: ${theBook.language}; Subject: ${theBook.subject}`;

  // invokes function that renders bookdata into html w/ data as argument 

    theBook.renderB(bookDToStr);
    
  }
  

  
  
  