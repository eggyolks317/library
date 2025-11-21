const myLibrary = [];
let container = document.querySelector("#main_container");
let dialog = document.querySelector("dialog");
let title = document.querySelector("#title");
let author = document.querySelector("#author");

//constructor for books
function book(title, author, status) {
  this.title = title;
  this.author = author;
  this.status = status;
  this.id = crypto.randomUUID;
}
//add book function adds a book to the library and returns the library size
function addBook(book, library) {
  library.push(book);
  return library.length;
}
//display books display all library books
function displayBooks(library) {
  while (container.lastChild) {
    container.removeChild(container.firstChild);
  }
  library.forEach((book) => {
    let book_container = document.createElement("div");
    book_container.classList.add("container", "book", "flex");

    //create title
    let title_box = document.createElement("p");
    title_box.classList.add("title");
    title_box.textContent = book.title;

    //create author
    let author_box = document.createElement("p");
    author_box.classList.add("author");
    author_box.textContent = book.author;

    //add book elements to book container
    book_container.appendChild(title_box);
    book_container.appendChild(author_box);
    container.appendChild(book_container);
  });
}
for (let i = 0; i < 10; i++) {
  addBook(new book(i, "author " + i, false), myLibrary);
}
let openBtn = document.querySelector("#open_dialog");
openBtn.addEventListener("click", (e) => {
  dialog.showModal();
});

let addBtn = dialog.querySelector("#add_book");
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (title.value != "" && author.value != "") {
    addBook(new book(title.value, author.value, false), myLibrary);
  }
  dialog.close();
});

dialog.addEventListener("close", (e) => {
  title.value = "";
  author.value = "";
  displayBooks(myLibrary);
});

let cancelBtn = dialog.querySelector("#cancel");
cancelBtn.addEventListener("click", (e) => {
  dialog.close();
});
displayBooks(myLibrary);
