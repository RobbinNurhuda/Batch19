var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]

i = 0
waktu = 10000
function execute (books, waktu){
    if ( i < books.length ){
        readBooksPromise(waktu, books[i]) .then(function(){
            execute(books, waktu)
        }).catch(function(err){
            console.log(err)
        })
        waktu -= books[i].timeSpent
        i++
    }
}
execute(books, waktu)