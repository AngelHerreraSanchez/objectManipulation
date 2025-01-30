class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
}

const person = new Book("The Cat in the Hat", "Dr. Seuss", 1957);

const getSummary = {
    summary: "This book is about a cat that shows the world his silliness"
}

console.log(Book);

Book.genre = "Children Book";

delete Book.year;

console.log(Book);