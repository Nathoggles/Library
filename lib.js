const dialog = document.querySelector(".dialog");
const addBookBtn = document.querySelector(".addBook");
const submitBtn = document.querySelector(".submitButton");
const form = document.querySelector(".dialogForm");
const cardsContainer = document.querySelector(".cardsContainer");
const closeBtns = document.querySelectorAll(".close-btn");

const myLibrary = [];

function Book(title, author, pages, year, place){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.year = year;
    this.place = place;
}

function addBookToLibrary(book){
    myLibrary.push(book);
}


addBookBtn.addEventListener("click", () =>{
    dialog.showModal();
})

    
form.addEventListener("submit", (e) => {
        if (e.submitter && e.submitter.classList.contains("cancelButton")) {
            form.reset();
            dialog.close();
            return;
        }
        const formData = new FormData(form);
        const bookData = {};
        formData.forEach((value, key) => {
            bookData[key] = value;
        })
        form.reset();
        const newBook = new Book(bookData.title, bookData.author, bookData.pages, bookData.year, bookData.place);
        newBook.read = false;
        addBookToLibrary(newBook);
        displayBook(newBook);
    });
function closeListener(button){
    button.addEventListener("click", () => {
        const card = button.closest(".card");
        const index = card.dataset.index;
        myLibrary.splice(index, 1);
        card.remove();
    });
}

function readListener(book, checkbox){
    checkbox.addEventListener("click", () => {
         book.read = checkbox.checked;
    });
}

 function displayBook(book){
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
    const year = document.createElement("span");
    year.classList.add("year");
    year.textContent = book.year;
    secondLine.appendChild(place);
    secondLine.appendChild(year);
    
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

    card.style.background = randomHue();

    closeListener(closeBtn);
    readListener(book, readCheckBox)
} 


function randomHue(){
    let randomHue =  "hsl(" + randomDecimal() + ", 45%, 56%";
    return randomHue;
}
    function randomDecimal(){
        const min = 1;
        const max = 360;
        const diff = max - min; 
        return Math.round(((Math.random() * diff) + min) * 10) / 10;
    } 
