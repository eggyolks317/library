const myLibrary = [];

//constructor for books
function book(title, author) {
  this.title = title;
  this.author = author;
  this.id = crypto.randomUUID;
}
//add book function adds a book to the library and returns the library size
function addBook(book, library) {
  library.push(book);
  return library.length;
}
function displayBooks(library) {
  library.forEach((book) => {
    let container = document.querySelector("#main_container");
    let book_container = document.createElement("div");
    book_container.classList.add("container", "book", "flex");

    //create title
    let title_box = document.createElement("p");
    title_box.classList.add("title");
    title_box.textContent = book.title;
    console.log(title_box.textContent);

    //create author
    let author_box = document.createElement("p");
    author_box.classList.add("author");
    author_box.textContent = book.author;
    console.log(author_box.textContent);

    //add book elements to book container
    book_container.appendChild(title_box);
    book_container.appendChild(author_box);
    container.appendChild(book_container);
  });
}
for (let i = 0; i < 10; i++) {
  addBook(new book("book", "author"), myLibrary);
}
displayBooks(myLibrary);
console.log(myLibrary[0].author);
