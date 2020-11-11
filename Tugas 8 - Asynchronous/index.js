var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]

let i = 0
let waktu = 10000
function execute (books, waktu){
    if( i < books.length){
        readBooks(waktu, books[i], function(antrian) {
            if(antrian){
                execute(books, waktu)
            }
        })
        waktu -= books[i].timeSpent
        i++ 
    }
}
execute(books, waktu)