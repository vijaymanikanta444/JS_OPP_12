// constructor
function Book(title,author,year){
    this.title = title;
    this.author = author;
    this.year = year;

   

//getSummary
Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
}
};

//inherit prototype
Magazine.prototype = Object.create(Book.prototype);


//magazine
function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);

    this.month = month;
}

//instantiate magazine object
const mag1 = new Magazine('Mag One', 'Harish', '2008', 'Jan');

Magazine.prototype.constructor = Magazine

console.log(mag1);
console.log(mag1.getSummary());