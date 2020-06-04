class Book {
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
        
    }

    getAge() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years Old`;
    
    }

    revise(newYear){
        this.year = newYear;
        this.revised = true;
    }
    static topBookStore() {
        return 'Vijay & Rishi'
    }
}

//instantiate Object
const book1 = new Book('Book One', 'harish', '2008');
const book2 = new Book('Book Two', 'Vijay', '2020');

// console.log(book1.title);
// console.log(book2.getSummary());
// console.log(book1.getAge());

console.log(book1);
book1.revise('2018');
console.log(book1)

console.log(Book.topBookStore);