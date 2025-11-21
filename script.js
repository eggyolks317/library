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
  let container = document.querySelector("#main_container");
  let book_container = document.createElement("div");
  book_container.classList.add("container", "book");
  //create title
  let title_box = document.createElement("p");
  title_box.classList.add("title");
  title_box.textContent = book.title;
  console.log(title_box.textContent);

  //add book elements to book container
  book_container.appendChild(title_box);
  container.appendChild(book_container);
}
addBook(new book("title", "yoko", "pages"), myLibrary);
console.log(myLibrary[0].author);
