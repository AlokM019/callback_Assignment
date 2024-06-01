//4. list of books using callback function
let books = [
   { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
   { title: "1984", author: "George Orwell", year: 1949 },
   { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
   { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 }
];

function bookTitle(books, callback){
   let new_list = books.map(book => book.title);
   callback(new_list);
}

function alphabaticalTitle(titles){
   //sort the array in alphabatical order
   titles.sort();

   titles.forEach(title => {
      console.log(title)
   });
}

bookTitle(books, alphabaticalTitle)