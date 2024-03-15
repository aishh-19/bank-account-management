function Author (name, birthYear , nationality){
this.name = name;
this.birthYear = birthYear;
this.nationality = nationality;
this.show = function(){
    console.log(`name : ${name} birthYear is :${birthYear} nationality :${nationality}`);
}
}
function Books(Title , author , genre , price){
    this.Title = Title;
    this.author = author;
    this.genre = genre;
    this.price = price;
    this.bookinfo =  function(){
        console.log(`Title: ${this.Title}, Author: ${this.author}, Genre: ${this.genre}, Price: ${this.price}`);
    }
}
let Author1 = new Author("shakespear"," 1564"," american");
console.log(Author1)
Author1.show();
let book1 = new Books("midnight","haruki murakami","romance","500$");
book1.bookinfo();

