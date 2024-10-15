const dialog = document.querySelector(".dialog");
const addBookBtn = document.querySelector(".addBook");
const submitBtn = document.querySelector(".submitButton");
const form = document.querySelector(".dialogForm");
const cardsContainer = document.querySelector(".cardsContainer");

const myLibrary = [];

function Book(title, author, pages, date, place){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.date = date;
    this.place = place;
}

function addBookToLibrary(book){
    myLibrary.push(book);
}


addBookBtn.addEventListener("click", () =>{
    dialog.showModal();
})

    
submitBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const bookData = {};
        formData.forEach((value, key) => {
            bookData[key] = value;
        })
        console.log(bookData);
        dialog.close();
        form.reset();
        const newBook = new Book(bookData.title, bookData.author, bookData.pages, bookData.date, bookData.place);
        newBook.read = false;
        addBookToLibrary(newBook);
        console.log(myLibrary);
        console.log(myLibrary.length);
        displayBook(newBook);
    });



 function displayBook(book){
    console.log(book.place);
    console.log(book.date);
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.index = myLibrary.length - 1;
    
    const closeBtn = document.createElement("span");
    closeBtn.classList.add("close-btn");
    closeBtn.textContent = "×";

    const title = document.createElement("h2");
    title.classList.add("title");
    title.textContent = book.title;
    
    const author = document.createElement("p");
    author.classList.add("author");
    author.textContent = book.author;
    
    const secondLine = document.createElement("div");
    secondLine.classList.add("2ndLine");
    const place = document.createElement("span");
    place.classList.add("place");
    place.textContent = book.place + " ";
    const date = document.createElement("span");
    date.classList.add("date");
    date.textContent = book.date;
    secondLine.appendChild(place);
    secondLine.appendChild(date);
    
    const pages = document.createElement("p");
    pages.classList.add("pages");
    pages.textContent = `${book.pages} pages`;
    
    const read = document.createElement("div");
    read.classList.add("read");

    const readLabel = document.createElement("label");
    readLabel.htmlFor = "readCheckBox";
    readLabel.textContent = "Have I read it?";

    const readCheckBox = document.createElement("input");
    readCheckBox.classList.add("readCheckBox");
    readCheckBox.type = "checkbox";
    readCheckBox.name = "read";

    read.appendChild(readLabel);

    read.appendChild(readCheckBox);
    
    
    card.appendChild(closeBtn);
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(secondLine);
    card.appendChild(pages);
    card.appendChild(read);
    
    cardsContainer.appendChild(card);

} 



/* dialog.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("dialog submitted");
});
 */


