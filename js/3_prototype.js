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

// get age
Book.prototype.getAge = function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years Old`;
};

// revice / change year

Book.prototype.revise =function(newYear){
        this.year = newYear;
        this.revised = true;
};

// instatiate an object
const book1 = new Book('Book One', 'Harish', '2008');
const book2 = new Book('Book Two', 'Vijay', '2020');

console.log(book1);
console.log(book2.getSummary());
console.log(book1.getAge());

console.log(book2);
book2.revise(2018);
// console.log(book2.revise(2018));

console.log(book2)