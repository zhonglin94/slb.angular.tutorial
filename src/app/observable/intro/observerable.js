// process books with an Observable

let booksObservable = processAllBooks();

booksObservable.subscribe(
  (book) => console.log(book.title)
  (err => console.log(err))
  (() => console.log('All done.'))
)
