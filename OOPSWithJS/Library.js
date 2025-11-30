class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    getAvailableBooks() {
        return this.books.filter(book => book.available);
    }
    searchByAuthor(author) {
        return this.books.find(book => book.author === author);
    }
}

const library = new Library();
library.addBook({ title: "Book A", author: "Author1", available: true });
library.addBook({ title: "Book B", author: "Author2", available: false });
library.addBook({ title: "Book C", author: "Author1", available: true });

console.log("Available Books:", library.getAvailableBooks());
console.log("Search by Author1:", library.searchByAuthor("Author1"));
