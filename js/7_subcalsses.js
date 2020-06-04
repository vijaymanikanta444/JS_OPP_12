class Book {
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
        
    }

    
}

//magazine sub class

class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    };
    
}

// instantiate magazine
const mag1 = new Magazine('Mag One', 'Harish', '2008', 'Jan');
const mag2 = new Magazine('Mag Two', 'Vijay', '2020', 'Mar');

console.log(mag1.getSummary());
console.log(mag2.getSummary());