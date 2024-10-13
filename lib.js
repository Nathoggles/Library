const myLibrary = [];

function Book(title, author, pages, read, date, location){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.date = date;
    this.location = location;
}

function addBookToLibrary(book){
    myLibrary.push(book);
}