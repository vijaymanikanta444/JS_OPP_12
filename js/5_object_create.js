//Object Of Protos
const BookProtos = {
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },
    getAge: function() {
        const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years Old`;

    }
}


//create objects

// const book1 = Object.create(BookProtos);
// book1.title = 'Book One';
// book1.author = 'Harish';
// book1.year = '2008';

const book1 = Object.create(BookProtos, {
    title: { value:'Book One'},
    author: { value:'Harish'},
    year: { value:'2008'},
});

console.log(book1);
