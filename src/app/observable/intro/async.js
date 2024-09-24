// get a book with async/await

async function getBookById(id) {
  let book = await RetrieveBookFromServer(id)
  console.log(book.title)
  return book
}
