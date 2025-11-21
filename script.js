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
book.prototype.changeStatus = function () {
  console.log(this.status);
  this.status = !this.status;
};
//add book function adds a book to the library and returns the library size
function addBook(book, library) {
  library.push(book);
  return library.length;
}
//display books display all library books
function displayBooks(library) {
  //remove all DOM elements
  while (container.lastChild) {
    container.removeChild(container.firstChild);
  }
  //add new DOM elements
  let i = 0;
  library.forEach((book) => {
    let book_container = document.createElement("div");
    book_container.classList.add("container", "book", "flex");
    let info_container = document.createElement("div");
    info_container.classList.add("container", "info", "flex");
    let up_section = document.createElement("div");
    up_section.classList.add("container", "up_section", "flex");

    //create title
    let title_box = document.createElement("p");
    title_box.classList.add("title");
    title_box.textContent = book.title;

    //create author
    let author_box = document.createElement("p");
    author_box.classList.add("author");
    author_box.textContent = book.author;

    //create status
    let status_box = document.createElement("p");
    status_box.classList.add("status");
    if (book.status) {
      status_box.textContent = "Read";
      status_box.setAttribute("style", "color: green");
    } else {
      status_box.textContent = "Not read yet";

      status_box.setAttribute("style", "color: red");
    }

    //create read button
    let read_btn = document.createElement("button");
    if (book.status) {
      read_btn.textContent = "Unread";
    } else {
      read_btn.textContent = "Read";
    }
    read_btn.classList.add("read_btn");
    read_btn.setAttribute("data-parent", `${i}`);
    read_btn.addEventListener("click", (e) => {
      let btn_idx = e.target.dataset.parent;
      myLibrary[btn_idx].changeStatus();
      displayBooks(myLibrary);
    });

    //create remove button
    let remove_btn = document.createElement("button");
    remove_btn.textContent = "Remove";
    remove_btn.classList.add("remove_btn");
    remove_btn.setAttribute("data-parent", `${i}`);
    remove_btn.addEventListener("click", (e) => {
      let btn_idx = e.target.dataset.parent;
      container.removeChild(
        container.querySelector(`[data-index="${btn_idx}"]`)
      );
      myLibrary.splice(btn_idx, 1);
      displayBooks(myLibrary);
    });

    //add book elements to corresponding container
    book_container.setAttribute("data-index", i);
    i++;
    info_container.appendChild(title_box);
    info_container.appendChild(author_box);
    info_container.appendChild(status_box);
    up_section.appendChild(info_container);
    up_section.appendChild(read_btn);
    book_container.appendChild(up_section);
    book_container.appendChild(remove_btn);
    container.appendChild(book_container);
  });
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

//initialize page
addBook(new book("Harry Potter", "J.K Rowling", false), myLibrary);
addBook(new book("Animal Farm", "George Orwell", true), myLibrary);
addBook(new book("A Theory of Justice", "John Rawls", false), myLibrary);

displayBooks(myLibrary);
