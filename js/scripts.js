let myLibrary = [
    { title: "A Game of Thrones", author: "George R. R. Martin", pages: 694, read: false },
    { title: "Another Book", author: "Some Guy", pages: 888, read: false }
];

let tableData = document.getElementById("tableData");

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {

}

function displayLibrary() {
    let newRow = '';
    for (let i = 0; i < myLibrary.length; i++) {
        newRow += '<tr>' +
            '<td>' + myLibrary[i].title + '</td>' +
            '<td>' + myLibrary[i].author + '</td>' +
            '<td>' + myLibrary[i].pages + '</td>' +
            '<td>' + myLibrary[i].read + '</td>' +
            '<td>' + '<button>' + "Change status" + '</button>' + '</td>' +
            '<td>' + '<button>' + "Edit" + '</button>' + '</td>' +
            '<td>' + '<button>' + "Delete" + '</button>' + '</td>' +
            '</tr>'
    }
    // console.log(newRow);
    document.getElementById('tableData').innerHTML = newRow;
}

// const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'not read');

// console.log(theHobbit.info); 

window.addEventListener("load", appInit, true); function appInit() {
    displayLibrary();
}