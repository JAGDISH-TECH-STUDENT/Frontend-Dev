class Book {
  constructor(title, author, ISBN) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.isIssued = false;
  }

  issueBook() {
    if (!this.isIssued) {
      this.isIssued = true;
      console.log(`${this.title} has been issued.`);
    } else {
      console.log(`${this.title} is already issued.`);
    }
  }

  returnBook() {
    this.isIssued = false;
    console.log(`${this.title} has been returned.`);
  }
}

const library = [
  new Book("JS Basics", "John Doe", "111"),
  new Book("Node.js Guide", "Jane Smith", "222"),
  new Book("React Handbook", "Alex Lee", "333")
];


library.filter(book => !book.isIssued).forEach(book => console.log(book.title));


function issueByISBN(isbn) {
  const book = library.find(b => b.ISBN === isbn);
  if (book) book.issueBook();
}

issueByISBN("222");
