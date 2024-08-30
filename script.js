    //question 1

    const books = [ { title: "To Kill a Mockingbird", author: "Harper Lee", pages: 281, genre: "Fiction" }, { title: "1984", author: "George Orwell", pages: 328, genre: "Science Fiction" }, { title: "Pride and Prejudice", author: "Jane Austen", pages: 432, genre: "Romance" }, { title: "The Catcher in the Rye", author: "J.D.  Salinger", pages: 234, genre: "Fiction" }, { title: "Brave New World", author: "Aldous Huxley", pages: 311, genre: "Science Fiction" } ];

    //forEach to tile and author
    excer_1 = books.forEach((a=>{
        console.log("Author: "+a.author+", Title: "+a.title)
    }))

   // map contain only title of the book
   excer_2 = books.map((a=>{
    console.log("title: "+a.title)
   }))


   //filter to find books > 300 pg
   excer_3 = books.filter(a => ((a.pages)>300))
   console.log(excer_3)

   //reduce to count total num of pages

   excer_4 = books.reduce((acc,curr)=>{
        acc = acc+curr.pages
        return acc
   },0)
   console.log("total pages: "+excer_4)
   
   //combination of filter,map to create an array to execute science fiction
   excer_5 = books.filter(a=>(a.genre == "Science Fiction")).map(a=>{
    console.log("Author who wrote science fiction: "+a.author)
   })

   //question 2

   a = [1, 4, 6, 2, 7]

   // by using map doubles of data

   a_map = a.map(e => e*2)
   console.log(a_map)
    
   //by using filter list an even numbers

   a_filter =  a.filter(e => (e%2 == 0))
   console.log(a_filter)

   //by using reduce tio display the sum of all numbers

   a_reduce = a.reduce((acc,cur)=>{
    acc = acc + cur
    return acc
   },0)
   console.log(a_reduce)

   // forEach logs each number
   a_forEach = a.forEach(a => console.log(a))

   ///question 3

   const products = [{name:"Laptop", price: 1200, inStock:true},{name:'Phone',price: 800, inStock: false }, { name: "Tablet", price: 600, inStock: true }, { name:"Monitor", price: 300, inStock: true}];

   //extracts & display the names of the products [map]

   prod_map = products.map(a => {
    console.log("Names of the products: "+a.name)
   })

   //filter & display the products are inStock(filter)

   prod_filter = products.filter(a => (a.inStock == 1))
   console.log(prod_filter)

   // display total price [reduce]

    prod_reduce = products.reduce((acc,cur)=>{
    acc = acc+cur.price
    return acc },0)
    console.log("product total "+prod_reduce)

   //display detailed info[foreach]

   prod_foreach = products.forEach(a => {
    console.log(a)
   })


   