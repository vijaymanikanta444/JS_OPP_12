// constructor
function Book(title,author,year){
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummary = function() {
                return `${this.title} was written by ${this.author} in ${this.year}`;
            }
};

// instatiate an object
const book1 = new Book('Book One', 'Harish', '2008');
const book2 = new Book('Book Two', 'Vijay', '2020');

console.log(book1);
console.log(book2.getSummary());