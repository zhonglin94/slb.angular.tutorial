// asynchronous value with Promise

let bookPromise = getBookByIdAsync(5)

bookPromise
  .then(book => console.log(`Data: ${book.title}`))
  .catch(err => console.log(err))
  .finally(() => console.log('All Done.'))
