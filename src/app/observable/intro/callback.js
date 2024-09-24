// get some book data

router.get('./books', (req, res) => {
  processData('data.txt', (err, result) => {
    fs.writeFile('/data/books.txt', result, (err, output) => {
      res.send(output)
    })
  })
})
