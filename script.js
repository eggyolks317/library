const myLibrary = [];

//constructor for books
function book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.id = crypto.randomUUID;
}

function addBook(book, library) {
  library.push(book);
}
addBook(new book("title", "yoko", "pages"), myLibrary);
console.log(myLibrary[0].author);
